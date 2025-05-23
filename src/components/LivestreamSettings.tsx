
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const LivestreamSettings = () => {
  const { toast } = useToast();
  
  const [livestreamData, setLivestreamData] = useState({
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sunday Worship Service",
    description: "Join us for our weekly Sunday worship service. All are welcome!",
    isLive: true,
    scheduledDate: "2025-05-26T10:00",
    autoPublish: true
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLivestreamData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string) => {
    setLivestreamData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Settings Saved",
        description: "Your livestream settings have been updated successfully.",
      });
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-semibold">Livestream Settings</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Current Livestream</CardTitle>
              <CardDescription>
                Configure your current or upcoming livestream settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="youtubeUrl">YouTube Embed URL</Label>
                <Input
                  id="youtubeUrl"
                  name="youtubeUrl"
                  value={livestreamData.youtubeUrl}
                  onChange={handleInputChange}
                  placeholder="https://www.youtube.com/embed/..."
                />
                <p className="text-xs text-muted-foreground">
                  Enter the embed URL from YouTube. This is different from the regular video URL.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Livestream Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={livestreamData.title}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={livestreamData.description}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="scheduledDate">Scheduled Date & Time</Label>
                <Input
                  id="scheduledDate"
                  name="scheduledDate"
                  type="datetime-local"
                  value={livestreamData.scheduledDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="isLive">Currently Live</Label>
                <Switch
                  id="isLive"
                  checked={livestreamData.isLive}
                  onCheckedChange={() => handleSwitchChange("isLive")}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label htmlFor="autoPublish">Auto-Publish</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically publish the livestream at the scheduled time.
                  </p>
                </div>
                <Switch
                  id="autoPublish"
                  checked={livestreamData.autoPublish}
                  onCheckedChange={() => handleSwitchChange("autoPublish")}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                How your livestream will appear to viewers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-md bg-muted">
                <iframe
                  src={livestreamData.youtubeUrl}
                  className="h-full w-full"
                  allowFullScreen
                  title="Livestream Preview"
                ></iframe>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-lg">{livestreamData.title}</h3>
                <p className="text-sm text-muted-foreground">{livestreamData.description}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
              <CardDescription>
                Current livestream status and metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`font-medium ${livestreamData.isLive ? "text-green-600" : "text-amber-600"}`}>
                    {livestreamData.isLive ? "Live Now" : "Scheduled"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scheduled for:</span>
                  <span className="font-medium">
                    {new Date(livestreamData.scheduledDate).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Auto-Publish:</span>
                  <span className="font-medium">
                    {livestreamData.autoPublish ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={isSaving} className="bg-church-primary hover:bg-church-primary/90">
            {isSaving ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LivestreamSettings;
