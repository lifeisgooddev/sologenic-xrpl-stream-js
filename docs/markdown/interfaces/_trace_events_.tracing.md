[typescript](../README.md) › [Globals](../globals.md) › ["trace_events"](../modules/_trace_events_.md) › [Tracing](_trace_events_.tracing.md)

# Interface: Tracing

The `Tracing` object is used to enable or disable tracing for sets of
categories. Instances are created using the
`trace_events.createTracing()` method.

When created, the `Tracing` object is disabled. Calling the
`tracing.enable()` method adds the categories to the set of enabled trace
event categories. Calling `tracing.disable()` will remove the categories
from the set of enabled trace event categories.

## Hierarchy

* **Tracing**

## Index

### Properties

* [categories](_trace_events_.tracing.md#categories)
* [enabled](_trace_events_.tracing.md#enabled)

### Methods

* [disable](_trace_events_.tracing.md#disable)
* [enable](_trace_events_.tracing.md#enable)

## Properties

###  categories

• **categories**: *string*

Defined in node_modules/@types/node/trace_events.d.ts:17

A comma-separated list of the trace event categories covered by this
`Tracing` object.

___

###  enabled

• **enabled**: *boolean*

Defined in node_modules/@types/node/trace_events.d.ts:37

`true` only if the `Tracing` object has been enabled.

## Methods

###  disable

▸ **disable**(): *void*

Defined in node_modules/@types/node/trace_events.d.ts:26

Disables this `Tracing` object.

Only trace event categories _not_ covered by other enabled `Tracing`
objects and _not_ specified by the `--trace-event-categories` flag
will be disabled.

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

Defined in node_modules/@types/node/trace_events.d.ts:32

Enables this `Tracing` object for the set of categories covered by
the `Tracing` object.

**Returns:** *void*
