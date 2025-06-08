import { TrendingUp, TrendingDown, Award, Target } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const mockResults = [
  {
    course: "Monetary Policy & Banking",
    grade: "A",
    score: 92,
    progress: 85,
    trend: "up",
    status: "In Progress",
  },
  {
    course: "International Economics",
    grade: "B+",
    score: 87,
    progress: 72,
    trend: "up",
    status: "In Progress",
  },
  {
    course: "Behavioral Economics",
    grade: "B",
    score: 83,
    progress: 45,
    trend: "down",
    status: "In Progress",
  },
  {
    course: "Marketing Strategy",
    grade: "A+",
    score: 96,
    progress: 100,
    trend: "up",
    status: "Completed",
  },
];

const Results = () => {
  const overallGPA = 3.7;
  const completedCourses = 1;
  const totalCourses = 4;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Results</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallGPA}</div>
            <p className="text-xs text-muted-foreground">
              +0.2 from last semester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Course Completion
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {completedCourses}/{totalCourses}
            </div>
            <Progress
              value={(completedCourses / totalCourses) * 100}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.5%</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Course Results */}
      <Card>
        <CardHeader>
          <CardTitle>Course Performance</CardTitle>
          <CardDescription>
            Your academic performance across all enrolled courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockResults.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-gray-900">
                      {result.course}
                    </h3>
                    <Badge
                      variant={
                        result.status === "Completed" ? "default" : "secondary"
                      }
                      className={
                        result.status === "Completed" ? "bg-green-600" : ""
                      }
                    >
                      {result.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Progress: {result.progress}%</span>
                    <Progress value={result.progress} className="w-24 h-2" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      {result.grade}
                    </div>
                    <div className="text-sm text-gray-600">{result.score}%</div>
                  </div>
                  {result.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;
