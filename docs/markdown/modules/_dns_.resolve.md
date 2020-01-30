[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolve](_dns_.resolve.md)

# Module: resolve

## Callable

▸ **resolve**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:147

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "A", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:148

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"A"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "AAAA", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:149

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"AAAA"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "ANY", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:150

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"ANY"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [AnyRecord](_dns_.md#anyrecord)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [AnyRecord](_dns_.md#anyrecord)[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "CNAME", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:151

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"CNAME"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "MX", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:152

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"MX"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [MxRecord](../interfaces/_dns_.mxrecord.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [MxRecord](../interfaces/_dns_.mxrecord.md)[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "NAPTR", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:153

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"NAPTR"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "NS", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:154

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"NS"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "PTR", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:155

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"PTR"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "SOA", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:156

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"SOA"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [SoaRecord](../interfaces/_dns_.soarecord.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [SoaRecord](../interfaces/_dns_.soarecord.md) |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "SRV", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:157

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"SRV"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [SrvRecord](../interfaces/_dns_.srvrecord.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: "TXT", `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:158

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *"TXT"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[][]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[][] |

**Returns:** *void*

▸ **resolve**(`hostname`: string, `rrtype`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:159

**Parameters:**

▪ **hostname**: *string*

▪ **rrtype**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[] | [MxRecord](../interfaces/_dns_.mxrecord.md)[] | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] | [SoaRecord](../interfaces/_dns_.soarecord.md) | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] | string[][] | [AnyRecord](_dns_.md#anyrecord)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] &#124; [MxRecord](../interfaces/_dns_.mxrecord.md)[] &#124; [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] &#124; [SoaRecord](../interfaces/_dns_.soarecord.md) &#124; [SrvRecord](../interfaces/_dns_.srvrecord.md)[] &#124; string[][] &#124; [AnyRecord](_dns_.md#anyrecord)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolve.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string, `rrtype?`: "A" | "AAAA" | "CNAME" | "NS" | "PTR"): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:167

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype?` | "A" &#124; "AAAA" &#124; "CNAME" &#124; "NS" &#124; "PTR" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **__promisify__**(`hostname`: string, `rrtype`: "ANY"): *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

Defined in node_modules/@types/node/dns.d.ts:168

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "ANY" |

**Returns:** *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

▸ **__promisify__**(`hostname`: string, `rrtype`: "MX"): *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:169

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "MX" |

**Returns:** *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

▸ **__promisify__**(`hostname`: string, `rrtype`: "NAPTR"): *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:170

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "NAPTR" |

**Returns:** *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

▸ **__promisify__**(`hostname`: string, `rrtype`: "SOA"): *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

Defined in node_modules/@types/node/dns.d.ts:171

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "SOA" |

**Returns:** *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

▸ **__promisify__**(`hostname`: string, `rrtype`: "SRV"): *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:172

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "SRV" |

**Returns:** *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

▸ **__promisify__**(`hostname`: string, `rrtype`: "TXT"): *[Promise](../interfaces/promise.md)‹string[][]›*

Defined in node_modules/@types/node/dns.d.ts:173

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "TXT" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[][]›*

▸ **__promisify__**(`hostname`: string, `rrtype`: string): *[Promise](../interfaces/promise.md)‹string[] | [MxRecord](../interfaces/_dns_.mxrecord.md)[] | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] | [SoaRecord](../interfaces/_dns_.soarecord.md) | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] | string[][] | [AnyRecord](_dns_.md#anyrecord)[]›*

Defined in node_modules/@types/node/dns.d.ts:174

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [MxRecord](../interfaces/_dns_.mxrecord.md)[] | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] | [SoaRecord](../interfaces/_dns_.soarecord.md) | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] | string[][] | [AnyRecord](_dns_.md#anyrecord)[]›*
