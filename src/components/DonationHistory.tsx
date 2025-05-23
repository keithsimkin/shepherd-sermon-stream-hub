
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Donation {
  id: number;
  name: string;
  amount: number;
  date: string;
  category: string;
  status: "completed" | "pending" | "failed";
}

const DonationHistory = () => {
  const [timeframe, setTimeframe] = useState("month");
  
  const [donations] = useState<Donation[]>([
    {
      id: 1,
      name: "Michael Johnson",
      amount: 250,
      date: "2025-05-21",
      category: "Tithe",
      status: "completed"
    },
    {
      id: 2,
      name: "Sarah Adams",
      amount: 100,
      date: "2025-05-20",
      category: "Building Fund",
      status: "completed"
    },
    {
      id: 3,
      name: "David Wilson",
      amount: 50,
      date: "2025-05-18",
      category: "Missions",
      status: "completed"
    },
    {
      id: 4,
      name: "Emily Roberts",
      amount: 75,
      date: "2025-05-17",
      category: "Tithe",
      status: "completed"
    },
    {
      id: 5,
      name: "Anonymous",
      amount: 500,
      date: "2025-05-15",
      category: "Building Fund",
      status: "completed"
    },
    {
      id: 6,
      name: "James Parker",
      amount: 120,
      date: "2025-05-14",
      category: "Tithe",
      status: "pending"
    }
  ]);

  const calculateTotal = () => {
    return donations
      .filter(d => d.status === "completed")
      .reduce((sum, donation) => sum + donation.amount, 0);
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800"
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-semibold">Donation History</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Timeframe:</span>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${calculateTotal().toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Number of Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Donation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(calculateTotal() / donations.length).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">{donation.name}</TableCell>
                  <TableCell>{donation.category}</TableCell>
                  <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                  <TableCell>${donation.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[donation.status]}>
                      {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationHistory;
