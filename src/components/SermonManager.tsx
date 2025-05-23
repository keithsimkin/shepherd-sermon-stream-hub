
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface Sermon {
  id: number;
  title: string;
  date: string;
  speaker: string;
  description: string;
  audioUrl: string;
}

const SermonManager = () => {
  const { toast } = useToast();
  const [sermons, setSermons] = useState<Sermon[]>([
    {
      id: 1,
      title: "Walking in Faith",
      date: "2025-05-19",
      speaker: "Pastor John",
      description: "A sermon about trusting God in difficult times.",
      audioUrl: "https://example.com/sermon1.mp3"
    },
    {
      id: 2,
      title: "The Power of Prayer",
      date: "2025-05-12",
      speaker: "Pastor Sarah",
      description: "Understanding how prayer can transform our lives.",
      audioUrl: "https://example.com/sermon2.mp3"
    },
    {
      id: 3,
      title: "Grace and Forgiveness",
      date: "2025-05-05",
      speaker: "Pastor John",
      description: "Exploring God's amazing grace and the power of forgiveness.",
      audioUrl: "https://example.com/sermon3.mp3"
    }
  ]);

  const [newSermon, setNewSermon] = useState({
    title: "",
    date: "",
    speaker: "",
    description: "",
    audioUrl: ""
  });

  const [isUploading, setIsUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewSermon(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, you would upload the file to a cloud storage service
      // and get back a URL. For now, we'll simulate this.
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setNewSermon(prev => ({ ...prev, audioUrl: fileUrl }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      const id = sermons.length > 0 ? Math.max(...sermons.map(s => s.id)) + 1 : 1;
      const sermon = { ...newSermon, id };
      setSermons(prev => [sermon, ...prev]);

      toast({
        title: "Sermon Uploaded",
        description: `"${newSermon.title}" has been successfully added.`,
      });

      setNewSermon({
        title: "",
        date: "",
        speaker: "",
        description: "",
        audioUrl: ""
      });

      setIsUploading(false);
      setOpen(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-semibold">Sermon Manager</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-church-primary hover:bg-church-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Upload Sermon
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Upload New Sermon</DialogTitle>
              <DialogDescription>
                Add a new sermon to your church's library.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Sermon Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={newSermon.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={newSermon.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="speaker">Speaker</Label>
                  <Input
                    id="speaker"
                    name="speaker"
                    value={newSermon.speaker}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newSermon.description}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="audio">Audio File</Label>
                <Input
                  id="audio"
                  name="audio"
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? "Uploading..." : "Upload Sermon"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sermons</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Speaker</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sermons.map((sermon) => (
                <TableRow key={sermon.id}>
                  <TableCell className="font-medium">{sermon.title}</TableCell>
                  <TableCell>{sermon.speaker}</TableCell>
                  <TableCell>{new Date(sermon.date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SermonManager;
