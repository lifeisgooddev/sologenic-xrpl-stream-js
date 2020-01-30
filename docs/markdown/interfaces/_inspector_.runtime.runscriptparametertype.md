[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [RunScriptParameterType](_inspector_.runtime.runscriptparametertype.md)

# Interface: RunScriptParameterType

## Hierarchy

* **RunScriptParameterType**

## Index

### Properties

* [awaitPromise](_inspector_.runtime.runscriptparametertype.md#optional-awaitpromise)
* [executionContextId](_inspector_.runtime.runscriptparametertype.md#optional-executioncontextid)
* [generatePreview](_inspector_.runtime.runscriptparametertype.md#optional-generatepreview)
* [includeCommandLineAPI](_inspector_.runtime.runscriptparametertype.md#optional-includecommandlineapi)
* [objectGroup](_inspector_.runtime.runscriptparametertype.md#optional-objectgroup)
* [returnByValue](_inspector_.runtime.runscriptparametertype.md#optional-returnbyvalue)
* [scriptId](_inspector_.runtime.runscriptparametertype.md#scriptid)
* [silent](_inspector_.runtime.runscriptparametertype.md#optional-silent)

## Properties

### `Optional` awaitPromise

• **awaitPromise**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:590

Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved.

___

### `Optional` executionContextId

• **executionContextId**? : *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:566

Specifies in which execution context to perform script run. If the parameter is omitted the evaluation will be performed in the context of the inspected page.

___

### `Optional` generatePreview

• **generatePreview**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:586

Whether preview should be generated for the result.

___

### `Optional` includeCommandLineAPI

• **includeCommandLineAPI**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:578

Determines whether Command Line API should be available during the evaluation.

___

### `Optional` objectGroup

• **objectGroup**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:570

Symbolic group name that can be used to release multiple objects.

___

### `Optional` returnByValue

• **returnByValue**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:582

Whether the result is expected to be a JSON object which should be sent by value.

___

###  scriptId

• **scriptId**: *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:562

Id of the script to run.

___

### `Optional` silent

• **silent**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:574

In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.
