[typescript](../README.md) › [Globals](../globals.md) › ["async_hooks"](../modules/_async_hooks_.md) › [AsyncResource](_async_hooks_.asyncresource.md)

# Class: AsyncResource

The class AsyncResource was designed to be extended by the embedder's async resources.
Using this users can easily trigger the lifetime events of their own resources.

## Hierarchy

* **AsyncResource**

  ↳ [PerformanceObserver](_perf_hooks_.performanceobserver.md)

## Index

### Constructors

* [constructor](_async_hooks_.asyncresource.md#constructor)

### Methods

* [asyncId](_async_hooks_.asyncresource.md#asyncid)
* [emitDestroy](_async_hooks_.asyncresource.md#emitdestroy)
* [runInAsyncScope](_async_hooks_.asyncresource.md#runinasyncscope)
* [triggerAsyncId](_async_hooks_.asyncresource.md#triggerasyncid)

## Constructors

###  constructor

\+ **new AsyncResource**(`type`: string, `triggerAsyncId?`: number | [AsyncResourceOptions](../interfaces/_async_hooks_.asyncresourceoptions.md)): *[AsyncResource](_async_hooks_.asyncresource.md)*

Defined in node_modules/@types/node/async_hooks.d.ts:92

AsyncResource() is meant to be extended. Instantiating a
new AsyncResource() also triggers init. If triggerAsyncId is omitted then
async_hook.executionAsyncId() is used.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | The type of async event. |
`triggerAsyncId?` | number &#124; [AsyncResourceOptions](../interfaces/_async_hooks_.asyncresourceoptions.md) | The ID of the execution context that created   this async event (default: `executionAsyncId()`), or an   AsyncResourceOptions object (since 9.3)  |

**Returns:** *[AsyncResource](_async_hooks_.asyncresource.md)*

## Methods

###  asyncId

▸ **asyncId**(): *number*

Defined in node_modules/@types/node/async_hooks.d.ts:125

**Returns:** *number*

the unique ID assigned to this AsyncResource instance.

___

###  emitDestroy

▸ **emitDestroy**(): *void*

Defined in node_modules/@types/node/async_hooks.d.ts:120

Call AsyncHooks destroy callbacks.

**Returns:** *void*

___

###  runInAsyncScope

▸ **runInAsyncScope**<**This**, **Result**>(`fn`: function, `thisArg?`: This, ...`args`: any[]): *Result*

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

Defined in node_modules/@types/node/async_hooks.d.ts:130

**Returns:** *number*

the trigger ID for this AsyncResource instance.
