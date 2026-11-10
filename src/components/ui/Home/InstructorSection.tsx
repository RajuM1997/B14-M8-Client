import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const instructors = [
  {
    id: "1",
    name: "Raju Ahmed",
    email: "raju@example.com",
    expertise: "Full Stack Developer",
    avatar: "RA",
  },
  {
    id: "2",
    name: "Sakib Hasan",
    email: "sakib@example.com",
    expertise: "Frontend Developer",
    avatar: "SH",
  },
  {
    id: "3",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    expertise: "Python Developer",
    avatar: "NJ",
  },
];

export function InstructorSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Meet Our Instructors</h2>
        <p className="mt-2 text-gray-500">Learn from industry experts.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardContent className="flex flex-col items-center p-8 text-center">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-indigo-100 text-xl text-indigo-700">
                  {instructor.avatar}
                </AvatarFallback>
              </Avatar>

              <h3 className="mt-4 text-xl font-semibold">{instructor.name}</h3>

              <p className="mt-1 text-sm text-gray-500">{instructor.email}</p>

              <Badge className="mt-4" variant="secondary">
                {instructor.expertise}
              </Badge>

              <Button variant="outline" className="mt-6 w-full">
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
