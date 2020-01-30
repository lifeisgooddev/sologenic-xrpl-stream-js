[typescript](../README.md) › [Globals](../globals.md) › ["path"](_path_.md)

# Module: "path"

## Index

### Modules

* [posix](_path_.posix.md)
* [win32](_path_.win32.md)

### Interfaces

* [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md)
* [ParsedPath](../interfaces/_path_.parsedpath.md)

### Variables

* [delimiter](_path_.md#const-delimiter)
* [sep](_path_.md#const-sep)

### Functions

* [basename](_path_.md#basename)
* [dirname](_path_.md#dirname)
* [extname](_path_.md#extname)
* [format](_path_.md#format)
* [isAbsolute](_path_.md#isabsolute)
* [join](_path_.md#join)
* [normalize](_path_.md#normalize)
* [parse](_path_.md#parse)
* [relative](_path_.md#relative)
* [resolve](_path_.md#resolve)

## Variables

### `Const` delimiter

• **delimiter**: *";" | ":"*

Defined in node_modules/@types/node/path.d.ts:116

The platform-specific file delimiter. ';' or ':'.

___

### `Const` sep

• **sep**: *"\" | "/"*

Defined in node_modules/@types/node/path.d.ts:112

The platform-specific file separator. '\\' or '/'.

## Functions

###  basename

▸ **basename**(`p`: string, `ext?`: undefined | string): *string*

Defined in node_modules/@types/node/path.d.ts:101

Return the last portion of a path. Similar to the Unix basename command.
Often used to extract the file name from a fully qualified path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p` | string | the path to evaluate. |
`ext?` | undefined &#124; string | optionally, an extension to remove from the result.  |

**Returns:** *string*

___

###  dirname

▸ **dirname**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:93

Return the directory name of a path. Similar to the Unix dirname command.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p` | string | the path to evaluate.  |

**Returns:** *string*

___

###  extname

▸ **extname**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:108

Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p` | string | the path to evaluate.  |

**Returns:** *string*

___

###  format

▸ **format**(`pathObject`: [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md)): *string*

Defined in node_modules/@types/node/path.d.ts:128

Returns a path string from an object - the opposite of parse().

**Parameters:**

Name | Type |
------ | ------ |
`pathObject` | [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md) |

**Returns:** *string*

___

###  isAbsolute

▸ **isAbsolute**(`path`: string): *boolean*

Defined in node_modules/@types/node/path.d.ts:82

Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | path to test.  |

**Returns:** *boolean*

___

###  join

▸ **join**(...`paths`: string[]): *string*

Defined in node_modules/@types/node/path.d.ts:63

Join all arguments together and normalize the resulting path.
Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...paths` | string[] | paths to join.  |

**Returns:** *string*

___

###  normalize

▸ **normalize**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:56

Normalize a string path, reducing '..' and '.' parts.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p` | string | string path to normalize.  |

**Returns:** *string*

___

###  parse

▸ **parse**(`pathString`: string): *[ParsedPath](../interfaces/_path_.parsedpath.md)*

Defined in node_modules/@types/node/path.d.ts:122

Returns an object from a path string - the opposite of format().

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pathString` | string | path to evaluate.  |

**Returns:** *[ParsedPath](../interfaces/_path_.parsedpath.md)*

___

###  relative

▸ **relative**(`from`: string, `to`: string): *string*

Defined in node_modules/@types/node/path.d.ts:87

Solve the relative path from {from} to {to}.
At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |
`to` | string |

**Returns:** *string*

___

###  resolve

▸ **resolve**(...`pathSegments`: string[]): *string*

Defined in node_modules/@types/node/path.d.ts:76

The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order,
until an absolute path is found. If after using all {from} paths still no absolute path is found,
the current working directory is used as well. The resulting path is normalized,
and trailing slashes are removed unless the path gets resolved to the root directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...pathSegments` | string[] | string paths to join.  Non-string arguments are ignored.  |

**Returns:** *string*
