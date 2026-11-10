import Link from "next/link";
import { Search, Mail, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function InstructorsPage() {
  const token = await auth.api.getToken({ headers: await headers() });
  console.log(token);

  const res = await fetch("http://localhost:8800/instructor", {
    headers: {
      authorization: `Bearer ${token.token}`,
    },
  });
  const data = await res.json();
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Our Instructors</h1>
            <p className="mt-2 text-gray-500">
              Learn from experienced industry professionals.
            </p>
          </div>

          <Button>
            <Link href="/instructors/create">+ Add Instructor</Link>
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search instructors..."
              className="bg-white pl-10"
            />
          </div>
        </div>

        {/* Instructor Count */}
        <div className="mb-6">
          <Badge variant="secondary">Total Instructors: {data.length}</Badge>
        </div>

        {/* Instructor Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((instructor) => (
            <Card
              key={instructor._id}
              className="bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-purple-100 text-lg font-semibold text-purple-700">
                      {instructor.avatar}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-lg font-semibold">{instructor.name}</h3>
                    <Badge variant="secondary" className="mt-1">
                      Instructor
                    </Badge>
                  </div>
                </div>

                <p className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                  <Mail size={15} />
                  {instructor.email}
                </p>

                <div className="mt-5 space-y-3 border-t pt-4">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase size={16} className="text-indigo-600" />
                    {instructor.experience}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} className="text-indigo-600" />
                    {instructor.students} Students
                  </p>
                </div>

                <div className="mt-4">
                  <p className="mb-2 text-xs text-gray-500">EXPERTISE</p>
                  <Badge variant="outline">{instructor.expertise}</Badge>
                </div>

                <Button variant="outline" className="mt-6 w-full">
                  <Link href={`/instructors/${instructor._id}`}>
                    View Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
