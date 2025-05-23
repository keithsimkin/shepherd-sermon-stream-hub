
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Mail, Phone, UserPlus } from "lucide-react";

const MemberManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    { id: 1, name: "John Smith", email: "john@email.com", phone: "(555) 123-4567", status: "Active", joinDate: "2023-01-15" },
    { id: 2, name: "Sarah Johnson", email: "sarah@email.com", phone: "(555) 234-5678", status: "Active", joinDate: "2023-03-22" },
    { id: 3, name: "Michael Brown", email: "michael@email.com", phone: "(555) 345-6789", status: "Inactive", joinDate: "2022-11-08" },
    { id: 4, name: "Emily Davis", email: "emily@email.com", phone: "(555) 456-7890", status: "Active", joinDate: "2023-05-10" },
    { id: 5, name: "Robert Wilson", email: "robert@email.com", phone: "(555) 567-8901", status: "Active", joinDate: "2023-02-28" },
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Member Management</h1>
          <p className="text-gray-600 mt-2">Manage your church community members</p>
        </div>
        <Button className="bg-church-primary hover:bg-church-primary/90">
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Member
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members List */}
      <Card>
        <CardHeader>
          <CardTitle>Church Members ({filteredMembers.length})</CardTitle>
          <CardDescription>Overview of all registered members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div key={member.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                      {member.status}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {member.phone}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Joined: {member.joinDate}</p>
                </div>
                <div className="flex gap-2 mt-3 sm:mt-0">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemberManagement;
