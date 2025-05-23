
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Heart, Clock, User, CheckCircle } from "lucide-react";

const PrayerRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const prayerRequests = [
    {
      id: 1,
      requester: "Sarah Johnson",
      category: "Health",
      priority: "Urgent",
      request: "Please pray for my mother who is undergoing surgery next week. We trust in God's healing power.",
      dateSubmitted: "2024-05-18",
      status: "Active",
      prayerCount: 23
    },
    {
      id: 2,
      requester: "Anonymous",
      category: "Family",
      priority: "Normal",
      request: "Pray for reconciliation in my family. We've been struggling with communication and understanding.",
      dateSubmitted: "2024-05-17",
      status: "Active",
      prayerCount: 15
    },
    {
      id: 3,
      requester: "David Wilson",
      category: "Employment",
      priority: "Normal",
      request: "Seeking God's guidance in my job search. Pray for wisdom and the right opportunities.",
      dateSubmitted: "2024-05-15",
      status: "Answered",
      prayerCount: 31
    },
    {
      id: 4,
      requester: "Maria Garcia",
      category: "Spiritual",
      priority: "Low",
      request: "Pray for spiritual growth and deeper understanding of God's word in my daily life.",
      dateSubmitted: "2024-05-14",
      status: "Active",
      prayerCount: 18
    },
    {
      id: 5,
      requester: "Church Leadership",
      category: "Ministry",
      priority: "High",
      request: "Pray for wisdom in planning our upcoming community outreach events and missions work.",
      dateSubmitted: "2024-05-12",
      status: "Active",
      prayerCount: 42
    }
  ];

  const categories = ["All", "Health", "Family", "Employment", "Spiritual", "Ministry", "Financial"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRequests = prayerRequests.filter(request => {
    const matchesSearch = request.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.request.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || request.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgent": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Normal": return "bg-blue-100 text-blue-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-100 text-blue-800";
      case "Answered": return "bg-green-100 text-green-800";
      case "Archived": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prayer Requests</h1>
          <p className="text-gray-600 mt-2">Manage and pray for community requests</p>
        </div>
        <Button className="bg-church-primary hover:bg-church-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Prayer Request
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold">{prayerRequests.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Requests</p>
                <p className="text-2xl font-bold">{prayerRequests.filter(r => r.status === "Active").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Answered Prayers</p>
                <p className="text-2xl font-bold">{prayerRequests.filter(r => r.status === "Answered").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Prayers</p>
                <p className="text-2xl font-bold">{prayerRequests.reduce((sum, r) => sum + r.prayerCount, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search prayer requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-church-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prayer Requests List */}
      <Card>
        <CardHeader>
          <CardTitle>Prayer Requests ({filteredRequests.length})</CardTitle>
          <CardDescription>Community prayer requests and testimonies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div key={request.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{request.requester}</h3>
                    <Badge variant="outline">{request.category}</Badge>
                    <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                    <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                  </div>
                  <span className="text-sm text-gray-500">{request.dateSubmitted}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{request.request}</p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>{request.prayerCount} people have prayed</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      Pray
                    </Button>
                    <Button variant="outline" size="sm">Edit</Button>
                    {request.status === "Active" && (
                      <Button variant="outline" size="sm" className="text-green-600">
                        Mark Answered
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrayerRequests;
