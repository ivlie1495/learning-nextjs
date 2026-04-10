# TanStack Table — Simple Example

TanStack Table is a headless table library — it handles logic (sorting, filtering, pagination) but you control the HTML and styling.

## Installation

```bash
npm install @tanstack/react-table
```

## Basic Example

```tsx
'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type User = {
  id: number
  name: string
  email: string
  role: string
}

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol', email: 'carol@example.com', role: 'Viewer' },
]

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('name', { header: 'Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('role', { header: 'Role' }),
]

export default function UserTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b bg-gray-100">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-4 py-2 text-left font-semibold">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b hover:bg-gray-50">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```

## Key Concepts

| Concept | Description |
|---------|-------------|
| `createColumnHelper<T>()` | Creates a typed helper for defining columns |
| `columnHelper.accessor()` | Maps a data field to a column with optional header/cell config |
| `useReactTable()` | Main hook — takes `data`, `columns`, and row models |
| `getCoreRowModel()` | Required base row model for rendering rows |
| `getHeaderGroups()` | Returns header rows for rendering `<thead>` |
| `getRowModel().rows` | Returns data rows for rendering `<tbody>` |
| `getVisibleCells()` | Returns the visible cells for a row |
| `flexRender()` | Renders a header or cell (supports strings and components) |

## Adding Sorting

```tsx
import { getSortedRowModel, SortingState } from '@tanstack/react-table'
import { useState } from 'react'

const [sorting, setSorting] = useState<SortingState>([])

const table = useReactTable({
  data,
  columns,
  state: { sorting },
  onSortingChange: setSorting,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
})

// In the header cell:
<th onClick={header.column.getToggleSortingHandler()} className="cursor-pointer">
  {flexRender(header.column.columnDef.header, header.getContext())}
  {header.column.getIsSorted() === 'asc' ? ' ↑' : header.column.getIsSorted() === 'desc' ? ' ↓' : ''}
</th>
```

## Adding Pagination

```tsx
import { getPaginationRowModel, PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

const table = useReactTable({
  data,
  columns,
  state: { pagination },
  onPaginationChange: setPagination,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})

// Controls:
<button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Prev</button>
<span>Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</span>
<button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</button>
```
