import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockSchedule = [
  {
    id: "1",
    title: "Monetary Policy Lecture",
    time: "09:00 - 10:30",
    date: "Today",
    instructor: "Ida Aguirre",
    location: "Room 204",
    type: "Lecture",
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Economics Workshop",
    time: "14:00 - 15:30",
    date: "Today",
    instructor: "Tiffany Fowler",
    location: "Lab 105",
    type: "Workshop",
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "Marketing Strategy Seminar",
    time: "11:00 - 12:30",
    date: "Tomorrow",
    instructor: "Rory Todd",
    location: "Auditorium",
    type: "Seminar",
    color: "bg-purple-500",
  },
];

const Schedule = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Schedule</h1>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid gap-4">
        {mockSchedule.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <Badge className={`${event.color} text-white`}>
                  {event.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    Instructor: {event.instructor}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {event.date}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Join Class
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
