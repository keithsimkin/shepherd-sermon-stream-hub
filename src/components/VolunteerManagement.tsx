
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Calendar, Clock, Users } from "lucide-react";

const VolunteerManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const volunteers = [
    { 
      id: 1, 
      name: "Lisa Rodriguez", 
      role: "Children's Ministry", 
      availability: "Sundays", 
      experience: "3 years",
      status: "Active",
      nextAssignment: "May 26 - Sunday School"
    },
    { 
      id: 2, 
      name: "David Thompson", 
      role: "Audio/Visual", 
      availability: "Weekends", 
      experience: "5 years",
      status: "Active",
      nextAssignment: "May 19 - Sound Tech"
    },
    { 
      id: 3, 
      name: "Maria Garcia", 
      role: "Greeter", 
      availability: "Sunday AM", 
      experience: "2 years",
      status: "Available",
      nextAssignment: "May 26 - Welcome Team"
    },
    { 
      id: 4, 
      name: "James Wilson", 
      role: "Security", 
      availability: "Any time", 
      experience: "4 years",
      status: "Scheduled",
      nextAssignment: "May 19 - Security"
    },
  ];

  const upcomingNeeds = [
    { event: "Sunday Service", date: "May 26", roles: ["Ushers (2)", "Children's helpers (3)", "Setup crew (4)"] },
    { event: "Youth Event", date: "May 28", roles: ["Chaperones (6)", "Setup (2)", "Cleanup (3)"] },
    { event: "Community Outreach", date: "June 2", roles: ["Volunteers (10)", "Coordinators (2)"] },
  ];

  const filteredVolunteers = volunteers.filter(volunteer =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Available": return "bg-blue-100 text-blue-800";
      case "Scheduled": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Volunteer Management</h1>
          <p className="text-gray-600 mt-2">Coordinate and manage church volunteers</p>
        </div>
        <Button className="bg-church-primary hover:bg-church-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Volunteer
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Volunteers</p>
                <p className="text-2xl font-bold">{volunteers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active This Week</p>
                <p className="text-2xl font-bold">{volunteers.filter(v => v.status === "Active" || v.status === "Scheduled").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming Needs</p>
                <p className="text-2xl font-bold">{upcomingNeeds.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-2xl font-bold">{volunteers.filter(v => v.status === "Available").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search volunteers by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Volunteers List */}
        <Card>
          <CardHeader>
            <CardTitle>Volunteers ({filteredVolunteers.length})</CardTitle>
            <CardDescription>Manage your volunteer team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredVolunteers.map((volunteer) => (
                <div key={volunteer.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{volunteer.name}</h3>
                    <Badge className={getStatusColor(volunteer.status)}>
                      {volunteer.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1"><strong>Role:</strong> {volunteer.role}</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Available:</strong> {volunteer.availability}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Experience:</strong> {volunteer.experience}</p>
                  <p className="text-sm font-medium text-church-primary mb-3">{volunteer.nextAssignment}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Schedule</Button>
                    <Button variant="outline" size="sm">Contact</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Volunteer Needs */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Volunteer Needs</CardTitle>
            <CardDescription>Events requiring volunteer support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingNeeds.map((need, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{need.event}</h3>
                    <Badge variant="outline">{need.date}</Badge>
                  </div>
                  <div className="space-y-1">
                    {need.roles.map((role, roleIndex) => (
                      <p key={roleIndex} className="text-sm text-gray-600">• {role}</p>
                    ))}
                  </div>
                  <Button className="mt-3 w-full" variant="outline" size="sm">
                    Assign Volunteers
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerManagement;
