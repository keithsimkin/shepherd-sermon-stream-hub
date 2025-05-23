
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Send, Mail, MessageSquare, Bell, Users, Calendar } from "lucide-react";

const CommunicationCenter = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const recentMessages = [
    {
      id: 1,
      type: "Email",
      subject: "Christmas Service Schedule",
      recipients: 1247,
      date: "2024-12-20",
      status: "Sent"
    },
    {
      id: 2,
      type: "Announcement",
      subject: "Youth Group Canceled Tonight",
      recipients: 45,
      date: "2024-12-19",
      status: "Sent"
    },
    {
      id: 3,
      type: "Newsletter",
      subject: "Weekly Church Newsletter",
      recipients: 856,
      date: "2024-12-18",
      status: "Sent"
    }
  ];

  const communicationStats = [
    { title: "Total Subscribers", value: "1,247", icon: <Users className="h-5 w-5" /> },
    { title: "Messages Sent", value: "234", icon: <Mail className="h-5 w-5" /> },
    { title: "Open Rate", value: "78%", icon: <MessageSquare className="h-5 w-5" /> },
    { title: "Active Groups", value: "12", icon: <Bell className="h-5 w-5" /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Communication Center</h1>
        <p className="text-gray-600 mt-2">Send messages and announcements to your church community</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {communicationStats.map((stat, index) => (
          <Card key={index} className="dashboard-card">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="text-blue-600">{stat.icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Send Message */}
        <Card>
          <CardHeader>
            <CardTitle>Send New Message</CardTitle>
            <CardDescription>Compose and send messages to church members</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Recipients</label>
              <select className="w-full p-2 border rounded-md">
                <option>All Members (1,247)</option>
                <option>Active Members Only (1,156)</option>
                <option>Youth Group (45)</option>
                <option>Ministry Leaders (23)</option>
                <option>Volunteers (67)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input
                placeholder="Enter message subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
              />
            </div>
            <div className="flex gap-2">
              <Button className="bg-church-primary hover:bg-church-primary/90">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline">Save Draft</Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Previously sent communications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{msg.subject}</h3>
                    <Badge variant="secondary">{msg.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {msg.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {msg.recipients} recipients
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {msg.date}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm">Duplicate</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex flex-col gap-2">
              <Bell className="h-5 w-5" />
              Send Announcement
            </Button>
            <Button variant="outline" className="h-16 flex flex-col gap-2">
              <Mail className="h-5 w-5" />
              Create Newsletter
            </Button>
            <Button variant="outline" className="h-16 flex flex-col gap-2">
              <MessageSquare className="h-5 w-5" />
              Emergency Alert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunicationCenter;
