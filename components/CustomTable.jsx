import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const invoices = [
  {
    invoice: "WOOD CHIPS ",
    paymentStatus: "250",
    totalAmount: "7",
    paymentMethod: "3.5",
  },
  {
    invoice: "WOOD PELLETS ",
    paymentStatus: "650",
    totalAmount: "15",
    paymentMethod: "4.8",
  },
  {
    invoice: "LOGS",
    paymentStatus: "350",
    totalAmount: "7",
    paymentMethod: "4.1",
  },
  {
    invoice: "MISCANTHUS (CHOPPED, 25% MC)",
    paymentStatus: "140 - 180",
    totalAmount: "8.3",
    paymentMethod: "3.6",
  },
  {
    invoice: "WHEAT GRAIN (15% MC)",
    paymentStatus: "760 - 780",
    totalAmount: "86",
    paymentMethod: "3.9",
  },
  {
    invoice: "COAL",
    paymentStatus: "N/A",
    totalAmount: "484",
    paymentMethod: "7.5 - 8.6",
  },
  {
    invoice: "ELECTRICITY",
    paymentStatus: "N/A",
    totalAmount: "530",
    paymentMethod: "N/A",
  },
];

export default function CustomTable() {
  return (
    <Table>
      <TableCaption className="text-xs md:text-base">
        A THE TABLE BELOW GIVES AN OVERVIEW OF THE RELATIVE DENSITIES PER CUBIC METRE. THE CO2 EMITTED PER KWH OF HEAT GENERATED AND HOW MANY UNITS OF HEAT IN KWH MAY BE GAINED
        FROM DIFFERENT BIOMASS FUELS.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Bio Mass Product</TableHead>
          <TableHead>
            KG per m<sup>3</sup>
          </TableHead>
          <TableHead>
            G/CO<sub>2</sub> Per KWH
          </TableHead>
          <TableHead>KWH per KG</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
