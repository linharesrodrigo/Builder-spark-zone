import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FilterTabs from "@/components/FilterTabs";
import CourseTable from "@/components/CourseTable";
import CourseCard from "@/components/CourseCard";

const recommendedCourses = [
  {
    title: "Economics of Innovation & Technology",
    description:
      "This course examines how technological advancements influence economic growth, productivity, and market dynamics in the modern economy.",
    category: "Economics",
    lessons: 46,
    categoryColor: "bg-blue-500",
  },
  {
    title: "A Global History: About Empires",
    description:
      "This course explores the rise, expansion, and decline of major empires throughout history and their lasting impact on world civilization.",
    category: "History",
    lessons: 25,
    categoryColor: "bg-orange-500",
  },
  {
    title: "Advanced Mathematical Concepts",
    description:
      "This course covers advanced mathematical concepts, including calculus, linear algebra, and statistical analysis for higher education.",
    category: "Math",
    lessons: 34,
    categoryColor: "bg-green-500",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("in-progress");
  const [sortBy, setSortBy] = useState("Duration");

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Categories</DropdownMenuItem>
            <DropdownMenuItem>Economics</DropdownMenuItem>
            <DropdownMenuItem>History</DropdownMenuItem>
            <DropdownMenuItem>Mathematics</DropdownMenuItem>
            <DropdownMenuItem>Marketing</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                {sortBy}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortBy("Duration")}>
                Duration
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Progress")}>
                Progress
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Students")}>
                Students
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Title")}>
                Title
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Course Table */}
      <CourseTable />

      {/* Recommended Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Recommended for you
          </h2>
          <Button variant="link" className="text-blue-600 hover:text-blue-700">
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
