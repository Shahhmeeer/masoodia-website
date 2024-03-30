import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Wood Chips ",
    paymentStatus: "250",
    totalAmount: "7",
    paymentMethod: "3.5",
  },
  {
    invoice: "Wood Pellets ",
    paymentStatus: "650",
    totalAmount: "15",
    paymentMethod: "4.8",
  },
  {
    invoice: "Logs",
    paymentStatus: "350",
    totalAmount: "7",
    paymentMethod: "4.1",
  },
  {
    invoice: "Miscanthus (Chopped, 25% MC)",
    paymentStatus: "140 - 180",
    totalAmount: "8.3",
    paymentMethod: "3.6",
  },
  {
    invoice: "Wheat Grain (15% MC)",
    paymentStatus: "760 - 780",
    totalAmount: "86",
    paymentMethod: "3.9",
  },
  {
    invoice: "Coal",
    paymentStatus: "N/A",
    totalAmount: "484",
    paymentMethod: "7.5 - 8.6",
  },
  {
    invoice: "Electricity",
    paymentStatus: "N/A",
    totalAmount: "530",
    paymentMethod: "N/A",
  },
];

export default function CustomTable() {
  return (
    <Table>
      <TableCaption className="text-xs md:text-base">
        The table below gives an overview of the relative densities per cubic
        meter, the CO2 emitted per kWh of heat generated, and how many units of
        heat in kWh may be gained from different biomass fuels.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-green-800">Bio Mass Product</TableHead>
          <TableHead className="text-green-800">
            KG per m<sup>3</sup>
          </TableHead>
          <TableHead className="text-green-800">
            G/CO<sub>2</sub> Per KWH
          </TableHead>
          <TableHead className="text-green-800">KWH per KG</TableHead>
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
