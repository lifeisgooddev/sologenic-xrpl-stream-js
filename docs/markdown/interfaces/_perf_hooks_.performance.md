[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](../modules/_perf_hooks_.md) › [Performance](_perf_hooks_.performance.md)

# Interface: Performance

## Hierarchy

* **Performance**

## Index

### Properties

* [nodeTiming](_perf_hooks_.performance.md#nodetiming)
* [timeOrigin](_perf_hooks_.performance.md#timeorigin)

### Methods

* [clearFunctions](_perf_hooks_.performance.md#clearfunctions)
* [clearMarks](_perf_hooks_.performance.md#clearmarks)
* [clearMeasures](_perf_hooks_.performance.md#clearmeasures)
* [getEntries](_perf_hooks_.performance.md#getentries)
* [getEntriesByName](_perf_hooks_.performance.md#getentriesbyname)
* [getEntriesByType](_perf_hooks_.performance.md#getentriesbytype)
* [mark](_perf_hooks_.performance.md#mark)
* [measure](_perf_hooks_.performance.md#measure)
* [now](_perf_hooks_.performance.md#now)
* [timerify](_perf_hooks_.performance.md#timerify)

## Properties

###  nodeTiming

• **nodeTiming**: *[PerformanceNodeTiming](_perf_hooks_.performancenodetiming.md)*

Defined in node_modules/@types/node/perf_hooks.d.ts:175

An instance of the PerformanceNodeTiming class that provides performance metrics for specific Node.js operational milestones.

___

###  timeOrigin

• **timeOrigin**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:185

The timeOrigin specifies the high resolution millisecond timestamp from which all performance metric durations are measured.

## Methods

###  clearFunctions

▸ **clearFunctions**(`name?`: undefined | string): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:108

If name is not provided, removes all PerformanceFunction objects from the Performance Timeline.
If name is provided, removes entries with name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string |   |

**Returns:** *void*

___

###  clearMarks

▸ **clearMarks**(`name?`: undefined | string): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:115

If name is not provided, removes all PerformanceMark objects from the Performance Timeline.
If name is provided, removes only the named mark.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string |   |

**Returns:** *void*

___

###  clearMeasures

▸ **clearMeasures**(`name?`: undefined | string): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:121

If name is not provided, removes all PerformanceMeasure objects from the Performance Timeline.
If name is provided, removes only objects whose performanceEntry.name matches name.

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined &#124; string |

**Returns:** *void*

___

###  getEntries

▸ **getEntries**(): *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Defined in node_modules/@types/node/perf_hooks.d.ts:127

Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.

**Returns:** *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

list of all PerformanceEntry objects

___

###  getEntriesByName

▸ **getEntriesByName**(`name`: string, `type?`: undefined | string): *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Defined in node_modules/@types/node/perf_hooks.d.ts:136

Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type?` | undefined &#124; string |

**Returns:** *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

list of all PerformanceEntry objects

___

###  getEntriesByType

▸ **getEntriesByType**(`type`: string): *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Defined in node_modules/@types/node/perf_hooks.d.ts:144

Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
whose performanceEntry.entryType is equal to type.

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

list of all PerformanceEntry objects

___

###  mark

▸ **mark**(`name?`: undefined | string): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:153

Creates a new PerformanceMark entry in the Performance Timeline.
A PerformanceMark is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'mark',
and whose performanceEntry.duration is always 0.
Performance marks are used to mark specific significant moments in the Performance Timeline.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string |   |

**Returns:** *void*

___

###  measure

▸ **measure**(`name`: string, `startMark`: string, `endMark`: string): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:170

Creates a new PerformanceMeasure entry in the Performance Timeline.
A PerformanceMeasure is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'measure',
and whose performanceEntry.duration measures the number of milliseconds elapsed since startMark and endMark.

The startMark argument may identify any existing PerformanceMark in the the Performance Timeline, or may identify
any of the timestamp properties provided by the PerformanceNodeTiming class. If the named startMark does not exist,
then startMark is set to timeOrigin by default.

The endMark argument must identify any existing PerformanceMark in the the Performance Timeline or any of the timestamp
properties provided by the PerformanceNodeTiming class. If the named endMark does not exist, an error will be thrown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | - |
`startMark` | string | - |
`endMark` | string |   |

**Returns:** *void*

___

###  now

▸ **now**(): *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:180

**Returns:** *number*

the current high resolution millisecond timestamp

___

###  timerify

▸ **timerify**<**T**>(`fn`: T): *T*

Defined in node_modules/@types/node/perf_hooks.d.ts:192

Wraps a function within a new function that measures the running time of the wrapped function.
A PerformanceObserver must be subscribed to the 'function' event type in order for the timing details to be accessed.

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | T |   |

**Returns:** *T*
