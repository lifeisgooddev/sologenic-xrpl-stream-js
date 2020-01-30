[typescript](../README.md) › [Globals](../globals.md) › ["repl"](../modules/_repl_.md) › [ReplOptions](_repl_.reploptions.md)

# Interface: ReplOptions

## Hierarchy

* **ReplOptions**

## Index

### Properties

* [breakEvalOnSigint](_repl_.reploptions.md#optional-breakevalonsigint)
* [completer](_repl_.reploptions.md#optional-completer)
* [eval](_repl_.reploptions.md#optional-eval)
* [ignoreUndefined](_repl_.reploptions.md#optional-ignoreundefined)
* [input](_repl_.reploptions.md#optional-input)
* [output](_repl_.reploptions.md#optional-output)
* [prompt](_repl_.reploptions.md#optional-prompt)
* [replMode](_repl_.reploptions.md#optional-replmode)
* [terminal](_repl_.reploptions.md#optional-terminal)
* [useColors](_repl_.reploptions.md#optional-usecolors)
* [useGlobal](_repl_.reploptions.md#optional-useglobal)
* [writer](_repl_.reploptions.md#optional-writer)

## Properties

### `Optional` breakEvalOnSigint

• **breakEvalOnSigint**? : *undefined | false | true*

Defined in node_modules/@types/node/repl.d.ts:86

Stop evaluating the current piece of code when `SIGINT` is received, i.e. `Ctrl+C` is
pressed. This cannot be used together with a custom `eval` function.
Default: `false`.

___

### `Optional` completer

• **completer**? : *[Completer](../modules/_readline_.md#completer) | [AsyncCompleter](../modules/_readline_.md#asynccompleter)*

Defined in node_modules/@types/node/repl.d.ts:71

An optional function used for custom Tab auto completion.

**`see`** https://nodejs.org/dist/latest-v11.x/docs/api/readline.html#readline_use_of_the_completer_function

___

### `Optional` eval

• **eval**? : *[REPLEval](../modules/_repl_.md#repleval)*

Defined in node_modules/@types/node/repl.d.ts:38

The function to be used when evaluating each given line of input.
Default: an async wrapper for the JavaScript `eval()` function. An `eval` function can
error with `repl.Recoverable` to indicate the input was incomplete and prompt for
additional lines.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_default_evaluation

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_custom_evaluation_functions

___

### `Optional` ignoreUndefined

• **ignoreUndefined**? : *undefined | false | true*

Defined in node_modules/@types/node/repl.d.ts:58

If `true`, specifies that the default writer will not output the return value of a
command if it evaluates to `undefined`.
Default: `false`.

___

### `Optional` input

• **input**? : *[ReadableStream](nodejs.readablestream.md)*

Defined in node_modules/@types/node/repl.d.ts:16

The `Readable` stream from which REPL input will be read.
Default: `process.stdin`

___

### `Optional` output

• **output**? : *[WritableStream](nodejs.writablestream.md)*

Defined in node_modules/@types/node/repl.d.ts:21

The `Writable` stream to which REPL output will be written.
Default: `process.stdout`

___

### `Optional` prompt

• **prompt**? : *undefined | string*

Defined in node_modules/@types/node/repl.d.ts:11

The input prompt to display.
Default: `"> "`

___

### `Optional` replMode

• **replMode**? : *typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT*

Defined in node_modules/@types/node/repl.d.ts:80

A flag that specifies whether the default evaluator executes all JavaScript commands in
strict mode or default (sloppy) mode.
Accepted values are:
- `repl.REPL_MODE_SLOPPY` - evaluates expressions in sloppy mode.
- `repl.REPL_MODE_STRICT` - evaluates expressions in strict mode. This is equivalent to
  prefacing every repl statement with `'use strict'`.

___

### `Optional` terminal

• **terminal**? : *undefined | false | true*

Defined in node_modules/@types/node/repl.d.ts:28

If `true`, specifies that the output should be treated as a TTY terminal, and have
ANSI/VT100 escape codes written to it.
Default: checking the value of the `isTTY` property on the output stream upon
instantiation.

___

### `Optional` useColors

• **useColors**? : *undefined | false | true*

Defined in node_modules/@types/node/repl.d.ts:45

If `true`, specifies that the default `writer` function should include ANSI color
styling to REPL output. If a custom `writer` function is provided then this has no
effect.
Default: the REPL instance's `terminal` value.

___

### `Optional` useGlobal

• **useGlobal**? : *undefined | false | true*

Defined in node_modules/@types/node/repl.d.ts:52

If `true`, specifies that the default evaluation function will use the JavaScript
`global` as the context as opposed to creating a new separate context for the REPL
instance. The node CLI REPL sets this value to `true`.
Default: `false`.

___

### `Optional` writer

• **writer**? : *[REPLWriter](../modules/_repl_.md#replwriter)*

Defined in node_modules/@types/node/repl.d.ts:65

The function to invoke to format the output of each command before writing to `output`.
Default: a wrapper for `util.inspect`.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_customizing_repl_output
