import { jsx, jsxs } from 'react/jsx-runtime';
import { useReactTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { faker } from '@faker-js/faker';
import { useVirtualizer } from '@tanstack/react-virtual';
import * as R$1 from 'react';
import { useState, useRef } from 'react';
import { f as fr, m as mr, D } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import '@tanstack/react-router';
import 'node:async_hooks';
import '@radix-ui/react-dropdown-menu';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import 'react-dom/server';
import 'node:stream/web';

const w = R$1.forwardRef(({ className: t, ...o }, a) => jsx("table", { ref: a, className: D("w-full caption-bottom text-sm", t), ...o }));
w.displayName = "Table";
const y = R$1.forwardRef(({ className: t, ...o }, a) => jsx("thead", { ref: a, className: D(t), ...o }));
y.displayName = "TableHeader";
const R = R$1.forwardRef(({ className: t, ...o }, a) => jsx("tbody", { ref: a, className: D(t), ...o }));
R.displayName = "TableBody";
const E = R$1.forwardRef(({ className: t, ...o }, a) => jsx("tfoot", { ref: a, className: D("bg-muted/50 font-medium", t), ...o }));
E.displayName = "TableFooter";
const c = R$1.forwardRef(({ className: t, ...o }, a) => jsx("tr", { ref: a, className: D("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted shadow-[0_1px_0_0_rgba(0,0,0,255)]", t), ...o }));
c.displayName = "TableRow";
const C = R$1.forwardRef(({ className: t, ...o }, a) => jsx("th", { ref: a, className: D("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...o }));
C.displayName = "TableHead";
const g = R$1.forwardRef(({ className: t, ...o }, a) => jsx("td", { ref: a, className: D("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...o }));
g.displayName = "TableCell";
const P = R$1.forwardRef(({ className: t, ...o }, a) => jsx("caption", { ref: a, className: D("mt-4 text-sm text-muted-foreground", t), ...o }));
P.displayName = "TableCaption";
const _ = { PENDING: "pending", PROCESSING: "processing", SUCCESS: "success", FAILED: "failed" };
function te() {
  return { id: faker.string.uuid(), amount: faker.number.float(), email: faker.internet.email(), status: faker.helpers.enumValue(_) };
}
function j({ columns: t, data: o }) {
  var _a, _b;
  const [a, S] = useState([]), [T, F] = useState([]), i = useReactTable({ data: o, columns: t, getCoreRowModel: getCoreRowModel(), onSortingChange: S, getSortedRowModel: getSortedRowModel(), onColumnFiltersChange: F, getFilteredRowModel: getFilteredRowModel(), state: { sorting: a, columnFilters: T } }), { rows: d } = i.getRowModel(), h = useRef(null), p = useVirtualizer({ count: d.length, getScrollElement: () => h.current, estimateSize: () => 54, overscan: 50 });
  return console.log("row length: ", d.length), jsxs("div", { children: [jsx("div", { className: "flex items-center py-4", children: jsx("input", { placeholder: "Filter emails...", value: (_b = (_a = i.getColumn("email")) == null ? undefined : _a.getFilterValue()) != null ? _b : "", onChange: (l) => {
    var _a2;
    return (_a2 = i.getColumn("email")) == null ? undefined : _a2.setFilterValue(l.target.value);
  }, className: "max-w-sm" }) }), jsx("div", { ref: h, className: "h-[480px] overflow-auto rounded-md border w-[500px] bg-red-300", children: jsx("div", { className: "my-auto", style: { height: `${p.getTotalSize()}px` }, children: jsxs(w, { children: [jsx(y, { children: i.getHeaderGroups().map((l) => jsx(c, { children: l.headers.map((r) => jsx(C, { colSpan: r.colSpan, style: { width: r.getSize() }, children: r.isPlaceholder ? null : flexRender(r.column.columnDef.header, r.getContext()) }, r.id)) }, l.id)) }), jsx(R, { children: p.getVirtualItems().length ? p.getVirtualItems().map((l, r) => {
    const u = d[l.index];
    return jsx(c, { "data-state": u.getIsSelected() && "selected", style: { height: `${l.size}px`, transform: `translateY(${l.start - r * l.size}px)` }, children: u.getVisibleCells().map((f) => jsx(g, { children: flexRender(f.column.columnDef.cell, f.getContext()) }, f.id)) }, u.id);
  }) : jsx(c, { children: jsx(g, { colSpan: t.length, className: "h-24 text-center", children: "No results." }) }) })] }) }) })] });
}
const oe = function() {
  return jsx("div", { className: "min-h-screen flex items-center justify-center container w-full mx-auto", children: jsx(j, { columns: mr, data: fr }) });
};

export { oe as component, te as createRandomPayment };
//# sourceMappingURL=index-J6tiH7jR.mjs.map
