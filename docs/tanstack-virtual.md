# TanStack Virtual — Simple Example

TanStack Virtual virtualizes long lists by only rendering items currently visible in the scroll window, keeping the DOM small regardless of list size.

## Installation

```bash
npm install @tanstack/react-virtual
```

## Basic Example

```tsx
'use client'

import { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)

export default function VirtualList() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 40,
  })

  return (
    <div
      ref={scrollRef}
      style={{ height: '400px', overflow: 'auto' }}
      className="border rounded"
    >
      {/* Full scrollable height — keeps scrollbar accurate */}
      <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
            className="flex items-center px-4 border-b"
          >
            {items[virtualItem.index]}
          </div>
        ))}
      </div>
    </div>
  )
}
```

## Key Concepts

| Concept | Description |
|---------|-------------|
| `count` | Total number of items in the list |
| `getScrollElement` | Returns the scroll container ref |
| `estimateSize` | Estimated height (px) per item |
| `getTotalSize()` | Full height of all items — set on the inner container |
| `getVirtualItems()` | Only the currently visible items |
| `virtualItem.index` | Index into your original data array |
| `virtualItem.start` | Y offset from the top — used with `translateY` |
| `virtualItem.size` | Actual rendered height of this item |
| `virtualItem.key` | Stable key for React reconciliation |

## Dynamic Item Sizes

For items with variable heights (e.g. text wrapping), use `measureElement`:

```tsx
const virtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => scrollRef.current,
  estimateSize: () => 50,
})

// On each item:
<div
  key={virtualItem.key}
  data-index={virtualItem.index}
  ref={virtualizer.measureElement}
  style={{
    position: 'absolute',
    top: 0,
    transform: `translateY(${virtualItem.start}px)`,
  }}
>
  {items[virtualItem.index]}
</div>
```

## Horizontal List

```tsx
const virtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => scrollRef.current,
  estimateSize: () => 100,
  horizontal: true,
})

// Container needs overflow-x, inner div uses width instead of height:
<div style={{ width: virtualizer.getTotalSize(), position: 'relative' }}>
  {virtualizer.getVirtualItems().map((virtualItem) => (
    <div
      key={virtualItem.key}
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: `${virtualItem.size}px`,
        transform: `translateX(${virtualItem.start}px)`,
      }}
    >
      {items[virtualItem.index]}
    </div>
  ))}
</div>
```

## When to Use

- Lists with **hundreds or thousands** of items
- Chat messages, activity feeds, data grids
- Any scroll container where rendering all items causes jank
