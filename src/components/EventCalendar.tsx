
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Plus, Users } from "lucide-react";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Sunday Service",
      date: "2024-12-24",
      time: "10:00 AM",
      location: "Main Sanctuary",
      attendees: 250,
      type: "Service",
      description: "Weekly Sunday worship service with Pastor David"
    },
    {
      id: 2,
      title: "Christmas Eve Service",
      date: "2024-12-24",
      time: "7:00 PM",
      location: "Main Sanctuary",
      attendees: 350,
      type: "Special",
      description: "Special Christmas Eve candlelight service"
    },
    {
      id: 3,
      title: "Youth Group Meeting",
      date: "2024-12-26",
      time: "6:00 PM",
      location: "Youth Center",
      attendees: 45,
      type: "Youth",
      description: "Weekly youth group gathering and activities"
    },
    {
      id: 4,
      title: "Bible Study",
      date: "2024-12-28",
      time: "7:00 PM",
      location: "Fellowship Hall",
      attendees: 30,
      type: "Study",
      description: "Weekly Bible study group discussion"
    },
    {
      id: 5,
      title: "Community Outreach",
      date: "2024-12-30",
      time: "9:00 AM",
      location: "Downtown",
      attendees: 20,
      type: "Outreach",
      description: "Community service and outreach program"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Service": return "bg-blue-100 text-blue-800";
      case "Special": return "bg-purple-100 text-purple-800";
      case "Youth": return "bg-green-100 text-green-800";
      case "Study": return "bg-orange-100 text-orange-800";
      case "Outreach": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Event Calendar</h1>
          <p className="text-gray-600 mt-2">Manage church events and activities</p>
        </div>
        <Button className="bg-church-primary hover:bg-church-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Calendar Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Next scheduled church activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                        <Users className="h-3 w-3" />
                        {event.attendees} expected attendees
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{events.length}</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {events.reduce((sum, event) => sum + event.attendees, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Expected Attendees</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">Events This Week</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventCalendar;
