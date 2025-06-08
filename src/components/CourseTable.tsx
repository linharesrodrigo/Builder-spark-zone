import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Course {
  id: string;
  title: string;
  teacher: {
    name: string;
    avatar: string;
  };
  duration: string;
  progress: {
    completed: number;
    total: number;
    percentage: number;
  };
  students: number;
  status: "continue" | "complete";
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Monetary Policy & Banking",
    teacher: {
      name: "Ida Aguirre",
      avatar: "/placeholder.svg",
    },
    duration: "74h 45m",
    progress: {
      completed: 14,
      total: 55,
      percentage: 25,
    },
    students: 3,
    status: "continue",
  },
  {
    id: "2",
    title: "International Economics",
    teacher: {
      name: "Tiffany Fowler",
      avatar: "/placeholder.svg",
    },
    duration: "62h 24m",
    progress: {
      completed: 12,
      total: 45,
      percentage: 26,
    },
    students: 10,
    status: "continue",
  },
  {
    id: "3",
    title: "Behavioral Economics",
    teacher: {
      name: "Julie Dawson",
      avatar: "/placeholder.svg",
    },
    duration: "44h 32m",
    progress: {
      completed: 3,
      total: 32,
      percentage: 10,
    },
    students: 7,
    status: "continue",
  },
  {
    id: "4",
    title: "Marketing Strategy",
    teacher: {
      name: "Rory Todd",
      avatar: "/placeholder.svg",
    },
    duration: "28h 12m",
    progress: {
      completed: 22,
      total: 22,
      percentage: 99,
    },
    students: 46,
    status: "complete",
  },
];

const StudentAvatars = ({ count }: { count: number }) => {
  const avatarColors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-pink-500",
  ];

  return (
    <div className="flex items-center">
      <div className="flex -space-x-1">
        {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
          <Avatar key={i} className="h-6 w-6 border-2 border-white">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className={`${avatarColors[i]} text-white text-xs`}>
              {i + 1}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      {count > 3 && (
        <Badge variant="secondary" className="ml-2 h-6 text-xs">
          +{count - 3}
        </Badge>
      )}
    </div>
  );
};

const CourseTable = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Course
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Teacher
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Duration
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Progress
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Students
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <span className="font-medium text-gray-900">
                    {course.title}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={course.teacher.avatar} />
                      <AvatarFallback className="bg-gray-200 text-gray-600">
                        {course.teacher.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-900">
                      {course.teacher.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-600">
                    {course.duration}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>
                        {course.progress.completed}/{course.progress.total}
                      </span>
                      <span>({course.progress.percentage}%)</span>
                    </div>
                    <Progress
                      value={course.progress.percentage}
                      className="h-2 w-24"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <StudentAvatars count={course.students} />
                </td>
                <td className="py-4 px-6">
                  <Button
                    variant={
                      course.status === "complete" ? "default" : "default"
                    }
                    size="sm"
                    className={
                      course.status === "complete"
                        ? "bg-green-600 hover:bg-green-700"
                        : ""
                    }
                  >
                    {course.status === "complete" ? "Complete" : "Continue"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center py-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" disabled>
            &lt;
          </Button>
          <Button variant="default" size="sm" className="bg-blue-600">
            1
          </Button>
          <Button variant="ghost" size="sm">
            2
          </Button>
          <Button variant="ghost" size="sm">
            3
          </Button>
          <span className="text-gray-400">...</span>
          <Button variant="ghost" size="sm">
            8
          </Button>
          <Button variant="ghost" size="sm">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
