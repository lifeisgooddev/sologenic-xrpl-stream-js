[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [ServerHttp2Stream](_http2_.serverhttp2stream.md)

# Class: ServerHttp2Stream

## Hierarchy

  ↳ [Http2Stream](_http2_.http2stream.md)

  ↳ **ServerHttp2Stream**

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [Writable](_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_http2_.serverhttp2stream.md#private-constructor)

### Properties

* [aborted](_http2_.serverhttp2stream.md#aborted)
* [bufferSize](_http2_.serverhttp2stream.md#buffersize)
* [closed](_http2_.serverhttp2stream.md#closed)
* [destroyed](_http2_.serverhttp2stream.md#destroyed)
* [endAfterHeaders](_http2_.serverhttp2stream.md#endafterheaders)
* [headersSent](_http2_.serverhttp2stream.md#headerssent)
* [id](_http2_.serverhttp2stream.md#optional-id)
* [pending](_http2_.serverhttp2stream.md#pending)
* [pushAllowed](_http2_.serverhttp2stream.md#pushallowed)
* [readable](_http2_.serverhttp2stream.md#readable)
* [readableHighWaterMark](_http2_.serverhttp2stream.md#readablehighwatermark)
* [readableLength](_http2_.serverhttp2stream.md#readablelength)
* [readableObjectMode](_http2_.serverhttp2stream.md#readableobjectmode)
* [rstCode](_http2_.serverhttp2stream.md#rstcode)
* [sentHeaders](_http2_.serverhttp2stream.md#sentheaders)
* [sentInfoHeaders](_http2_.serverhttp2stream.md#optional-sentinfoheaders)
* [sentTrailers](_http2_.serverhttp2stream.md#optional-senttrailers)
* [session](_http2_.serverhttp2stream.md#session)
* [state](_http2_.serverhttp2stream.md#state)
* [writable](_http2_.serverhttp2stream.md#writable)
* [writableFinished](_http2_.serverhttp2stream.md#writablefinished)
* [writableHighWaterMark](_http2_.serverhttp2stream.md#writablehighwatermark)
* [writableLength](_http2_.serverhttp2stream.md#writablelength)
* [writableObjectMode](_http2_.serverhttp2stream.md#writableobjectmode)
* [defaultMaxListeners](_http2_.serverhttp2stream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_http2_.serverhttp2stream.md#[symbol.asynciterator])
* [_destroy](_http2_.serverhttp2stream.md#_destroy)
* [_final](_http2_.serverhttp2stream.md#_final)
* [_read](_http2_.serverhttp2stream.md#_read)
* [_write](_http2_.serverhttp2stream.md#_write)
* [_writev](_http2_.serverhttp2stream.md#optional-_writev)
* [addListener](_http2_.serverhttp2stream.md#addlistener)
* [additionalHeaders](_http2_.serverhttp2stream.md#additionalheaders)
* [close](_http2_.serverhttp2stream.md#close)
* [cork](_http2_.serverhttp2stream.md#cork)
* [destroy](_http2_.serverhttp2stream.md#destroy)
* [emit](_http2_.serverhttp2stream.md#emit)
* [end](_http2_.serverhttp2stream.md#end)
* [eventNames](_http2_.serverhttp2stream.md#eventnames)
* [getMaxListeners](_http2_.serverhttp2stream.md#getmaxlisteners)
* [isPaused](_http2_.serverhttp2stream.md#ispaused)
* [listenerCount](_http2_.serverhttp2stream.md#listenercount)
* [listeners](_http2_.serverhttp2stream.md#listeners)
* [off](_http2_.serverhttp2stream.md#off)
* [on](_http2_.serverhttp2stream.md#on)
* [once](_http2_.serverhttp2stream.md#once)
* [pause](_http2_.serverhttp2stream.md#pause)
* [pipe](_http2_.serverhttp2stream.md#pipe)
* [prependListener](_http2_.serverhttp2stream.md#prependlistener)
* [prependOnceListener](_http2_.serverhttp2stream.md#prependoncelistener)
* [priority](_http2_.serverhttp2stream.md#priority)
* [push](_http2_.serverhttp2stream.md#push)
* [pushStream](_http2_.serverhttp2stream.md#pushstream)
* [rawListeners](_http2_.serverhttp2stream.md#rawlisteners)
* [read](_http2_.serverhttp2stream.md#read)
* [removeAllListeners](_http2_.serverhttp2stream.md#removealllisteners)
* [removeListener](_http2_.serverhttp2stream.md#removelistener)
* [respond](_http2_.serverhttp2stream.md#respond)
* [respondWithFD](_http2_.serverhttp2stream.md#respondwithfd)
* [respondWithFile](_http2_.serverhttp2stream.md#respondwithfile)
* [resume](_http2_.serverhttp2stream.md#resume)
* [sendTrailers](_http2_.serverhttp2stream.md#sendtrailers)
* [setDefaultEncoding](_http2_.serverhttp2stream.md#setdefaultencoding)
* [setEncoding](_http2_.serverhttp2stream.md#setencoding)
* [setMaxListeners](_http2_.serverhttp2stream.md#setmaxlisteners)
* [setTimeout](_http2_.serverhttp2stream.md#settimeout)
* [uncork](_http2_.serverhttp2stream.md#uncork)
* [unpipe](_http2_.serverhttp2stream.md#unpipe)
* [unshift](_http2_.serverhttp2stream.md#unshift)
* [wrap](_http2_.serverhttp2stream.md#wrap)
* [write](_http2_.serverhttp2stream.md#write)
* [from](_http2_.serverhttp2stream.md#static-from)
* [listenerCount](_http2_.serverhttp2stream.md#static-listenercount)

## Constructors

### `Private` constructor

\+ **new ServerHttp2Stream**(): *[ServerHttp2Stream](_http2_.serverhttp2stream.md)*

*Overrides [Http2Stream](_http2_.http2stream.md).[constructor](_http2_.http2stream.md#protected-constructor)*

Defined in node_modules/@types/node/http2.d.ts:225

**Returns:** *[ServerHttp2Stream](_http2_.serverhttp2stream.md)*

## Properties

###  aborted

• **aborted**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[aborted](_http2_.http2stream.md#aborted)*

Defined in node_modules/@types/node/http2.d.ts:65

___

###  bufferSize

• **bufferSize**: *number*

*Inherited from [Http2Stream](_http2_.http2stream.md).[bufferSize](_http2_.http2stream.md#buffersize)*

Defined in node_modules/@types/node/http2.d.ts:66

___

###  closed

• **closed**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[closed](_http2_.http2stream.md#closed)*

Defined in node_modules/@types/node/http2.d.ts:67

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[destroyed](_http2_.http2stream.md#destroyed)*

*Overrides [Hash](_crypto_.hash.md).[destroyed](_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/http2.d.ts:68

___

###  endAfterHeaders

• **endAfterHeaders**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[endAfterHeaders](_http2_.http2stream.md#endafterheaders)*

Defined in node_modules/@types/node/http2.d.ts:73

Set the true if the END_STREAM flag was set in the request or response HEADERS frame received,
indicating that no additional data should be received and the readable side of the Http2Stream will be closed.

___

###  headersSent

• **headersSent**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:229

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Http2Stream](_http2_.http2stream.md).[id](_http2_.http2stream.md#optional-id)*

Defined in node_modules/@types/node/http2.d.ts:74

___

###  pending

• **pending**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[pending](_http2_.http2stream.md#pending)*

Defined in node_modules/@types/node/http2.d.ts:75

___

###  pushAllowed

• **pushAllowed**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:230

___

###  readable

• **readable**: *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[readable](../interfaces/nodejs.readablestream.md#readable)*

*Inherited from [Hash](_crypto_.hash.md).[readable](_crypto_.hash.md#readable)*

Defined in node_modules/@types/node/stream.d.ts:26

___

###  readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [Hash](_crypto_.hash.md).[readableHighWaterMark](_crypto_.hash.md#readablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:27

___

###  readableLength

• **readableLength**: *number*

*Inherited from [Hash](_crypto_.hash.md).[readableLength](_crypto_.hash.md#readablelength)*

Defined in node_modules/@types/node/stream.d.ts:28

___

###  readableObjectMode

• **readableObjectMode**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[readableObjectMode](_crypto_.hash.md#readableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:29

___

###  rstCode

• **rstCode**: *number*

*Inherited from [Http2Stream](_http2_.http2stream.md).[rstCode](_http2_.http2stream.md#rstcode)*

Defined in node_modules/@types/node/http2.d.ts:76

___

###  sentHeaders

• **sentHeaders**: *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sentHeaders](_http2_.http2stream.md#sentheaders)*

Defined in node_modules/@types/node/http2.d.ts:77

___

### `Optional` sentInfoHeaders

• **sentInfoHeaders**? : *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)[]*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sentInfoHeaders](_http2_.http2stream.md#optional-sentinfoheaders)*

Defined in node_modules/@types/node/http2.d.ts:78

___

### `Optional` sentTrailers

• **sentTrailers**? : *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sentTrailers](_http2_.http2stream.md#optional-senttrailers)*

Defined in node_modules/@types/node/http2.d.ts:79

___

###  session

• **session**: *[Http2Session](_http2_.http2session.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[session](_http2_.http2stream.md#session)*

Defined in node_modules/@types/node/http2.d.ts:80

___

###  state

• **state**: *[StreamState](../interfaces/_http2_.streamstate.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[state](_http2_.http2stream.md#state)*

Defined in node_modules/@types/node/http2.d.ts:81

___

###  writable

• **writable**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[writable](_crypto_.hash.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:221

___

###  writableFinished

• **writableFinished**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[writableFinished](_crypto_.hash.md#writablefinished)*

Defined in node_modules/@types/node/stream.d.ts:222

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [Hash](_crypto_.hash.md).[writableHighWaterMark](_crypto_.hash.md#writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:223

___

###  writableLength

• **writableLength**: *number*

*Inherited from [Hash](_crypto_.hash.md).[writableLength](_crypto_.hash.md#writablelength)*

Defined in node_modules/@types/node/stream.d.ts:224

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[writableObjectMode](_crypto_.hash.md#writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:225

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹any›*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[[Symbol.asyncIterator]](_crypto_.hash.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/stream.d.ts:103

**Returns:** *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹any›*

___

###  _destroy

▸ **_destroy**(`error`: [Error](../interfaces/error.md) | null, `callback`: function): *void*

*Inherited from [Hash](_crypto_.hash.md).[_destroy](_crypto_.hash.md#_destroy)*

*Overrides [ReadStream](_fs_.readstream.md).[_destroy](_fs_.readstream.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:229

**Parameters:**

▪ **error**: *[Error](../interfaces/error.md) | null*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [Hash](_crypto_.hash.md).[_final](_crypto_.hash.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:230

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [Hash](_crypto_.hash.md).[_read](_crypto_.hash.md#_read)*

Defined in node_modules/@types/node/stream.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [Hash](_crypto_.hash.md).[_write](_crypto_.hash.md#_write)*

Defined in node_modules/@types/node/stream.d.ts:227

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: [Array](../interfaces/regexpmatcharray.md#array)‹object›, `callback`: function): *void*

*Inherited from [Hash](_crypto_.hash.md).[_writev](_crypto_.hash.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:228

**Parameters:**

▪ **chunks**: *[Array](../interfaces/regexpmatcharray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "aborted", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:88

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:89

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:90

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:91

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:92

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:93

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:94

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "frameError", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:95

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:96

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **addListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:97

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **addListener**(`event`: "streamClosed", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:98

**Parameters:**

▪ **event**: *"streamClosed"*

▪ **listener**: *function*

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

▸ **addListener**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:99

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "trailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:100

**Parameters:**

▪ **event**: *"trailers"*

▪ **listener**: *function*

▸ (`trailers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`trailers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **addListener**(`event`: "wantTrailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:101

**Parameters:**

▪ **event**: *"wantTrailers"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:102

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  additionalHeaders

▸ **additionalHeaders**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)): *void*

Defined in node_modules/@types/node/http2.d.ts:228

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |

**Returns:** *void*

___

###  close

▸ **close**(`code?`: undefined | number, `callback?`: undefined | function): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[close](_http2_.http2stream.md#close)*

Defined in node_modules/@types/node/http2.d.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`code?` | undefined &#124; number |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  cork

▸ **cork**(): *void*

*Inherited from [Hash](_crypto_.hash.md).[cork](_crypto_.hash.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:237

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../interfaces/error.md)): *void*

*Inherited from [Hash](_crypto_.hash.md).[destroy](_crypto_.hash.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "aborted"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:104

**Parameters:**

Name | Type |
------ | ------ |
`event` | "aborted" |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:105

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: [Buffer](buffer.md) | string): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:106

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:108

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:109

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:110

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "frameError", `frameType`: number, `errorCode`: number): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:111

**Parameters:**

Name | Type |
------ | ------ |
`event` | "frameError" |
`frameType` | number |
`errorCode` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: stream.Readable): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:112

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | stream.Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: stream.Readable): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:113

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | stream.Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "streamClosed", `code`: number): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`event` | "streamClosed" |
`code` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "timeout"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:115

**Parameters:**

Name | Type |
------ | ------ |
`event` | "timeout" |

**Returns:** *boolean*

▸ **emit**(`event`: "trailers", `trailers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:116

**Parameters:**

Name | Type |
------ | ------ |
`event` | "trailers" |
`trailers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "wantTrailers"): *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:117

**Parameters:**

Name | Type |
------ | ------ |
`event` | "wantTrailers" |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:118

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[isPaused](_crypto_.hash.md#ispaused)*

Defined in node_modules/@types/node/stream.d.ts:37

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: "aborted", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:120

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:121

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:122

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:123

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:124

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:125

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "finish", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:126

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "frameError", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:127

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:128

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **on**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:129

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **on**(`event`: "streamClosed", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:130

**Parameters:**

▪ **event**: *"streamClosed"*

▪ **listener**: *function*

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

▸ **on**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:131

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "trailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:132

**Parameters:**

▪ **event**: *"trailers"*

▪ **listener**: *function*

▸ (`trailers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`trailers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **on**(`event`: "wantTrailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:133

**Parameters:**

▪ **event**: *"wantTrailers"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:134

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: "aborted", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:136

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:137

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:138

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:139

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:140

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:141

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "finish", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:142

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "frameError", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:143

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:144

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **once**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:145

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **once**(`event`: "streamClosed", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:146

**Parameters:**

▪ **event**: *"streamClosed"*

▪ **listener**: *function*

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

▸ **once**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:147

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "trailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:148

**Parameters:**

▪ **event**: *"trailers"*

▪ **listener**: *function*

▸ (`trailers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`trailers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **once**(`event`: "wantTrailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:149

**Parameters:**

▪ **event**: *"wantTrailers"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:150

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[pause](_crypto_.hash.md#pause)*

Defined in node_modules/@types/node/stream.d.ts:35

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [Hash](_crypto_.hash.md).[pipe](_crypto_.hash.md#pipe)*

Defined in node_modules/@types/node/stream.d.ts:5

**Type parameters:**

▪ **T**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

___

###  prependListener

▸ **prependListener**(`event`: "aborted", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:152

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:153

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:154

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:155

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:156

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:157

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:158

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "frameError", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:159

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:160

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:161

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependListener**(`event`: "streamClosed", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:162

**Parameters:**

▪ **event**: *"streamClosed"*

▪ **listener**: *function*

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:163

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "trailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:164

**Parameters:**

▪ **event**: *"trailers"*

▪ **listener**: *function*

▸ (`trailers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`trailers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "wantTrailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:165

**Parameters:**

▪ **event**: *"wantTrailers"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:166

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: "aborted", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:168

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:169

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:170

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:171

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:172

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:173

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:174

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "frameError", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:175

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:176

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:177

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "streamClosed", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:178

**Parameters:**

▪ **event**: *"streamClosed"*

▪ **listener**: *function*

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:179

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "trailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:180

**Parameters:**

▪ **event**: *"trailers"*

▪ **listener**: *function*

▸ (`trailers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`trailers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "wantTrailers", `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:181

**Parameters:**

▪ **event**: *"wantTrailers"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:182

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  priority

▸ **priority**(`options`: [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md)): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[priority](_http2_.http2stream.md#priority)*

Defined in node_modules/@types/node/http2.d.ts:84

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md) |

**Returns:** *void*

___

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[push](_crypto_.hash.md#push)*

Defined in node_modules/@types/node/stream.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

###  pushStream

▸ **pushStream**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:231

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **pushStream**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md), `options?`: [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |
`options?` | [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  read

▸ **read**(`size?`: undefined | number): *any*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[read](_crypto_.hash.md#read)*

Defined in node_modules/@types/node/stream.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:96

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:97

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:98

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:99

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:100

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:101

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  respond

▸ **respond**(`headers?`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md), `options?`: [ServerStreamResponseOptions](../interfaces/_http2_.serverstreamresponseoptions.md)): *void*

Defined in node_modules/@types/node/http2.d.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`headers?` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |
`options?` | [ServerStreamResponseOptions](../interfaces/_http2_.serverstreamresponseoptions.md) |

**Returns:** *void*

___

###  respondWithFD

▸ **respondWithFD**(`fd`: number, `headers?`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md), `options?`: [ServerStreamFileResponseOptions](../interfaces/_http2_.serverstreamfileresponseoptions.md)): *void*

Defined in node_modules/@types/node/http2.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`headers?` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |
`options?` | [ServerStreamFileResponseOptions](../interfaces/_http2_.serverstreamfileresponseoptions.md) |

**Returns:** *void*

___

###  respondWithFile

▸ **respondWithFile**(`path`: string, `headers?`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md), `options?`: [ServerStreamFileResponseOptionsWithError](../interfaces/_http2_.serverstreamfileresponseoptionswitherror.md)): *void*

Defined in node_modules/@types/node/http2.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`headers?` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |
`options?` | [ServerStreamFileResponseOptionsWithError](../interfaces/_http2_.serverstreamfileresponseoptionswitherror.md) |

**Returns:** *void*

___

###  resume

▸ **resume**(): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[resume](_crypto_.hash.md#resume)*

Defined in node_modules/@types/node/stream.d.ts:36

**Returns:** *this*

___

###  sendTrailers

▸ **sendTrailers**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sendTrailers](_http2_.http2stream.md#sendtrailers)*

Defined in node_modules/@types/node/http2.d.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |

**Returns:** *void*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [Hash](_crypto_.hash.md).[setDefaultEncoding](_crypto_.hash.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[setEncoding](_crypto_.hash.md#setencoding)*

Defined in node_modules/@types/node/stream.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setTimeout

▸ **setTimeout**(`msecs`: number, `callback?`: undefined | function): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[setTimeout](_http2_.http2stream.md#settimeout)*

Defined in node_modules/@types/node/http2.d.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [Hash](_crypto_.hash.md).[uncork](_crypto_.hash.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:238

**Returns:** *void*

___

###  unpipe

▸ **unpipe**(`destination?`: [WritableStream](../interfaces/nodejs.writablestream.md)): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[unpipe](_crypto_.hash.md#unpipe)*

Defined in node_modules/@types/node/stream.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | [WritableStream](../interfaces/nodejs.writablestream.md) |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: any, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *void*

*Inherited from [Hash](_crypto_.hash.md).[unshift](_crypto_.hash.md#unshift)*

Defined in node_modules/@types/node/stream.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: [ReadableStream](../interfaces/nodejs.readablestream.md)): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[wrap](_crypto_.hash.md#wrap)*

Defined in node_modules/@types/node/stream.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | [ReadableStream](../interfaces/nodejs.readablestream.md) |

**Returns:** *this*

___

###  write

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/stream.d.ts:231

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/stream.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

___

### `Static` from

▸ **from**(`iterable`: [Iterable](../interfaces/iterable.md)‹any› | [AsyncIterable](../interfaces/asynciterable.md)‹any›, `options?`: [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md)): *[Readable](_stream_.internal.readable.md)*

*Inherited from [Hash](_crypto_.hash.md).[from](_crypto_.hash.md#static-from)*

Defined in node_modules/@types/node/stream.d.ts:24

A utility method for creating Readable Streams out of iterators.

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | [Iterable](../interfaces/iterable.md)‹any› &#124; [AsyncIterable](../interfaces/asynciterable.md)‹any› |
`options?` | [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md) |

**Returns:** *[Readable](_stream_.internal.readable.md)*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
