[typescript](../README.md) › [Globals](../globals.md) › ["async_hooks"](_async_hooks_.md)

# Module: "async_hooks"

Async Hooks module: https://nodejs.org/api/async_hooks.html

## Index

### Classes

* [AsyncResource](../classes/_async_hooks_.asyncresource.md)

### Interfaces

* [AsyncHook](../interfaces/_async_hooks_.asynchook.md)
* [AsyncResourceOptions](../interfaces/_async_hooks_.asyncresourceoptions.md)
* [HookCallbacks](../interfaces/_async_hooks_.hookcallbacks.md)

### Functions

* [createHook](_async_hooks_.md#createhook)
* [executionAsyncId](_async_hooks_.md#executionasyncid)
* [triggerAsyncId](_async_hooks_.md#triggerasyncid)

## Functions

###  createHook

▸ **createHook**(`options`: [HookCallbacks](../interfaces/_async_hooks_.hookcallbacks.md)): *[AsyncHook](../interfaces/_async_hooks_.asynchook.md)*

Defined in node_modules/@types/node/async_hooks.d.ts:69

Registers functions to be called for different lifetime events of each async operation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [HookCallbacks](../interfaces/_async_hooks_.hookcallbacks.md) | the callbacks to register |

**Returns:** *[AsyncHook](../interfaces/_async_hooks_.asynchook.md)*

an AsyncHooks instance used for disabling and enabling hooks

___

###  executionAsyncId

▸ **executionAsyncId**(): *number*

Defined in node_modules/@types/node/async_hooks.d.ts:8

Returns the asyncId of the current execution context.

**Returns:** *number*

___

###  triggerAsyncId

▸ **triggerAsyncId**(): *number*

Defined in node_modules/@types/node/async_hooks.d.ts:13

Returns the ID of the resource responsible for calling the callback that is currently being executed.

**Returns:** *number*
