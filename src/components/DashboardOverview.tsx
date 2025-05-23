
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Mic, Youtube, TrendingUp, Calendar } from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Members",
      value: "1,247",
      change: "+12% from last month",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Monthly Donations",
      value: "$24,580",
      change: "+8% from last month",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Sermons This Month",
      value: "12",
      change: "4 scheduled upcoming",
      icon: <Mic className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Livestream Views",
      value: "3,842",
      change: "+15% from last week",
      icon: <Youtube className="h-6 w-6 text-red-600" />,
    },
  ];

  const recentActivities = [
    { action: "New member registered", person: "Sarah Johnson", time: "2 hours ago" },
    { action: "Donation received", person: "Michael Brown", time: "4 hours ago" },
    { action: "Sermon uploaded", person: "Pastor David", time: "1 day ago" },
    { action: "Event created", person: "Mary Wilson", time: "2 days ago" },
  ];

  const upcomingEvents = [
    { title: "Sunday Service", date: "Dec 24", time: "10:00 AM" },
    { title: "Christmas Eve Service", date: "Dec 24", time: "7:00 PM" },
    { title: "Youth Group Meeting", date: "Dec 26", time: "6:00 PM" },
    { title: "Bible Study", date: "Dec 28", time: "7:00 PM" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening at your church.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities and Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
            <CardDescription>Latest updates from your church community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.person}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
            <CardDescription>Next scheduled church activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{event.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
