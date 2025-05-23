
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Megaphone, Calendar, Users, Eye } from "lucide-react";

const ChurchAnnouncements = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const announcements = [
    {
      id: 1,
      title: "Christmas Eve Service",
      content: "Join us for our special Christmas Eve service on December 24th at 7:00 PM. We'll have candlelight worship, special music, and a message of hope.",
      category: "Service",
      priority: "High",
      author: "Pastor David",
      datePosted: "2024-05-18",
      expiryDate: "2024-12-25",
      status: "Published",
      views: 234
    },
    {
      id: 2,
      title: "Youth Group Fundraiser",
      content: "Our youth group is raising funds for their summer mission trip. Car wash this Saturday from 9 AM to 3 PM in the church parking lot.",
      category: "Event",
      priority: "Normal",
      author: "Sarah Johnson",
      datePosted: "2024-05-17",
      expiryDate: "2024-05-25",
      status: "Published",
      views: 156
    },
    {
      id: 3,
      title: "New Bible Study Starting",
      content: "We're starting a new Wednesday evening Bible study focusing on the Book of Philippians. Begins next Wednesday at 7 PM in Fellowship Hall.",
      category: "Ministry",
      priority: "Normal",
      author: "Elder Mary",
      datePosted: "2024-05-15",
      expiryDate: "2024-06-15",
      status: "Published",
      views: 189
    },
    {
      id: 4,
      title: "Church Building Update",
      content: "Construction on the new children's wing is progressing well. We expect completion by the end of summer. Thank you for your patience during this time.",
      category: "Update",
      priority: "Low",
      author: "Building Committee",
      datePosted: "2024-05-14",
      expiryDate: "2024-08-31",
      status: "Published",
      views: 298
    },
    {
      id: 5,
      title: "Volunteer Appreciation Dinner",
      content: "We're planning a special dinner to appreciate all our volunteers. Date and details to be announced soon. Stay tuned!",
      category: "Event",
      priority: "Normal",
      author: "Admin Team",
      datePosted: "2024-05-12",
      expiryDate: "2024-06-30",
      status: "Draft",
      views: 0
    }
  ];

  const categories = ["All", "Service", "Event", "Ministry", "Update", "Emergency"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || announcement.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Normal": return "bg-blue-100 text-blue-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-800";
      case "Draft": return "bg-yellow-100 text-yellow-800";
      case "Archived": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Church Announcements</h1>
          <p className="text-gray-600 mt-2">Manage church announcements and communications</p>
        </div>
        <Button className="bg-church-primary hover:bg-church-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          New Announcement
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Megaphone className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Announcements</p>
                <p className="text-2xl font-bold">{announcements.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold">{announcements.filter(a => a.status === "Published").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">{announcements.reduce((sum, a) => sum + a.views, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-2xl font-bold">{announcements.filter(a => a.status === "Draft").length}</p>
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
                placeholder="Search announcements..."
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

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle>Announcements ({filteredAnnouncements.length})</CardTitle>
          <CardDescription>Manage church announcements and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAnnouncements.map((announcement) => (
              <div key={announcement.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                    <Badge variant="outline">{announcement.category}</Badge>
                    <Badge className={getPriorityColor(announcement.priority)}>{announcement.priority}</Badge>
                    <Badge className={getStatusColor(announcement.status)}>{announcement.status}</Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Posted: {announcement.datePosted}</p>
                    <p>Expires: {announcement.expiryDate}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>By: {announcement.author}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{announcement.views} views</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Preview</Button>
                    {announcement.status === "Draft" && (
                      <Button size="sm" className="bg-church-primary">
                        Publish
                      </Button>
                    )}
                    {announcement.status === "Published" && (
                      <Button variant="outline" size="sm">
                        Archive
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

export default ChurchAnnouncements;
