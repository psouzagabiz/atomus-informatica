import { Card, CardContent } from "@/components/ui/card";

interface Column<T> {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
}

export function AdminTable<T>({
  columns,
  rows,
  keyField,
}: {
  columns: readonly Column<T>[];
  rows: readonly T[];
  keyField: (row: T) => string;
}) {
  return (
    <Card>
      <CardContent className="overflow-x-auto p-0">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              {columns.map((column) => (
                <th
                  key={column.header}
                  className="whitespace-nowrap p-4 font-semibold text-muted-foreground"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={keyField(row)} className="border-b border-border last:border-0">
                {columns.map((column) => (
                  <td key={column.header} className={`p-4 ${column.className ?? ""}`}>
                    {column.accessor(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length === 0 && (
          <p className="p-6 text-center text-sm text-muted-foreground">
            Nenhum registro encontrado.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function StatusBadge({
  status,
  styles,
}: {
  status: string;
  styles: Record<string, string>;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status] ?? "bg-secondary text-muted-foreground"}`}
    >
      {status.replace(/_/g, " ")}
    </span>
  );
}
