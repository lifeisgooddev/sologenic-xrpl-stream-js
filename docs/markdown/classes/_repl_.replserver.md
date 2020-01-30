[typescript](../README.md) › [Globals](../globals.md) › ["repl"](../modules/_repl_.md) › [REPLServer](_repl_.replserver.md)

# Class: REPLServer

Provides a customizable Read-Eval-Print-Loop (REPL).

Instances of `repl.REPLServer` will accept individual lines of user input, evaluate those
according to a user-defined evaluation function, then output the result. Input and output
may be from `stdin` and `stdout`, respectively, or may be connected to any Node.js `stream`.

Instances of `repl.REPLServer` support automatic completion of inputs, simplistic Emacs-style
line editing, multi-line inputs, ANSI-styled output, saving and restoring current REPL session
state, error recovery, and customizable evaluation functions.

Instances of `repl.REPLServer` are created using the `repl.start()` method and _should not_
be created directly using the JavaScript `new` keyword.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_repl

## Hierarchy

  ↳ [Interface](_readline_.interface.md)

  ↳ **REPLServer**

## Index

### Constructors

* [constructor](_repl_.replserver.md#private-constructor)

### Properties

* [commands](_repl_.replserver.md#commands)
* [completer](_repl_.replserver.md#completer)
* [context](_repl_.replserver.md#context)
* [editorMode](_repl_.replserver.md#editormode)
* [eval](_repl_.replserver.md#eval)
* [ignoreUndefined](_repl_.replserver.md#ignoreundefined)
* [inputStream](_repl_.replserver.md#inputstream)
* [last](_repl_.replserver.md#last)
* [lastError](_repl_.replserver.md#lasterror)
* [outputStream](_repl_.replserver.md#outputstream)
* [replMode](_repl_.replserver.md#replmode)
* [terminal](_repl_.replserver.md#terminal)
* [underscoreAssigned](_repl_.replserver.md#underscoreassigned)
* [underscoreErrAssigned](_repl_.replserver.md#underscoreerrassigned)
* [useColors](_repl_.replserver.md#usecolors)
* [useGlobal](_repl_.replserver.md#useglobal)
* [writer](_repl_.replserver.md#writer)
* [defaultMaxListeners](_repl_.replserver.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_repl_.replserver.md#[symbol.asynciterator])
* [addListener](_repl_.replserver.md#addlistener)
* [clearBufferedCommand](_repl_.replserver.md#clearbufferedcommand)
* [close](_repl_.replserver.md#close)
* [defineCommand](_repl_.replserver.md#definecommand)
* [displayPrompt](_repl_.replserver.md#displayprompt)
* [emit](_repl_.replserver.md#emit)
* [eventNames](_repl_.replserver.md#eventnames)
* [getMaxListeners](_repl_.replserver.md#getmaxlisteners)
* [listenerCount](_repl_.replserver.md#listenercount)
* [listeners](_repl_.replserver.md#listeners)
* [off](_repl_.replserver.md#off)
* [on](_repl_.replserver.md#on)
* [once](_repl_.replserver.md#once)
* [pause](_repl_.replserver.md#pause)
* [prependListener](_repl_.replserver.md#prependlistener)
* [prependOnceListener](_repl_.replserver.md#prependoncelistener)
* [prompt](_repl_.replserver.md#prompt)
* [question](_repl_.replserver.md#question)
* [rawListeners](_repl_.replserver.md#rawlisteners)
* [removeAllListeners](_repl_.replserver.md#removealllisteners)
* [removeListener](_repl_.replserver.md#removelistener)
* [resume](_repl_.replserver.md#resume)
* [setMaxListeners](_repl_.replserver.md#setmaxlisteners)
* [setPrompt](_repl_.replserver.md#setprompt)
* [setupHistory](_repl_.replserver.md#setuphistory)
* [write](_repl_.replserver.md#write)
* [listenerCount](_repl_.replserver.md#static-listenercount)

## Constructors

### `Private` constructor

\+ **new REPLServer**(): *[REPLServer](_repl_.replserver.md)*

*Overrides [Interface](_readline_.interface.md).[constructor](_readline_.interface.md#protected-constructor)*

Defined in node_modules/@types/node/repl.d.ts:217

NOTE: According to the documentation:

> Instances of `repl.REPLServer` are created using the `repl.start()` method and
> _should not_ be created directly using the JavaScript `new` keyword.

`REPLServer` cannot be subclassed due to implementation specifics in NodeJS.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_class_replserver

**Returns:** *[REPLServer](_repl_.replserver.md)*

## Properties

###  commands

• **commands**: *object*

Defined in node_modules/@types/node/repl.d.ts:144

The commands registered via `replServer.defineCommand()`.

#### Type declaration:

* \[ **name**: *string*\]: [REPLCommand](../interfaces/_repl_.replcommand.md) | undefined

___

###  completer

• **completer**: *[Completer](../modules/_readline_.md#completer) | [AsyncCompleter](../modules/_readline_.md#asynccompleter)*

Defined in node_modules/@types/node/repl.d.ts:208

Specified in the REPL options, this is the function to use for custom Tab auto-completion.

___

###  context

• **context**: *[Context](../interfaces/_vm_.context.md)*

Defined in node_modules/@types/node/repl.d.ts:132

The `vm.Context` provided to the `eval` function to be used for JavaScript
evaluation.

___

###  editorMode

• **editorMode**: *boolean*

Defined in node_modules/@types/node/repl.d.ts:150

A value indicating whether the REPL is currently in "editor mode".

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_commands_and_special_keys

___

###  eval

• **eval**: *[REPLEval](../modules/_repl_.md#repleval)*

Defined in node_modules/@types/node/repl.d.ts:182

Specified in the REPL options, this is the function to be used when evaluating each
given line of input. If not specified in the REPL options, this is an async wrapper
for the JavaScript `eval()` function.

___

###  ignoreUndefined

• **ignoreUndefined**: *boolean*

Defined in node_modules/@types/node/repl.d.ts:198

Specified in the REPL options, this is a value indicating whether the default `writer`
function should output the result of a command if it evaluates to `undefined`.

___

###  inputStream

• **inputStream**: *[ReadableStream](../interfaces/nodejs.readablestream.md)*

Defined in node_modules/@types/node/repl.d.ts:136

The `Readable` stream from which REPL input will be read.

___

###  last

• **last**: *any*

Defined in node_modules/@types/node/repl.d.ts:162

The last evaluation result from the REPL (assigned to the `_` variable inside of the REPL).

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable

___

###  lastError

• **lastError**: *any*

Defined in node_modules/@types/node/repl.d.ts:176

The last error raised inside the REPL (assigned to the `_error` variable inside of the REPL).

**`since`** v9.8.0

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable

___

###  outputStream

• **outputStream**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

Defined in node_modules/@types/node/repl.d.ts:140

The `Writable` stream to which REPL output will be written.

___

###  replMode

• **replMode**: *typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT*

Defined in node_modules/@types/node/repl.d.ts:217

Specified in the REPL options, this is a flag that specifies whether the default `eval`
function should execute all JavaScript commands in strict mode or default (sloppy) mode.
Possible values are:
- `repl.REPL_MODE_SLOPPY` - evaluates expressions in sloppy mode.
- `repl.REPL_MODE_STRICT` - evaluates expressions in strict mode. This is equivalent to
   prefacing every repl statement with `'use strict'`.

___

###  terminal

• **terminal**: *boolean*

*Inherited from [Interface](_readline_.interface.md).[terminal](_readline_.interface.md#terminal)*

Defined in node_modules/@types/node/readline.d.ts:14

___

###  underscoreAssigned

• **underscoreAssigned**: *boolean*

Defined in node_modules/@types/node/repl.d.ts:156

A value indicating whether the `_` variable has been assigned.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable

___

###  underscoreErrAssigned

• **underscoreErrAssigned**: *boolean*

Defined in node_modules/@types/node/repl.d.ts:169

A value indicating whether the `_error` variable has been assigned.

**`since`** v9.8.0

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable

___

###  useColors

• **useColors**: *boolean*

Defined in node_modules/@types/node/repl.d.ts:187

Specified in the REPL options, this is a value indicating whether the default
`writer` function should include ANSI color styling to REPL output.

___

###  useGlobal

• **useGlobal**: *boolean*

Defined in node_modules/@types/node/repl.d.ts:193

Specified in the REPL options, this is a value indicating whether the default `eval`
function will use the JavaScript `global` as the context as opposed to creating a new
separate context for the REPL instance.

___

###  writer

• **writer**: *[REPLWriter](../modules/_repl_.md#replwriter)*

Defined in node_modules/@types/node/repl.d.ts:204

Specified in the REPL options, this is the function to invoke to format the output of
each command before writing to `outputStream`. If not specified in the REPL options,
this will be a wrapper for `util.inspect`.

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹string›*

*Inherited from [Interface](_readline_.interface.md).[[Symbol.asyncIterator]](_readline_.interface.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/readline.d.ts:107

**Returns:** *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹string›*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:286

events.EventEmitter
1. close - inherited from `readline.Interface`
2. line - inherited from `readline.Interface`
3. pause - inherited from `readline.Interface`
4. resume - inherited from `readline.Interface`
5. SIGCONT - inherited from `readline.Interface`
6. SIGINT - inherited from `readline.Interface`
7. SIGTSTP - inherited from `readline.Interface`
8. exit
9. reset

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:287

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "line", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:288

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **addListener**(`event`: "pause", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:289

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "resume", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:290

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:291

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:292

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:293

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "exit", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:294

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "reset", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[addListener](_readline_.interface.md#addlistener)*

Defined in node_modules/@types/node/repl.d.ts:295

**Parameters:**

▪ **event**: *"reset"*

▪ **listener**: *function*

▸ (`context`: [Context](../interfaces/_vm_.context.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *this*

___

###  clearBufferedCommand

▸ **clearBufferedCommand**(): *void*

Defined in node_modules/@types/node/repl.d.ts:261

Clears any command that has been buffered but not yet executed.

This method is primarily intended to be called from within the action function for
commands registered using the `replServer.defineCommand()` method.

**`since`** v9.0.0

**Returns:** *void*

___

###  close

▸ **close**(): *void*

*Inherited from [Interface](_readline_.interface.md).[close](_readline_.interface.md#close)*

Defined in node_modules/@types/node/readline.d.ts:40

**Returns:** *void*

___

###  defineCommand

▸ **defineCommand**(`keyword`: string, `cmd`: [REPLCommandAction](../modules/_repl_.md#replcommandaction) | [REPLCommand](../interfaces/_repl_.replcommand.md)): *void*

Defined in node_modules/@types/node/repl.d.ts:240

Used to add new `.`-prefixed commands to the REPL instance. Such commands are invoked
by typing a `.` followed by the `keyword`.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_replserver_definecommand_keyword_cmd

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keyword` | string | The command keyword (_without_ a leading `.` character). |
`cmd` | [REPLCommandAction](../modules/_repl_.md#replcommandaction) &#124; [REPLCommand](../interfaces/_repl_.replcommand.md) | The function to invoke when the command is processed.  |

**Returns:** *void*

___

###  displayPrompt

▸ **displayPrompt**(`preserveCursor?`: undefined | false | true): *void*

Defined in node_modules/@types/node/repl.d.ts:252

Readies the REPL instance for input from the user, printing the configured `prompt` to a
new line in the `output` and resuming the `input` to accept new input.

When multi-line input is being entered, an ellipsis is printed rather than the 'prompt'.

This method is primarily intended to be called from within the action function for
commands registered using the `replServer.defineCommand()` method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`preserveCursor?` | undefined &#124; false &#124; true | When `true`, the cursor placement will not be reset to `0`.  |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:297

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:298

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "line", `input`: string): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:299

**Parameters:**

Name | Type |
------ | ------ |
`event` | "line" |
`input` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "pause"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:300

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pause" |

**Returns:** *boolean*

▸ **emit**(`event`: "resume"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:301

**Parameters:**

Name | Type |
------ | ------ |
`event` | "resume" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGCONT"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:302

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGCONT" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGINT"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:303

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGINT" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGTSTP"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:304

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGTSTP" |

**Returns:** *boolean*

▸ **emit**(`event`: "exit"): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:305

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |

**Returns:** *boolean*

▸ **emit**(`event`: "reset", `context`: [Context](../interfaces/_vm_.context.md)): *boolean*

*Overrides [Interface](_readline_.interface.md).[emit](_readline_.interface.md#emit)*

Defined in node_modules/@types/node/repl.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`event` | "reset" |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listenerCount](nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[off](nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:308

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:309

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "line", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:310

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **on**(`event`: "pause", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:311

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "resume", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:312

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:313

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:314

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:315

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "exit", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:316

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "reset", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[on](_readline_.interface.md#on)*

Defined in node_modules/@types/node/repl.d.ts:317

**Parameters:**

▪ **event**: *"reset"*

▪ **listener**: *function*

▸ (`context`: [Context](../interfaces/_vm_.context.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:319

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:320

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "line", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:321

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **once**(`event`: "pause", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:322

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "resume", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:323

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:324

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:325

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:326

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "exit", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:327

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "reset", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[once](_readline_.interface.md#once)*

Defined in node_modules/@types/node/repl.d.ts:328

**Parameters:**

▪ **event**: *"reset"*

▪ **listener**: *function*

▸ (`context`: [Context](../interfaces/_vm_.context.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Inherited from [Interface](_readline_.interface.md).[pause](_readline_.interface.md#pause)*

Defined in node_modules/@types/node/readline.d.ts:38

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:330

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:331

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "line", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:332

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "pause", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:333

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "resume", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:334

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:335

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:336

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:337

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "exit", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:338

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "reset", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependListener](_readline_.interface.md#prependlistener)*

Defined in node_modules/@types/node/repl.d.ts:339

**Parameters:**

▪ **event**: *"reset"*

▪ **listener**: *function*

▸ (`context`: [Context](../interfaces/_vm_.context.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:341

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:342

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "line", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:343

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pause", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:344

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "resume", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:345

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:346

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:347

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:348

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "exit", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:349

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "reset", `listener`: function): *this*

*Overrides [Interface](_readline_.interface.md).[prependOnceListener](_readline_.interface.md#prependoncelistener)*

Defined in node_modules/@types/node/repl.d.ts:350

**Parameters:**

▪ **event**: *"reset"*

▪ **listener**: *function*

▸ (`context`: [Context](../interfaces/_vm_.context.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *this*

___

###  prompt

▸ **prompt**(`preserveCursor?`: undefined | false | true): *void*

*Inherited from [Interface](_readline_.interface.md).[prompt](_readline_.interface.md#prompt)*

Defined in node_modules/@types/node/readline.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`preserveCursor?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  question

▸ **question**(`query`: string, `callback`: function): *void*

*Inherited from [Interface](_readline_.interface.md).[question](_readline_.interface.md#question)*

Defined in node_modules/@types/node/readline.d.ts:37

**Parameters:**

▪ **query**: *string*

▪ **callback**: *function*

▸ (`answer`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`answer` | string |

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  resume

▸ **resume**(): *this*

*Inherited from [Interface](_readline_.interface.md).[resume](_readline_.interface.md#resume)*

Defined in node_modules/@types/node/readline.d.ts:39

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setPrompt

▸ **setPrompt**(`prompt`: string): *void*

*Inherited from [Interface](_readline_.interface.md).[setPrompt](_readline_.interface.md#setprompt)*

Defined in node_modules/@types/node/readline.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`prompt` | string |

**Returns:** *void*

___

###  setupHistory

▸ **setupHistory**(`path`: string, `cb`: function): *void*

Defined in node_modules/@types/node/repl.d.ts:271

Initializes a history log file for the REPL instance. When executing the
Node.js binary and using the command line REPL, a history file is initialized
by default. However, this is not the case when creating a REPL
programmatically. Use this method to initialize a history log file when working
with REPL instances programmatically.

**Parameters:**

▪ **path**: *string*

The path to the history file

▪ **cb**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `repl`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`repl` | this |

**Returns:** *void*

___

###  write

▸ **write**(`data`: string | [Buffer](buffer.md), `key?`: [Key](../interfaces/_readline_.key.md)): *void*

*Inherited from [Interface](_readline_.interface.md).[write](_readline_.interface.md#write)*

Defined in node_modules/@types/node/readline.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; [Buffer](buffer.md) |
`key?` | [Key](../interfaces/_readline_.key.md) |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
