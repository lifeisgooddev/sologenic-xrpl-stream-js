[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](../modules/_perf_hooks_.md) › [PerformanceNodeTiming](_perf_hooks_.performancenodetiming.md)

# Interface: PerformanceNodeTiming

## Hierarchy

* [PerformanceEntry](_perf_hooks_.performanceentry.md)

  ↳ **PerformanceNodeTiming**

## Index

### Properties

* [bootstrapComplete](_perf_hooks_.performancenodetiming.md#bootstrapcomplete)
* [clusterSetupEnd](_perf_hooks_.performancenodetiming.md#clustersetupend)
* [clusterSetupStart](_perf_hooks_.performancenodetiming.md#clustersetupstart)
* [duration](_perf_hooks_.performancenodetiming.md#duration)
* [entryType](_perf_hooks_.performancenodetiming.md#entrytype)
* [kind](_perf_hooks_.performancenodetiming.md#optional-kind)
* [loopExit](_perf_hooks_.performancenodetiming.md#loopexit)
* [loopStart](_perf_hooks_.performancenodetiming.md#loopstart)
* [moduleLoadEnd](_perf_hooks_.performancenodetiming.md#moduleloadend)
* [moduleLoadStart](_perf_hooks_.performancenodetiming.md#moduleloadstart)
* [name](_perf_hooks_.performancenodetiming.md#name)
* [nodeStart](_perf_hooks_.performancenodetiming.md#nodestart)
* [preloadModuleLoadEnd](_perf_hooks_.performancenodetiming.md#preloadmoduleloadend)
* [preloadModuleLoadStart](_perf_hooks_.performancenodetiming.md#preloadmoduleloadstart)
* [startTime](_perf_hooks_.performancenodetiming.md#starttime)
* [thirdPartyMainEnd](_perf_hooks_.performancenodetiming.md#thirdpartymainend)
* [thirdPartyMainStart](_perf_hooks_.performancenodetiming.md#thirdpartymainstart)
* [v8Start](_perf_hooks_.performancenodetiming.md#v8start)

## Properties

###  bootstrapComplete

• **bootstrapComplete**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:39

The high resolution millisecond timestamp at which the Node.js process completed bootstrap.

___

###  clusterSetupEnd

• **clusterSetupEnd**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:44

The high resolution millisecond timestamp at which cluster processing ended.

___

###  clusterSetupStart

• **clusterSetupStart**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:49

The high resolution millisecond timestamp at which cluster processing started.

___

###  duration

• **duration**: *number*

*Inherited from [PerformanceEntry](_perf_hooks_.performanceentry.md).[duration](_perf_hooks_.performanceentry.md#duration)*

Defined in node_modules/@types/node/perf_hooks.d.ts:9

The total number of milliseconds elapsed for this entry.
This value will not be meaningful for all Performance Entry types.

___

###  entryType

• **entryType**: *string*

*Inherited from [PerformanceEntry](_perf_hooks_.performanceentry.md).[entryType](_perf_hooks_.performanceentry.md#entrytype)*

Defined in node_modules/@types/node/perf_hooks.d.ts:25

The type of the performance entry.
Currently it may be one of: 'node', 'mark', 'measure', 'gc', or 'function'.

___

### `Optional` kind

• **kind**? : *undefined | number*

*Inherited from [PerformanceEntry](_perf_hooks_.performanceentry.md).[kind](_perf_hooks_.performanceentry.md#optional-kind)*

Defined in node_modules/@types/node/perf_hooks.d.ts:32

When performanceEntry.entryType is equal to 'gc', the performance.kind property identifies
the type of garbage collection operation that occurred.
The value may be one of perf_hooks.constants.

___

###  loopExit

• **loopExit**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:54

The high resolution millisecond timestamp at which the Node.js event loop exited.

___

###  loopStart

• **loopStart**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:59

The high resolution millisecond timestamp at which the Node.js event loop started.

___

###  moduleLoadEnd

• **moduleLoadEnd**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:64

The high resolution millisecond timestamp at which main module load ended.

___

###  moduleLoadStart

• **moduleLoadStart**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:69

The high resolution millisecond timestamp at which main module load started.

___

###  name

• **name**: *string*

*Inherited from [PerformanceEntry](_perf_hooks_.performanceentry.md).[name](_perf_hooks_.performanceentry.md#name)*

Defined in node_modules/@types/node/perf_hooks.d.ts:14

The name of the performance entry.

___

###  nodeStart

• **nodeStart**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:74

The high resolution millisecond timestamp at which the Node.js process was initialized.

___

###  preloadModuleLoadEnd

• **preloadModuleLoadEnd**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:79

The high resolution millisecond timestamp at which preload module load ended.

___

###  preloadModuleLoadStart

• **preloadModuleLoadStart**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:84

The high resolution millisecond timestamp at which preload module load started.

___

###  startTime

• **startTime**: *number*

*Inherited from [PerformanceEntry](_perf_hooks_.performanceentry.md).[startTime](_perf_hooks_.performanceentry.md#starttime)*

Defined in node_modules/@types/node/perf_hooks.d.ts:19

The high resolution millisecond timestamp marking the starting time of the Performance Entry.

___

###  thirdPartyMainEnd

• **thirdPartyMainEnd**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:89

The high resolution millisecond timestamp at which third_party_main processing ended.

___

###  thirdPartyMainStart

• **thirdPartyMainStart**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:94

The high resolution millisecond timestamp at which third_party_main processing started.

___

###  v8Start

• **v8Start**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:99

The high resolution millisecond timestamp at which the V8 platform was initialized.
