import { Download, Award, Calendar, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockCertificates = [
  {
    id: "1",
    title: "Marketing Strategy Fundamentals",
    issueDate: "2024-01-15",
    instructor: "Rory Todd",
    grade: "A+",
    credentialId: "EduMate-MS-2024-001",
    status: "issued",
  },
  {
    id: "2",
    title: "Advanced Economics",
    issueDate: "2023-12-10",
    instructor: "Tiffany Fowler",
    grade: "A",
    credentialId: "EduMate-AE-2023-089",
    status: "issued",
  },
  {
    id: "3",
    title: "Monetary Policy & Banking",
    issueDate: "Expected: 2024-03-20",
    instructor: "Ida Aguirre",
    grade: "Pending",
    credentialId: "Pending",
    status: "pending",
  },
];

const Certificate = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Certificates</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Award className="h-4 w-4" />
          <span>
            {mockCertificates.filter((c) => c.status === "issued").length}{" "}
            certificates earned
          </span>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Certificates
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCertificates.filter((c) => c.status === "issued").length}
            </div>
            <p className="text-xs text-muted-foreground">Completed courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCertificates.filter((c) => c.status === "pending").length}
            </div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">A+</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
      </div>

      {/* Certificates List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Your Certificates
        </h2>

        {mockCertificates.map((certificate) => (
          <Card
            key={certificate.id}
            className={`${certificate.status === "pending" ? "opacity-60" : ""}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{certificate.title}</CardTitle>
                  <CardDescription>
                    Instructor: {certificate.instructor}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    certificate.status === "issued" ? "default" : "secondary"
                  }
                  className={
                    certificate.status === "issued" ? "bg-green-600" : ""
                  }
                >
                  {certificate.status === "issued" ? "Issued" : "Pending"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Issue Date: {certificate.issueDate}</span>
                    <span>Grade: {certificate.grade}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Credential ID: {certificate.credentialId}
                  </div>
                </div>
                {certificate.status === "issued" && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
