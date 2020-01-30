[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](../modules/_perf_hooks_.md) › [PerformanceObserver](_perf_hooks_.performanceobserver.md)

# Class: PerformanceObserver

## Hierarchy

* [AsyncResource](_async_hooks_.asyncresource.md)

  ↳ **PerformanceObserver**

## Index

### Constructors

* [constructor](_perf_hooks_.performanceobserver.md#constructor)

### Methods

* [asyncId](_perf_hooks_.performanceobserver.md#asyncid)
* [disconnect](_perf_hooks_.performanceobserver.md#disconnect)
* [emitDestroy](_perf_hooks_.performanceobserver.md#emitdestroy)
* [observe](_perf_hooks_.performanceobserver.md#observe)
* [runInAsyncScope](_perf_hooks_.performanceobserver.md#runinasyncscope)
* [triggerAsyncId](_perf_hooks_.performanceobserver.md#triggerasyncid)

## Constructors

###  constructor

\+ **new PerformanceObserver**(`callback`: [PerformanceObserverCallback](../modules/_perf_hooks_.md#performanceobservercallback)): *[PerformanceObserver](_perf_hooks_.performanceobserver.md)*

*Overrides [AsyncResource](_async_hooks_.asyncresource.md).[constructor](_async_hooks_.asyncresource.md#constructor)*

Defined in node_modules/@types/node/perf_hooks.d.ts:216

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [PerformanceObserverCallback](../modules/_perf_hooks_.md#performanceobservercallback) |

**Returns:** *[PerformanceObserver](_perf_hooks_.performanceobserver.md)*

## Methods

###  asyncId

▸ **asyncId**(): *number*

*Inherited from [AsyncResource](_async_hooks_.asyncresource.md).[asyncId](_async_hooks_.asyncresource.md#asyncid)*

Defined in node_modules/@types/node/async_hooks.d.ts:125

**Returns:** *number*

the unique ID assigned to this AsyncResource instance.

___

###  disconnect

▸ **disconnect**(): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:222

Disconnects the PerformanceObserver instance from all notifications.

**Returns:** *void*

___

###  emitDestroy

▸ **emitDestroy**(): *void*

*Inherited from [AsyncResource](_async_hooks_.asyncresource.md).[emitDestroy](_async_hooks_.asyncresource.md#emitdestroy)*

Defined in node_modules/@types/node/async_hooks.d.ts:120

Call AsyncHooks destroy callbacks.

**Returns:** *void*

___

###  observe

▸ **observe**(`options`: object): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:230

Subscribes the PerformanceObserver instance to notifications of new PerformanceEntry instances identified by options.entryTypes.
When options.buffered is false, the callback will be invoked once for every PerformanceEntry instance.
Property buffered defaults to false.

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`buffered?` | undefined &#124; false &#124; true |
`entryTypes` | string[] |

**Returns:** *void*

___

###  runInAsyncScope

▸ **runInAsyncScope**<**This**, **Result**>(`fn`: function, `thisArg?`: This, ...`args`: any[]): *Result*

*Inherited from [AsyncResource](_async_hooks_.asyncresource.md).[runInAsyncScope](_async_hooks_.asyncresource.md#runinasyncscope)*

Defined in node_modules/@types/node/async_hooks.d.ts:115

Call the provided function with the provided arguments in the
execution context of the async resource. This will establish the
context, trigger the AsyncHooks before callbacks, call the function,
trigger the AsyncHooks after callbacks, and then restore the original
execution context.

**Type parameters:**

▪ **This**

▪ **Result**

**Parameters:**

▪ **fn**: *function*

The function to call in the execution context of this
  async resource.

▸ (`this`: This, ...`args`: any[]): *Result*

**Parameters:**

Name | Type |
------ | ------ |
`this` | This |
`...args` | any[] |

▪`Optional`  **thisArg**: *This*

The receiver to be used for the function call.

▪... **args**: *any[]*

Optional arguments to pass to the function.

**Returns:** *Result*

___

###  triggerAsyncId

▸ **triggerAsyncId**(): *number*

*Inherited from [AsyncResource](_async_hooks_.asyncresource.md).[triggerAsyncId](_async_hooks_.asyncresource.md#triggerasyncid)*

Defined in node_modules/@types/node/async_hooks.d.ts:130

**Returns:** *number*

the trigger ID for this AsyncResource instance.
