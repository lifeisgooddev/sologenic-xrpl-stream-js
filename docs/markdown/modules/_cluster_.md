[typescript](../README.md) › [Globals](../globals.md) › ["cluster"](_cluster_.md)

# Module: "cluster"

## Index

### Classes

* [Worker](../classes/_cluster_.worker.md)

### Interfaces

* [Address](../interfaces/_cluster_.address.md)
* [Cluster](../interfaces/_cluster_.cluster.md)
* [ClusterSettings](../interfaces/_cluster_.clustersettings.md)

### Variables

* [isMaster](_cluster_.md#const-ismaster)
* [isWorker](_cluster_.md#const-isworker)
* [settings](_cluster_.md#const-settings)
* [worker](_cluster_.md#const-worker)
* [workers](_cluster_.md#const-workers)

### Functions

* [addListener](_cluster_.md#addlistener)
* [disconnect](_cluster_.md#disconnect)
* [emit](_cluster_.md#emit)
* [eventNames](_cluster_.md#eventnames)
* [fork](_cluster_.md#fork)
* [getMaxListeners](_cluster_.md#getmaxlisteners)
* [listenerCount](_cluster_.md#listenercount)
* [listeners](_cluster_.md#listeners)
* [on](_cluster_.md#on)
* [once](_cluster_.md#once)
* [prependListener](_cluster_.md#prependlistener)
* [prependOnceListener](_cluster_.md#prependoncelistener)
* [removeAllListeners](_cluster_.md#removealllisteners)
* [removeListener](_cluster_.md#removelistener)
* [setMaxListeners](_cluster_.md#setmaxlisteners)
* [setupMaster](_cluster_.md#setupmaster)

## Variables

### `Const` isMaster

• **isMaster**: *boolean*

Defined in node_modules/@types/node/cluster.d.ts:175

___

### `Const` isWorker

• **isWorker**: *boolean*

Defined in node_modules/@types/node/cluster.d.ts:176

___

### `Const` settings

• **settings**: *[ClusterSettings](../interfaces/_cluster_.clustersettings.md)*

Defined in node_modules/@types/node/cluster.d.ts:178

___

### `Const` worker

• **worker**: *[Worker](../classes/_cluster_.worker.md)*

Defined in node_modules/@types/node/cluster.d.ts:180

___

### `Const` workers

• **workers**: *object*

Defined in node_modules/@types/node/cluster.d.ts:181

#### Type declaration:

* \[ **index**: *string*\]: [Worker](../classes/_cluster_.worker.md) | undefined

## Functions

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:195

events.EventEmitter
  1. disconnect
  2. exit
  3. fork
  4. listening
  5. message
  6. online
  7. setup

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "disconnect", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:196

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "exit", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:197

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "fork", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:198

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "listening", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:199

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "message", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:201

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "online", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:202

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **addListener**(`event`: "setup", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:203

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  disconnect

▸ **disconnect**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/cluster.d.ts:173

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:205

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "disconnect", `worker`: [Worker](../classes/_cluster_.worker.md)): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:206

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "exit", `worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:207

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "fork", `worker`: [Worker](../classes/_cluster_.worker.md)): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:208

**Parameters:**

Name | Type |
------ | ------ |
`event` | "fork" |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "listening", `worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](../interfaces/_cluster_.address.md)): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:209

**Parameters:**

Name | Type |
------ | ------ |
`event` | "listening" |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:210

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "online", `worker`: [Worker](../classes/_cluster_.worker.md)): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`event` | "online" |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "setup", `settings`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:212

**Parameters:**

Name | Type |
------ | ------ |
`event` | "setup" |
`settings` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *string[]*

Defined in node_modules/@types/node/cluster.d.ts:259

**Returns:** *string[]*

___

###  fork

▸ **fork**(`env?`: any): *[Worker](../classes/_cluster_.worker.md)*

Defined in node_modules/@types/node/cluster.d.ts:174

**Parameters:**

Name | Type |
------ | ------ |
`env?` | any |

**Returns:** *[Worker](../classes/_cluster_.worker.md)*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

Defined in node_modules/@types/node/cluster.d.ts:235

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string): *number*

Defined in node_modules/@types/node/cluster.d.ts:237

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string): *[Function](../interfaces/function.md)[]*

Defined in node_modules/@types/node/cluster.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  on

▸ **on**(`event`: string, `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:214

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "disconnect", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:215

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "exit", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:216

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "fork", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:217

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "listening", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:218

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "message", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:219

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "online", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:220

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **on**(`event`: "setup", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:221

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  once

▸ **once**(`event`: string, `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:223

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "disconnect", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:224

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "exit", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:225

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "fork", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:226

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "listening", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:227

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "message", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:228

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "online", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:229

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **once**(`event`: "setup", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:230

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:239

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "disconnect", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:240

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "exit", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:241

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "fork", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:242

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "listening", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:243

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "message", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:245

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "online", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:246

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependListener**(`event`: "setup", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:247

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:249

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "disconnect", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:250

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "exit", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:251

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "fork", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:252

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "listening", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:253

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "message", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:255

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "online", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:256

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

▸ **prependOnceListener**(`event`: "setup", `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:257

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: undefined | string): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`event?` | undefined &#124; string |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: function): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:232

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *[Cluster](../interfaces/_cluster_.cluster.md)*

Defined in node_modules/@types/node/cluster.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *[Cluster](../interfaces/_cluster_.cluster.md)*

___

###  setupMaster

▸ **setupMaster**(`settings?`: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): *void*

Defined in node_modules/@types/node/cluster.d.ts:179

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [ClusterSettings](../interfaces/_cluster_.clustersettings.md) |

**Returns:** *void*
