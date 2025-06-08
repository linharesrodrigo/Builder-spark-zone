import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  lessons: number;
  categoryColor: string;
}

const CourseCard = ({
  title,
  description,
  category,
  lessons,
  categoryColor,
}: CourseCardProps) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant="secondary"
            className={`${categoryColor} text-white text-xs px-2 py-1`}
          >
            {category}
          </Badge>
          <span className="text-sm text-gray-500">{lessons} lessons</span>
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </CardDescription>
        <Button variant="outline" className="w-full">
          Learn more
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
