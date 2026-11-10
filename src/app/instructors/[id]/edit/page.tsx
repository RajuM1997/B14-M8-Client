import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const instructors = [
  {
    _id: "1",
    avatar: "NJ",
    students: 250,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    phone: "+880 1912-345678",
    expertise: "Python Programming",
    experience: "3+ Years",
    designation: "Python Instructor",
    bio: "Python programmer who loves teaching programming fundamentals.",
  },
  {
    _id: "2",
    avatar: "RA",
    students: 320,
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    phone: "+880 1712-345678",
    expertise: "JavaScript",
    experience: "5+ Years",
    designation: "JavaScript Instructor",
    bio: "Passionate JavaScript developer focused on modern web technologies.",
  },
  {
    _id: "3",
    avatar: "FS",
    students: 180,
    name: "Fatima Siddika",
    email: "fatima@example.com",
    phone: "+880 1812-345678",
    expertise: "React.js",
    experience: "4+ Years",
    designation: "Frontend Instructor",
    bio: "Frontend developer passionate about building interactive user interfaces.",
  },
  {
    _id: "4",
    avatar: "MK",
    students: 410,
    name: "Mehedi Hasan",
    email: "mehedi@example.com",
    phone: "+880 1612-345678",
    expertise: "Node.js & Express",
    experience: "6+ Years",
    designation: "Backend Instructor",
    bio: "Backend engineer who enjoys teaching scalable server-side development.",
  },
  {
    _id: "5",
    avatar: "SA",
    students: 290,
    name: "Sadia Akter",
    email: "sadia@example.com",
    phone: "+880 1913-456789",
    expertise: "Next.js",
    experience: "3+ Years",
    designation: "Full Stack Instructor",
    bio: "Full stack developer specializing in modern React and Next.js applications.",
  },
  {
    _id: "6",
    avatar: "TI",
    students: 150,
    name: "Tanvir Islam",
    email: "tanvir@example.com",
    phone: "+880 1713-456789",
    expertise: "MongoDB",
    experience: "4+ Years",
    designation: "Database Instructor",
    bio: "Database enthusiast helping students understand database design and management.",
  },
  {
    _id: "7",
    avatar: "NK",
    students: 220,
    name: "Nabila Khan",
    email: "nabila@example.com",
    phone: "+880 1813-456789",
    expertise: "TypeScript",
    experience: "3+ Years",
    designation: "TypeScript Instructor",
    bio: "TypeScript developer focused on writing clean and maintainable code.",
  },
  {
    _id: "8",
    avatar: "AR",
    students: 350,
    name: "Abdullah Rahman",
    email: "abdullah@example.com",
    phone: "+880 1613-456789",
    expertise: "Django",
    experience: "5+ Years",
    designation: "Python Backend Instructor",
    bio: "Backend developer experienced in building robust applications with Django.",
  },
  {
    _id: "9",
    avatar: "SM",
    students: 190,
    name: "Shakib Mahmud",
    email: "shakib@example.com",
    phone: "+880 1914-567890",
    expertise: "HTML, CSS & Tailwind",
    experience: "2+ Years",
    designation: "Web Design Instructor",
    bio: "Creative web designer passionate about responsive and accessible interfaces.",
  },
  {
    _id: "10",
    avatar: "FR",
    students: 275,
    name: "Farhana Rahman",
    email: "farhana@example.com",
    phone: "+880 1714-567890",
    expertise: "C & C++",
    experience: "4+ Years",
    designation: "Programming Instructor",
    bio: "Programming educator focused on problem-solving and computer science fundamentals.",
  },
];

export default async function EditInstructorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const instructor = instructors.find((item) => item._id === id);

  if (!instructor) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Instructor Not Found</h2>
          <Button className="mt-4">
            <Link href="/instructors">Back to Instructors</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" className="mb-6">
          <Link href={`/instructors/${id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Edit Instructor</CardTitle>
            <CardDescription>
              Update instructor information below.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" defaultValue={instructor.name} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={instructor.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    defaultValue={instructor.phone}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expertise">Expertise</Label>
                  <Input
                    id="expertise"
                    name="expertise"
                    defaultValue={instructor.expertise}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    defaultValue={instructor.experience}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    name="designation"
                    defaultValue={instructor.designation}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="students">Students</Label>
                  <Input
                    id="students"
                    name="students"
                    defaultValue={instructor.students}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About Instructor</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  defaultValue={instructor.bio}
                  rows={5}
                />
              </div>

              <div className="flex justify-end gap-3 border-t pt-5">
                <Button variant="outline">
                  <Link href={`/instructors/${id}`}>Cancel</Link>
                </Button>

                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
