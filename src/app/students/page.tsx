import Link from "next/link";
import { Search, GraduationCap, Mail, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const students = [
  {
    id: "1",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    course: "Full Stack Development",
    batch: "Batch 12",
    status: "Active",
    avatar: "RA",
  },
  {
    id: "2",
    name: "Karim Hasan",
    email: "karim@example.com",
    course: "Frontend Development",
    batch: "Batch 10",
    status: "Active",
    avatar: "KH",
  },
  {
    id: "3",
    name: "Sadia Islam",
    email: "sadia@example.com",
    course: "Python Programming",
    batch: "Batch 15",
    status: "Active",
    avatar: "SI",
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    course: "Full Stack Development",
    batch: "Batch 11",
    status: "Inactive",
    avatar: "NJ",
  },
  {
    id: "5",
    name: "Tanvir Hasan",
    email: "tanvir@example.com",
    course: "Frontend Development",
    batch: "Batch 14",
    status: "Active",
    avatar: "TH",
  },
  {
    id: "6",
    name: "Mim Akter",
    email: "mim@example.com",
    course: "Python Programming",
    batch: "Batch 13",
    status: "Active",
    avatar: "MA",
  },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Our Students</h1>
            <p className="mt-2 text-gray-500">
              Meet our growing learning community.
            </p>
          </div>

          <Button>
            <Link href="/students/create">+ Add Student</Link>
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8 flex gap-3">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search students..."
              className="bg-white pl-10"
            />
          </div>
        </div>

        {/* Student Count */}
        <div className="mb-6">
          <Badge variant="secondary">Total Students: {students.length}</Badge>
        </div>

        {/* Student Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <Card
              key={student.id}
              className="bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-indigo-100 text-lg font-semibold text-indigo-700">
                      {student.avatar}
                    </AvatarFallback>
                  </Avatar>

                  <Badge
                    variant={
                      student.status === "Active" ? "default" : "secondary"
                    }
                  >
                    {student.status}
                  </Badge>
                </div>

                <h3 className="mt-5 text-xl font-semibold">{student.name}</h3>

                <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <Mail size={15} />
                  {student.email}
                </p>

                <div className="mt-5 space-y-3 border-t pt-4">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen size={16} className="text-indigo-600" />
                    {student.course}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap size={16} className="text-indigo-600" />
                    {student.batch}
                  </p>
                </div>

                <Button variant="outline" className="mt-6 w-full">
                  <Link href={`/students/${student.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
