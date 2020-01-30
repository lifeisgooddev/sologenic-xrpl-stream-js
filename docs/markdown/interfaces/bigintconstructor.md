[typescript](../README.md) › [Globals](../globals.md) › [BigIntConstructor](bigintconstructor.md)

# Interface: BigIntConstructor

## Hierarchy

* **BigIntConstructor**

## Callable

▸ (`value?`: any): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *bigint*

## Index

### Properties

* [prototype](bigintconstructor.md#prototype)

### Methods

* [asIntN](bigintconstructor.md#asintn)
* [asUintN](bigintconstructor.md#asuintn)

## Properties

###  prototype

• **prototype**: *[BigInt](bigint.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:39

## Methods

###  asIntN

▸ **asIntN**(`bits`: number, `int`: bigint): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:47

Interprets the low bits of a BigInt as a 2's-complement signed integer.
All higher bits are discarded.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bits` | number | The number of low bits to use |
`int` | bigint | The BigInt whose bits to extract  |

**Returns:** *bigint*

___

###  asUintN

▸ **asUintN**(`bits`: number, `int`: bigint): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:54

Interprets the low bits of a BigInt as an unsigned integer.
All higher bits are discarded.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bits` | number | The number of low bits to use |
`int` | bigint | The BigInt whose bits to extract  |

**Returns:** *bigint*
