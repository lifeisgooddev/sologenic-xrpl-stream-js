[typescript](../README.md) › [Globals](../globals.md) › ["child_process"](_child_process_.md)

# Module: "child_process"

## Index

### Modules

* [exec](_child_process_.exec.md)
* [execFile](_child_process_.execfile.md)

### Interfaces

* [ChildProcess](../interfaces/_child_process_.childprocess.md)
* [ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)
* [ChildProcessWithoutNullStreams](../interfaces/_child_process_.childprocesswithoutnullstreams.md)
* [CommonOptions](../interfaces/_child_process_.commonoptions.md)
* [ExecException](../interfaces/_child_process_.execexception.md)
* [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md)
* [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md)
* [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md)
* [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md)
* [ExecFileSyncOptions](../interfaces/_child_process_.execfilesyncoptions.md)
* [ExecFileSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execfilesyncoptionswithbufferencoding.md)
* [ExecFileSyncOptionsWithStringEncoding](../interfaces/_child_process_.execfilesyncoptionswithstringencoding.md)
* [ExecOptions](../interfaces/_child_process_.execoptions.md)
* [ExecOptionsWithBufferEncoding](../interfaces/_child_process_.execoptionswithbufferencoding.md)
* [ExecOptionsWithStringEncoding](../interfaces/_child_process_.execoptionswithstringencoding.md)
* [ExecSyncOptions](../interfaces/_child_process_.execsyncoptions.md)
* [ExecSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execsyncoptionswithbufferencoding.md)
* [ExecSyncOptionsWithStringEncoding](../interfaces/_child_process_.execsyncoptionswithstringencoding.md)
* [ForkOptions](../interfaces/_child_process_.forkoptions.md)
* [MessageOptions](../interfaces/_child_process_.messageoptions.md)
* [ProcessEnvOptions](../interfaces/_child_process_.processenvoptions.md)
* [PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)
* [SpawnOptions](../interfaces/_child_process_.spawnoptions.md)
* [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)
* [SpawnOptionsWithoutStdio](../interfaces/_child_process_.spawnoptionswithoutstdio.md)
* [SpawnSyncOptions](../interfaces/_child_process_.spawnsyncoptions.md)
* [SpawnSyncOptionsWithBufferEncoding](../interfaces/_child_process_.spawnsyncoptionswithbufferencoding.md)
* [SpawnSyncOptionsWithStringEncoding](../interfaces/_child_process_.spawnsyncoptionswithstringencoding.md)
* [SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)

### Type aliases

* [StdioNull](_child_process_.md#stdionull)
* [StdioOptions](_child_process_.md#stdiooptions)
* [StdioPipe](_child_process_.md#stdiopipe)

### Functions

* [execFileSync](_child_process_.md#execfilesync)
* [execSync](_child_process_.md#execsync)
* [fork](_child_process_.md#fork)
* [spawn](_child_process_.md#spawn)
* [spawnSync](_child_process_.md#spawnsync)

## Type aliases

###  StdioNull

Ƭ **StdioNull**: *"inherit" | "ignore" | [Stream](../classes/_stream_.internal.stream.md)*

Defined in node_modules/@types/node/child_process.d.ts:149

___

###  StdioOptions

Ƭ **StdioOptions**: *"pipe" | "ignore" | "inherit" | [Array](../interfaces/regexpmatcharray.md#array)‹undefined | null | number | "pipe" | "ignore" | "inherit" | [Stream](../classes/_stream_.internal.stream.md)‹› | "ipc"›*

Defined in node_modules/@types/node/child_process.d.ts:117

___

###  StdioPipe

Ƭ **StdioPipe**: *undefined | null | "pipe"*

Defined in node_modules/@types/node/child_process.d.ts:150

## Functions

###  execFileSync

▸ **execFileSync**(`command`: string): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:471

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **execFileSync**(`command`: string, `options?`: [ExecFileSyncOptionsWithStringEncoding](../interfaces/_child_process_.execfilesyncoptionswithstringencoding.md)): *string*

Defined in node_modules/@types/node/child_process.d.ts:472

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [ExecFileSyncOptionsWithStringEncoding](../interfaces/_child_process_.execfilesyncoptionswithstringencoding.md) |

**Returns:** *string*

▸ **execFileSync**(`command`: string, `options?`: [ExecFileSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execfilesyncoptionswithbufferencoding.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:473

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [ExecFileSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execfilesyncoptionswithbufferencoding.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **execFileSync**(`command`: string, `options?`: [ExecFileSyncOptions](../interfaces/_child_process_.execfilesyncoptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:474

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [ExecFileSyncOptions](../interfaces/_child_process_.execfilesyncoptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **execFileSync**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [ExecFileSyncOptionsWithStringEncoding](../interfaces/_child_process_.execfilesyncoptionswithstringencoding.md)): *string*

Defined in node_modules/@types/node/child_process.d.ts:475

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [ExecFileSyncOptionsWithStringEncoding](../interfaces/_child_process_.execfilesyncoptionswithstringencoding.md) |

**Returns:** *string*

▸ **execFileSync**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [ExecFileSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execfilesyncoptionswithbufferencoding.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:476

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [ExecFileSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execfilesyncoptionswithbufferencoding.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **execFileSync**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [ExecFileSyncOptions](../interfaces/_child_process_.execfilesyncoptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:477

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [ExecFileSyncOptions](../interfaces/_child_process_.execfilesyncoptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  execSync

▸ **execSync**(`command`: string): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:452

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **execSync**(`command`: string, `options?`: [ExecSyncOptionsWithStringEncoding](../interfaces/_child_process_.execsyncoptionswithstringencoding.md)): *string*

Defined in node_modules/@types/node/child_process.d.ts:453

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [ExecSyncOptionsWithStringEncoding](../interfaces/_child_process_.execsyncoptionswithstringencoding.md) |

**Returns:** *string*

▸ **execSync**(`command`: string, `options?`: [ExecSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execsyncoptionswithbufferencoding.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:454

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [ExecSyncOptionsWithBufferEncoding](../interfaces/_child_process_.execsyncoptionswithbufferencoding.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **execSync**(`command`: string, `options?`: [ExecSyncOptions](../interfaces/_child_process_.execsyncoptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/child_process.d.ts:455

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [ExecSyncOptions](../interfaces/_child_process_.execsyncoptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  fork

▸ **fork**(`modulePath`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [ForkOptions](../interfaces/_child_process_.forkoptions.md)): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:403

**Parameters:**

Name | Type |
------ | ------ |
`modulePath` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [ForkOptions](../interfaces/_child_process_.forkoptions.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

___

###  spawn

▸ **spawn**(`command`: string, `options?`: [SpawnOptionsWithoutStdio](../interfaces/_child_process_.spawnoptionswithoutstdio.md)): *[ChildProcessWithoutNullStreams](../interfaces/_child_process_.childprocesswithoutnullstreams.md)*

Defined in node_modules/@types/node/child_process.d.ts:161

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [SpawnOptionsWithoutStdio](../interfaces/_child_process_.spawnoptionswithoutstdio.md) |

**Returns:** *[ChildProcessWithoutNullStreams](../interfaces/_child_process_.childprocesswithoutnullstreams.md)*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:163

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), null›*

Defined in node_modules/@types/node/child_process.d.ts:167

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), null›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:171

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:175

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, null›*

Defined in node_modules/@types/node/child_process.d.ts:179

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, null›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), null›*

Defined in node_modules/@types/node/child_process.d.ts:183

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), null›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:187

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, null›*

Defined in node_modules/@types/node/child_process.d.ts:191

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, null›*

▸ **spawn**(`command`: string, `options`: [SpawnOptions](../interfaces/_child_process_.spawnoptions.md)): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options` | [SpawnOptions](../interfaces/_child_process_.spawnoptions.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **spawn**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [SpawnOptionsWithoutStdio](../interfaces/_child_process_.spawnoptionswithoutstdio.md)): *[ChildProcessWithoutNullStreams](../interfaces/_child_process_.childprocesswithoutnullstreams.md)*

Defined in node_modules/@types/node/child_process.d.ts:199

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [SpawnOptionsWithoutStdio](../interfaces/_child_process_.spawnoptionswithoutstdio.md) |

**Returns:** *[ChildProcessWithoutNullStreams](../interfaces/_child_process_.childprocesswithoutnullstreams.md)*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:201

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), null›*

Defined in node_modules/@types/node/child_process.d.ts:206

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), [Readable](../classes/_stream_.internal.readable.md), null›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:216

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, null›*

Defined in node_modules/@types/node/child_process.d.ts:221

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹[Writable](../classes/_stream_.internal.writable.md), null, null›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), null›*

Defined in node_modules/@types/node/child_process.d.ts:226

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, [Readable](../classes/_stream_.internal.readable.md), null›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, [Readable](../classes/_stream_.internal.readable.md)›*

Defined in node_modules/@types/node/child_process.d.ts:231

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioPipe](_child_process_.md#stdiopipe)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, [Readable](../classes/_stream_.internal.readable.md)›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)›): *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, null›*

Defined in node_modules/@types/node/child_process.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptionsWithStdioTuple](../interfaces/_child_process_.spawnoptionswithstdiotuple.md)‹[StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull), [StdioNull](_child_process_.md#stdionull)› |

**Returns:** *[ChildProcessByStdio](../interfaces/_child_process_.childprocessbystdio.md)‹null, null, null›*

▸ **spawn**(`command`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options`: [SpawnOptions](../interfaces/_child_process_.spawnoptions.md)): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:242

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options` | [SpawnOptions](../interfaces/_child_process_.spawnoptions.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

___

###  spawnSync

▸ **spawnSync**(`command`: string): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/child_process.d.ts:430

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

▸ **spawnSync**(`command`: string, `options?`: [SpawnSyncOptionsWithStringEncoding](../interfaces/_child_process_.spawnsyncoptionswithstringencoding.md)): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹string›*

Defined in node_modules/@types/node/child_process.d.ts:431

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [SpawnSyncOptionsWithStringEncoding](../interfaces/_child_process_.spawnsyncoptionswithstringencoding.md) |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹string›*

▸ **spawnSync**(`command`: string, `options?`: [SpawnSyncOptionsWithBufferEncoding](../interfaces/_child_process_.spawnsyncoptionswithbufferencoding.md)): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/child_process.d.ts:432

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [SpawnSyncOptionsWithBufferEncoding](../interfaces/_child_process_.spawnsyncoptionswithbufferencoding.md) |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

▸ **spawnSync**(`command`: string, `options?`: [SpawnSyncOptions](../interfaces/_child_process_.spawnsyncoptions.md)): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/child_process.d.ts:433

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`options?` | [SpawnSyncOptions](../interfaces/_child_process_.spawnsyncoptions.md) |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

▸ **spawnSync**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [SpawnSyncOptionsWithStringEncoding](../interfaces/_child_process_.spawnsyncoptionswithstringencoding.md)): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹string›*

Defined in node_modules/@types/node/child_process.d.ts:434

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [SpawnSyncOptionsWithStringEncoding](../interfaces/_child_process_.spawnsyncoptionswithstringencoding.md) |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹string›*

▸ **spawnSync**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [SpawnSyncOptionsWithBufferEncoding](../interfaces/_child_process_.spawnsyncoptionswithbufferencoding.md)): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/child_process.d.ts:435

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [SpawnSyncOptionsWithBufferEncoding](../interfaces/_child_process_.spawnsyncoptionswithbufferencoding.md) |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

▸ **spawnSync**(`command`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›, `options?`: [SpawnSyncOptions](../interfaces/_child_process_.spawnsyncoptions.md)): *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/child_process.d.ts:436

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |
`options?` | [SpawnSyncOptions](../interfaces/_child_process_.spawnsyncoptions.md) |

**Returns:** *[SpawnSyncReturns](../interfaces/_child_process_.spawnsyncreturns.md)‹[Buffer](../classes/buffer.md)›*
