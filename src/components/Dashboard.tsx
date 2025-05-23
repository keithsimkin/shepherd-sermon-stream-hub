
import { useState } from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarProvider, 
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  BookOpen, 
  DollarSign, 
  Mic, 
  LayoutDashboard, 
  Youtube, 
  Users, 
  Calendar, 
  Mail,
  UserCheck,
  HandHeart,
  PieChart,
  Heart,
  Megaphone
} from "lucide-react";
import Navbar from "./Navbar";
import SermonManager from "./SermonManager";
import DonationHistory from "./DonationHistory";
import LivestreamSettings from "./LivestreamSettings";
import MemberManagement from "./MemberManagement";
import EventCalendar from "./EventCalendar";
import CommunicationCenter from "./CommunicationCenter";
import DashboardOverview from "./DashboardOverview";
import AttendanceTracking from "./AttendanceTracking";
import VolunteerManagement from "./VolunteerManagement";
import FinancialReports from "./FinancialReports";
import PrayerRequests from "./PrayerRequests";
import ChurchAnnouncements from "./ChurchAnnouncements";

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleSidebar = () => {
    setOpenMobile(!openMobile);
  };

  const menuItems = [
    {
      name: "Overview",
      id: "overview",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      name: "Sermons",
      id: "sermons",
      icon: <Mic className="w-5 h-5" />,
    },
    {
      name: "Donations",
      id: "donations",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      name: "Financial Reports",
      id: "financial-reports",
      icon: <PieChart className="w-5 h-5" />,
    },
    {
      name: "Attendance",
      id: "attendance",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      name: "Members",
      id: "members",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Volunteers",
      id: "volunteers",
      icon: <HandHeart className="w-5 h-5" />,
    },
    {
      name: "Events",
      id: "events",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      name: "Prayer Requests",
      id: "prayer-requests",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Announcements",
      id: "announcements",
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      name: "Communications",
      id: "communications",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "Livestream",
      id: "livestream",
      icon: <Youtube className="w-5 h-5" />,
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "sermons":
        return <SermonManager />;
      case "donations":
        return <DonationHistory />;
      case "financial-reports":
        return <FinancialReports />;
      case "attendance":
        return <AttendanceTracking />;
      case "members":
        return <MemberManagement />;
      case "volunteers":
        return <VolunteerManagement />;
      case "events":
        return <EventCalendar />;
      case "prayer-requests":
        return <PrayerRequests />;
      case "announcements":
        return <ChurchAnnouncements />;
      case "communications":
        return <CommunicationCenter />;
      case "livestream":
        return <LivestreamSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider open={isMobile ? openMobile : undefined} onOpenChange={isMobile ? setOpenMobile : undefined}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r">
          <SidebarHeader className="h-16 flex items-center px-6 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-church-primary flex items-center justify-center text-white font-semibold">
                S
              </div>
              <span className="font-heading font-medium">Shepherd Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="pt-6">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        className={`flex items-center gap-3 w-full ${
                          activeTab === item.id ? "bg-sidebar-accent" : ""
                        }`}
                        onClick={() => {
                          setActiveTab(item.id);
                          if (isMobile) {
                            setOpenMobile(false);
                          }
                        }}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-col flex-1">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex-1 p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
