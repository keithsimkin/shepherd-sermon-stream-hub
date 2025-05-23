
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Plus, TrendingUp, Users, Calendar } from "lucide-react";

const AttendanceTracking = () => {
  const [selectedService, setSelectedService] = useState("sunday-morning");

  const attendanceData = [
    { date: "2024-05-19", service: "Sunday Morning", attendance: 245, capacity: 300 },
    { date: "2024-05-19", service: "Sunday Evening", attendance: 128, capacity: 200 },
    { date: "2024-05-12", service: "Sunday Morning", attendance: 268, capacity: 300 },
    { date: "2024-05-12", service: "Sunday Evening", attendance: 142, capacity: 200 },
    { date: "2024-05-05", service: "Sunday Morning", attendance: 231, capacity: 300 },
  ];

  const stats = [
    { title: "Average Attendance", value: "213", change: "+8%", icon: <Users className="h-5 w-5" /> },
    { title: "This Week", value: "373", change: "+12%", icon: <Calendar className="h-5 w-5" /> },
    { title: "Growth Rate", value: "5.2%", change: "+2.1%", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Tracking</h1>
          <p className="text-gray-600 mt-2">Monitor and track service attendance</p>
        </div>
        <Button className="bg-church-primary hover:bg-church-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Record Attendance
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filter by Service</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sunday-morning">Sunday Morning</SelectItem>
              <SelectItem value="sunday-evening">Sunday Evening</SelectItem>
              <SelectItem value="wednesday">Wednesday Prayer</SelectItem>
              <SelectItem value="all">All Services</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance Records</CardTitle>
          <CardDescription>Track attendance across different services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {attendanceData.map((record, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{record.service}</h3>
                    <Badge variant="outline">{record.date}</Badge>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-church-primary">{record.attendance}</span>
                      <span className="text-sm text-gray-500">/ {record.capacity} capacity</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-church-primary h-2 rounded-full" 
                        style={{ width: `${(record.attendance / record.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3 sm:mt-0">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceTracking;
