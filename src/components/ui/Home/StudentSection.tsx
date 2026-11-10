import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const students = [
  {
    id: "1",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    course: "Full Stack Development",
    avatar: "RA",
  },
  {
    id: "2",
    name: "Karim Hasan",
    email: "karim@example.com",
    course: "Frontend Development",
    avatar: "KH",
  },
  {
    id: "3",
    name: "Sadia Islam",
    email: "sadia@example.com",
    course: "Python Programming",
    avatar: "SI",
  },
];

export function StudentSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Our Latest Students</h2>
            <p className="mt-2 text-gray-500">Meet our learning community.</p>
          </div>

          <Button variant="outline">View All</Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <Card key={student.id}>
              <CardContent className="flex items-center gap-4 p-6">
                <Avatar className="h-14 w-14">
                  <AvatarFallback className="bg-purple-100 text-purple-700">
                    {student.avatar}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{student.name}</h3>

                  <p className="truncate text-sm text-gray-500">
                    {student.email}
                  </p>

                  <Badge variant="outline" className="mt-2">
                    {student.course}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
