import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { SologenicError } from '../error';
import { httpRequest, wait } from '../utils';
import { XummWalletSignerSubmitPayload } from '../../types/api_signer';
import moment from 'moment';

export class XummWalletSigner extends SologenicTxSigner {
  protected server_url: string = '';
  protected container_id: string = '';
  protected address: string = '';
  protected signing_refs: any;
  protected fallback_container_id: string = '';
  protected is_mobile: boolean = false;
  signerID: string = 'xumm';

  constructor(options: any) {
    super(options);

    if (options.hasOwnProperty('server')) {
      this.server_url = options['server'];
    } else {
      throw new Error('Server url missing.');
    }

    if (options.hasOwnProperty('container_id')) {
      this.container_id = options['container_id'];
    } else {
      throw new Error('Container ID missing.');
    }

    if (options.hasOwnProperty('fallback_container_id')) {
      this.fallback_container_id = options['fallback_container_id'];
    } else {
      throw new Error('Fallback container ID missing.');
    }

    if (options.hasOwnProperty('is_mobile')) {
      this.is_mobile = options['is_mobile'];
    }

    this.includeSequence = true;
  }

  async requestConnection(): Promise<SologenicTypes.SignerConnectionRef> {
    const tx_json = {
      TransactionType: 'SignIn'
      // TransactionKind: 'SignIn'
    };

    const connectionRefs = await httpRequest<XummWalletSignerSubmitPayload>(
      this.server_url + 'xumm/payload',
      'post',
      {},
      JSON.stringify({
        tx_json: tx_json,
        options: {
          expires_at: moment()
            .add(10, 'm')
            .toISOString()
        }
      })
    );

    var signed_tx: any;

    if (connectionRefs.refs) {
      let qrCode = document.createElement('img');
      qrCode.setAttribute('src', connectionRefs.refs.qr);
      qrCode.setAttribute('alt', 'QR Code');

      let container: any = document.getElementById(this.container_id);
      container.appendChild(qrCode);

      if (this.is_mobile) {
        let deepLink = document.createElement('a');
        deepLink.setAttribute('href', connectionRefs.refs.deeplink);
        deepLink.setAttribute('target', '_blank');
        deepLink.setAttribute('rel', 'noopener noreferrer');
        deepLink.innerText = 'XUMM Wallet >';

        container.appendChild(deepLink);
      }

      const socket: WebSocket = new WebSocket(connectionRefs.refs.ws);
      var isSocketOpen = false;
      const expires_at = moment()
        .add(10, 'm')
        .valueOf();

      var socket_interval: any = null;

      var socketResponse = {
        updated: false,
        data: null
      };

      socket.addEventListener('open', () => {
        isSocketOpen = true;
        socket_interval = setInterval(() => {
          socket.send('ping');
        }, 5000);
      });

      socket.addEventListener('message', message => {
        if (message.data !== 'pong') {
          const { data } = message;

          if (JSON.parse(data).hasOwnProperty('signed')) {
            socketResponse = {
              updated: true,
              data: JSON.parse(message.data)
            };
          }
        }
      });

      socket.onerror = event => {
        throw new Error('WebSocket error: ' + event);
      };

      while (true) {
        if (moment().valueOf() > expires_at) {
          if (isSocketOpen) {
            socket.close();
            clearInterval(socket_interval);
            throw new Error('Timed out. No response from server.');
          } else {
            throw new Error('Unable to establish connection with the server.');
          }
        }

        if (socketResponse.updated) {
          socket.close();
          clearInterval(socket_interval);
          break;
        }

        await wait(1000);
      }

      if (socketResponse.updated) {
        let waitTime = 100;
        let data: any = socketResponse.data;

        if (data.hasOwnProperty('signed') && !data.signed) {
          throw new SologenicError('2004');
        }

        async function checkForSigned(url: string) {
          while (true) {
            try {
              const signedTx = await httpRequest<XummWalletSignerSubmitPayload>(
                url + 'xumm/payload/' + connectionRefs.meta.identifier,
                'get',
                {},
                ''
              );

              if (signedTx.hasOwnProperty('signer')) {
                signed_tx = signedTx;
                break;
              }

              if (
                signedTx.hasOwnProperty('meta') &&
                !signedTx.meta.signed &&
                waitTime < 1000
              ) {
                waitTime *= 2;
                throw new Error('try again');
              } else {
                throw new Error('throw unspecified error');
              }
            } catch (e) {
              if (e === 'try again') {
                await wait(waitTime);
              }

              if (e === 'throw error') {
                throw new SologenicError('1001');
              }
            }
          }
        }

        await checkForSigned(this.server_url);
      }
    }

    this.address = signed_tx.signer;

    return {
      address: signed_tx.signer
    };
  }

  async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    _account?: XrplAccount,
    _signingOptions: any = {}
  ): Promise<SologenicTypes.SignedTx> {
    try {
      // Delete the transaction metadata if it exists since the signing will fail
      // as this TransactionMetadata is not known to the schema.
      if (txJson.TransactionMetadata) delete txJson.TransactionMetadata;

      if (txJson.LastLedgerSequence)
        txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;

      const tx_init = await httpRequest<XummWalletSignerSubmitPayload>(
        this.server_url + 'xumm/payload',
        'post',
        {},
        JSON.stringify({
          tx_json: txJson,
          options: {
            submit: false,
            signer: txJson.Account,
            expires_at: moment()
              .add(10, 'm')
              .toISOString()
          }
        })
      );

      var signed_tx: any;

      if (tx_init.refs) {
        this.signing_refs = tx_init.refs;

        const socket: WebSocket = new WebSocket(tx_init.refs.ws);
        var isSocketOpen = false;
        const expires_at = moment()
          .add(10, 'm')
          .valueOf();

        var socket_interval: any = null;

        var socketResponse = {
          updated: false,
          data: null
        };

        socket.addEventListener('open', () => {
          isSocketOpen = true;
          socket_interval = setInterval(() => {
            socket.send('ping');
          }, 5000);
        });

        socket.addEventListener('message', message => {
          if (message.data !== 'pong') {
            const { data } = message;

            if (JSON.parse(data).hasOwnProperty('signed')) {
              socketResponse = {
                updated: true,
                data: JSON.parse(message.data)
              };
            }
          }
        });

        socket.onerror = event => {
          throw new Error('WebSocket error: ' + event);
        };

        while (true) {
          if (moment().valueOf() > expires_at) {
            if (isSocketOpen) {
              socket.close();
              clearInterval(socket_interval);
              throw new Error('Timed out. No response from server.');
            } else {
              throw new Error(
                'Unable to establish connection with the server.'
              );
            }
          }

          if (this.cancelled) {
            if (isSocketOpen) {
              socket.close();
              clearInterval(socket_interval);
            }

            this.cancelled = false;
            throw new SologenicError('2005');
          }

          if (socketResponse.updated) {
            socket.close();
            clearInterval(socket_interval);
            break;
          }

          await wait(1000);
        }

        if (socketResponse.updated) {
          let data: any = socketResponse.data;
          let waitTime = 100;

          if (data.hasOwnProperty('signed') && !data.signed) {
            throw new SologenicError('2003');
          }

          async function checkForSigned(url: string, id: string) {
            while (true) {
              try {
                const signedTx = await httpRequest<
                  XummWalletSignerSubmitPayload
                >(url + 'xumm/payload/' + id, 'get', {}, '');

                if (signedTx.hasOwnProperty('signer')) {
                  signed_tx = signedTx;
                  break;
                }

                if (
                  signedTx.hasOwnProperty('meta') &&
                  !signedTx.meta.signed &&
                  waitTime < 1000
                ) {
                  waitTime *= 2;
                  throw new Error('try again');
                } else {
                  throw new Error('throw unspecified error');
                }
              } catch (e) {
                if (e === 'throw error') {
                  throw new SologenicError('1001');
                }

                if (
                  e.message === 'Error: Request failed with status code 500'
                ) {
                  throw new SologenicError('1003');
                }

                if (e === 'try again') {
                  await wait(waitTime);
                }
              }
            }
          }

          await checkForSigned(this.server_url, data.payload_uuidv4);
        }
      }

      this.signing_refs = '';

      if (signed_tx.tx_hex) {
        return {
          id: txId,
          signedTransaction: signed_tx.tx_hex
        };
      } else {
        throw new SologenicError('1000');
      }
    } catch (e) {
      if (e.message === 'connection_error') {
        throw new SologenicError('1003');
      }

      throw new Error(e.message);
    }
  }

  showSigningQRcode() {
    console.log('clike', this.is_mobile);
    let qrCode = document.createElement('img');
    qrCode.setAttribute('src', this.signing_refs.qr);
    qrCode.setAttribute('alt', 'QR Code');

    let container: any = document.getElementById(this.fallback_container_id);
    container.appendChild(qrCode);

    if (this.is_mobile) {
      let deepLink = document.createElement('a');
      deepLink.setAttribute('href', this.signing_refs.deeplink);
      deepLink.setAttribute('target', '_blank');
      deepLink.setAttribute('rel', 'noopener noreferrer');
      deepLink.innerText = 'XUMM Wallet >';

      container.appendChild(deepLink);
    }
  }
}