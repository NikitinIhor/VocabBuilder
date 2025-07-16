import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

const data = [
  { id: 1, word: "Hello", translation: "Cześć", progress: 75 },
  { id: 2, word: "World", translation: "Świat", progress: 40 },
  { id: 3, word: "Table", translation: "Stół", progress: 100 },
];

const columns = [
  {
    accessorKey: "word",
    header: "Word",
  },
  {
    accessorKey: "translation",
    header: "Translation",
  },
  {
    accessorKey: "progress",
    header: "Progress",
    // Optional: render progress as a percentage with a bar or number
    cell: (info) => `${info.getValue()}%`,
  },
  {
    id: "actions",
    header: "",
    cell: () => <button>...</button>, // Your button with "..."
  },
];

export default function MyTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : header.renderHeader()}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{cell.renderCell()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
