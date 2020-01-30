[typescript](../README.md) › [Globals](../globals.md) › ["os"](_os_.md)

# Module: "os"

## Index

### Interfaces

* [CpuInfo](../interfaces/_os_.cpuinfo.md)
* [NetworkInterfaceBase](../interfaces/_os_.networkinterfacebase.md)
* [NetworkInterfaceInfoIPv4](../interfaces/_os_.networkinterfaceinfoipv4.md)
* [NetworkInterfaceInfoIPv6](../interfaces/_os_.networkinterfaceinfoipv6.md)
* [UserInfo](../interfaces/_os_.userinfo.md)

### Type aliases

* [NetworkInterfaceInfo](_os_.md#networkinterfaceinfo)

### Variables

* [EOL](_os_.md#const-eol)
* [constants](_os_.md#const-constants)

### Functions

* [arch](_os_.md#arch)
* [cpus](_os_.md#cpus)
* [endianness](_os_.md#endianness)
* [freemem](_os_.md#freemem)
* [getPriority](_os_.md#getpriority)
* [homedir](_os_.md#homedir)
* [hostname](_os_.md#hostname)
* [loadavg](_os_.md#loadavg)
* [networkInterfaces](_os_.md#networkinterfaces)
* [platform](_os_.md#platform)
* [release](_os_.md#release)
* [setPriority](_os_.md#setpriority)
* [tmpdir](_os_.md#tmpdir)
* [totalmem](_os_.md#totalmem)
* [type](_os_.md#type)
* [uptime](_os_.md#uptime)
* [userInfo](_os_.md#userinfo)

## Type aliases

###  NetworkInterfaceInfo

Ƭ **NetworkInterfaceInfo**: *[NetworkInterfaceInfoIPv4](../interfaces/_os_.networkinterfaceinfoipv4.md) | [NetworkInterfaceInfoIPv6](../interfaces/_os_.networkinterfaceinfoipv6.md)*

Defined in node_modules/@types/node/os.d.ts:39

## Variables

### `Const` EOL

• **EOL**: *string*

Defined in node_modules/@types/node/os.d.ts:184

___

### `Const` constants

• **constants**: *object*

Defined in node_modules/@types/node/os.d.ts:53

#### Type declaration:

* **UV_UDP_REUSEADDR**: *number*

* **errno**(): *object*

  * **E2BIG**: *number*

  * **EACCES**: *number*

  * **EADDRINUSE**: *number*

  * **EADDRNOTAVAIL**: *number*

  * **EAFNOSUPPORT**: *number*

  * **EAGAIN**: *number*

  * **EALREADY**: *number*

  * **EBADF**: *number*

  * **EBADMSG**: *number*

  * **EBUSY**: *number*

  * **ECANCELED**: *number*

  * **ECHILD**: *number*

  * **ECONNABORTED**: *number*

  * **ECONNREFUSED**: *number*

  * **ECONNRESET**: *number*

  * **EDEADLK**: *number*

  * **EDESTADDRREQ**: *number*

  * **EDOM**: *number*

  * **EDQUOT**: *number*

  * **EEXIST**: *number*

  * **EFAULT**: *number*

  * **EFBIG**: *number*

  * **EHOSTUNREACH**: *number*

  * **EIDRM**: *number*

  * **EILSEQ**: *number*

  * **EINPROGRESS**: *number*

  * **EINTR**: *number*

  * **EINVAL**: *number*

  * **EIO**: *number*

  * **EISCONN**: *number*

  * **EISDIR**: *number*

  * **ELOOP**: *number*

  * **EMFILE**: *number*

  * **EMLINK**: *number*

  * **EMSGSIZE**: *number*

  * **EMULTIHOP**: *number*

  * **ENAMETOOLONG**: *number*

  * **ENETDOWN**: *number*

  * **ENETRESET**: *number*

  * **ENETUNREACH**: *number*

  * **ENFILE**: *number*

  * **ENOBUFS**: *number*

  * **ENODATA**: *number*

  * **ENODEV**: *number*

  * **ENOENT**: *number*

  * **ENOEXEC**: *number*

  * **ENOLCK**: *number*

  * **ENOLINK**: *number*

  * **ENOMEM**: *number*

  * **ENOMSG**: *number*

  * **ENOPROTOOPT**: *number*

  * **ENOSPC**: *number*

  * **ENOSR**: *number*

  * **ENOSTR**: *number*

  * **ENOSYS**: *number*

  * **ENOTCONN**: *number*

  * **ENOTDIR**: *number*

  * **ENOTEMPTY**: *number*

  * **ENOTSOCK**: *number*

  * **ENOTSUP**: *number*

  * **ENOTTY**: *number*

  * **ENXIO**: *number*

  * **EOPNOTSUPP**: *number*

  * **EOVERFLOW**: *number*

  * **EPERM**: *number*

  * **EPIPE**: *number*

  * **EPROTO**: *number*

  * **EPROTONOSUPPORT**: *number*

  * **EPROTOTYPE**: *number*

  * **ERANGE**: *number*

  * **EROFS**: *number*

  * **ESPIPE**: *number*

  * **ESRCH**: *number*

  * **ESTALE**: *number*

  * **ETIME**: *number*

  * **ETIMEDOUT**: *number*

  * **ETXTBSY**: *number*

  * **EWOULDBLOCK**: *number*

  * **EXDEV**: *number*

* **priority**(): *object*

  * **PRIORITY_ABOVE_NORMAL**: *number*

  * **PRIORITY_BELOW_NORMAL**: *number*

  * **PRIORITY_HIGH**: *number*

  * **PRIORITY_HIGHEST**: *number*

  * **PRIORITY_LOW**: *number*

  * **PRIORITY_NORMAL**: *number*

* **signals**(): *object*

  * **SIGABRT**: *number*

  * **SIGALRM**: *number*

  * **SIGBUS**: *number*

  * **SIGCHLD**: *number*

  * **SIGCONT**: *number*

  * **SIGFPE**: *number*

  * **SIGHUP**: *number*

  * **SIGILL**: *number*

  * **SIGINT**: *number*

  * **SIGIO**: *number*

  * **SIGIOT**: *number*

  * **SIGKILL**: *number*

  * **SIGPIPE**: *number*

  * **SIGPOLL**: *number*

  * **SIGPROF**: *number*

  * **SIGPWR**: *number*

  * **SIGQUIT**: *number*

  * **SIGSEGV**: *number*

  * **SIGSTKFLT**: *number*

  * **SIGSTOP**: *number*

  * **SIGSYS**: *number*

  * **SIGTERM**: *number*

  * **SIGTRAP**: *number*

  * **SIGTSTP**: *number*

  * **SIGTTIN**: *number*

  * **SIGTTOU**: *number*

  * **SIGUNUSED**: *number*

  * **SIGURG**: *number*

  * **SIGUSR1**: *number*

  * **SIGUSR2**: *number*

  * **SIGVTALRM**: *number*

  * **SIGWINCH**: *number*

  * **SIGXCPU**: *number*

  * **SIGXFSZ**: *number*

## Functions

###  arch

▸ **arch**(): *string*

Defined in node_modules/@types/node/os.d.ts:181

**Returns:** *string*

___

###  cpus

▸ **cpus**(): *[CpuInfo](../interfaces/_os_.cpuinfo.md)[]*

Defined in node_modules/@types/node/os.d.ts:46

**Returns:** *[CpuInfo](../interfaces/_os_.cpuinfo.md)[]*

___

###  endianness

▸ **endianness**(): *"BE" | "LE"*

Defined in node_modules/@types/node/os.d.ts:185

**Returns:** *"BE" | "LE"*

___

###  freemem

▸ **freemem**(): *number*

Defined in node_modules/@types/node/os.d.ts:44

**Returns:** *number*

___

###  getPriority

▸ **getPriority**(`pid?`: undefined | number): *number*

Defined in node_modules/@types/node/os.d.ts:190

Gets the priority of a process.
Defaults to current process.

**Parameters:**

Name | Type |
------ | ------ |
`pid?` | undefined &#124; number |

**Returns:** *number*

___

###  homedir

▸ **homedir**(): *string*

Defined in node_modules/@types/node/os.d.ts:50

**Returns:** *string*

___

###  hostname

▸ **hostname**(): *string*

Defined in node_modules/@types/node/os.d.ts:41

**Returns:** *string*

___

###  loadavg

▸ **loadavg**(): *number[]*

Defined in node_modules/@types/node/os.d.ts:42

**Returns:** *number[]*

___

###  networkInterfaces

▸ **networkInterfaces**(): *object*

Defined in node_modules/@types/node/os.d.ts:49

**Returns:** *object*

* \[ **index**: *string*\]: [NetworkInterfaceInfo](_os_.md#networkinterfaceinfo)[]

___

###  platform

▸ **platform**(): *[Platform](nodejs.md#platform)*

Defined in node_modules/@types/node/os.d.ts:182

**Returns:** *[Platform](nodejs.md#platform)*

___

###  release

▸ **release**(): *string*

Defined in node_modules/@types/node/os.d.ts:48

**Returns:** *string*

___

###  setPriority

▸ **setPriority**(`priority`: number): *void*

Defined in node_modules/@types/node/os.d.ts:195

Sets the priority of the current process.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`priority` | number | Must be in range of -20 to 19  |

**Returns:** *void*

▸ **setPriority**(`pid`: number, `priority`: number): *void*

Defined in node_modules/@types/node/os.d.ts:200

Sets the priority of the process specified process.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pid` | number | - |
`priority` | number | Must be in range of -20 to 19  |

**Returns:** *void*

___

###  tmpdir

▸ **tmpdir**(): *string*

Defined in node_modules/@types/node/os.d.ts:183

**Returns:** *string*

___

###  totalmem

▸ **totalmem**(): *number*

Defined in node_modules/@types/node/os.d.ts:45

**Returns:** *number*

___

###  type

▸ **type**(): *string*

Defined in node_modules/@types/node/os.d.ts:47

**Returns:** *string*

___

###  uptime

▸ **uptime**(): *number*

Defined in node_modules/@types/node/os.d.ts:43

**Returns:** *number*

___

###  userInfo

▸ **userInfo**(`options`: object): *[UserInfo](../interfaces/_os_.userinfo.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/os.d.ts:51

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`encoding` | "buffer" |

**Returns:** *[UserInfo](../interfaces/_os_.userinfo.md)‹[Buffer](../classes/buffer.md)›*

▸ **userInfo**(`options?`: undefined | object): *[UserInfo](../interfaces/_os_.userinfo.md)‹string›*

Defined in node_modules/@types/node/os.d.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *[UserInfo](../interfaces/_os_.userinfo.md)‹string›*
