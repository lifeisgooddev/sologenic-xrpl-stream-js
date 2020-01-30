[typescript](../README.md) › [Globals](../globals.md) › ["path"](_path_.md) › [win32](_path_.win32.md)

# Module: win32

## Index

### Variables

* [delimiter](_path_.win32.md#const-delimiter)
* [sep](_path_.win32.md#const-sep)

### Functions

* [basename](_path_.win32.md#basename)
* [dirname](_path_.win32.md#dirname)
* [extname](_path_.win32.md#extname)
* [format](_path_.win32.md#format)
* [isAbsolute](_path_.win32.md#isabsolute)
* [join](_path_.win32.md#join)
* [normalize](_path_.win32.md#normalize)
* [parse](_path_.win32.md#parse)
* [relative](_path_.win32.md#relative)
* [resolve](_path_.win32.md#resolve)

## Variables

### `Const` delimiter

• **delimiter**: *string*

Defined in node_modules/@types/node/path.d.ts:155

___

### `Const` sep

• **sep**: *string*

Defined in node_modules/@types/node/path.d.ts:154

## Functions

###  basename

▸ **basename**(`p`: string, `ext?`: undefined | string): *string*

Defined in node_modules/@types/node/path.d.ts:152

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`ext?` | undefined &#124; string |

**Returns:** *string*

___

###  dirname

▸ **dirname**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:151

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  extname

▸ **extname**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:153

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  format

▸ **format**(`pP`: [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md)): *string*

Defined in node_modules/@types/node/path.d.ts:157

**Parameters:**

Name | Type |
------ | ------ |
`pP` | [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md) |

**Returns:** *string*

___

###  isAbsolute

▸ **isAbsolute**(`p`: string): *boolean*

Defined in node_modules/@types/node/path.d.ts:149

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *boolean*

___

###  join

▸ **join**(...`paths`: string[]): *string*

Defined in node_modules/@types/node/path.d.ts:147

**Parameters:**

Name | Type |
------ | ------ |
`...paths` | string[] |

**Returns:** *string*

___

###  normalize

▸ **normalize**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:146

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  parse

▸ **parse**(`p`: string): *[ParsedPath](../interfaces/_path_.parsedpath.md)*

Defined in node_modules/@types/node/path.d.ts:156

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *[ParsedPath](../interfaces/_path_.parsedpath.md)*

___

###  relative

▸ **relative**(`from`: string, `to`: string): *string*

Defined in node_modules/@types/node/path.d.ts:150

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |
`to` | string |

**Returns:** *string*

___

###  resolve

▸ **resolve**(...`pathSegments`: string[]): *string*

Defined in node_modules/@types/node/path.d.ts:148

**Parameters:**

Name | Type |
------ | ------ |
`...pathSegments` | string[] |

**Returns:** *string*
