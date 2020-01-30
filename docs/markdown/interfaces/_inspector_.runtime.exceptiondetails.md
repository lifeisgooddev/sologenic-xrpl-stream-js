[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [ExceptionDetails](_inspector_.runtime.exceptiondetails.md)

# Interface: ExceptionDetails

Detailed information about exception (or error) that was thrown during script compilation or execution.

## Hierarchy

* **ExceptionDetails**

## Index

### Properties

* [columnNumber](_inspector_.runtime.exceptiondetails.md#columnnumber)
* [exception](_inspector_.runtime.exceptiondetails.md#optional-exception)
* [exceptionId](_inspector_.runtime.exceptiondetails.md#exceptionid)
* [executionContextId](_inspector_.runtime.exceptiondetails.md#optional-executioncontextid)
* [lineNumber](_inspector_.runtime.exceptiondetails.md#linenumber)
* [scriptId](_inspector_.runtime.exceptiondetails.md#optional-scriptid)
* [stackTrace](_inspector_.runtime.exceptiondetails.md#optional-stacktrace)
* [text](_inspector_.runtime.exceptiondetails.md#text)
* [url](_inspector_.runtime.exceptiondetails.md#optional-url)

## Properties

###  columnNumber

• **columnNumber**: *number*

Defined in node_modules/@types/node/inspector.d.ts:309

Column number of the exception location (0-based).

___

### `Optional` exception

• **exception**? : *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:325

Exception object if available.

___

###  exceptionId

• **exceptionId**: *number*

Defined in node_modules/@types/node/inspector.d.ts:297

Exception id.

___

### `Optional` executionContextId

• **executionContextId**? : *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:329

Identifier of the context where exception happened.

___

###  lineNumber

• **lineNumber**: *number*

Defined in node_modules/@types/node/inspector.d.ts:305

Line number of the exception location (0-based).

___

### `Optional` scriptId

• **scriptId**? : *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:313

Script ID of the exception location.

___

### `Optional` stackTrace

• **stackTrace**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:321

JavaScript stack trace if available.

___

###  text

• **text**: *string*

Defined in node_modules/@types/node/inspector.d.ts:301

Exception text, which should be used together with exception object when available.

___

### `Optional` url

• **url**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:317

URL of the exception location, to be used when the script was not reported.
