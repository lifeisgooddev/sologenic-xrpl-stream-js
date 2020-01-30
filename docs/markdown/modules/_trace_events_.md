[typescript](../README.md) › [Globals](../globals.md) › ["trace_events"](_trace_events_.md)

# Module: "trace_events"

## Index

### Interfaces

* [CreateTracingOptions](../interfaces/_trace_events_.createtracingoptions.md)
* [Tracing](../interfaces/_trace_events_.tracing.md)

### Functions

* [createTracing](_trace_events_.md#createtracing)
* [getEnabledCategories](_trace_events_.md#getenabledcategories)

## Functions

###  createTracing

▸ **createTracing**(`options`: [CreateTracingOptions](../interfaces/_trace_events_.createtracingoptions.md)): *[Tracing](../interfaces/_trace_events_.tracing.md)*

Defined in node_modules/@types/node/trace_events.d.ts:52

Creates and returns a Tracing object for the given set of categories.

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateTracingOptions](../interfaces/_trace_events_.createtracingoptions.md) |

**Returns:** *[Tracing](../interfaces/_trace_events_.tracing.md)*

___

###  getEnabledCategories

▸ **getEnabledCategories**(): *string*

Defined in node_modules/@types/node/trace_events.d.ts:60

Returns a comma-separated list of all currently-enabled trace event
categories. The current set of enabled trace event categories is
determined by the union of all currently-enabled `Tracing` objects and
any categories enabled using the `--trace-event-categories` flag.

**Returns:** *string*
