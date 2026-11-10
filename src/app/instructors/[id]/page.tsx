import Link from "next/link";
import { ArrowLeft, Mail, Phone, Briefcase, Users, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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

export default async function InstructorDetailsPage({
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
      <div className="mx-auto max-w-5xl">
        <Button variant="ghost" className="mb-6">
          <Link href="/instructors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Instructors
          </Link>
        </Button>

        {/* Profile Header */}
        <Card className="overflow-hidden">
          <div className="h-36 bg-linear-to-r from-indigo-600 to-purple-600" />

          <CardContent className="relative px-6 pb-8">
            <div className="-mt-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <Avatar className="h-28 w-28 border-4 border-white">
                  <AvatarFallback className="bg-indigo-100 text-3xl font-bold text-indigo-700">
                    {instructor.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="pb-1">
                  <h1 className="text-2xl font-bold">{instructor.name}</h1>
                  <p className="text-gray-500">{instructor.designation}</p>
                  <Badge className="mt-2">{instructor.expertise}</Badge>
                </div>
              </div>

              <Button>
                <Link href={`/instructors/${id}/edit`}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Total Students",
              value: instructor.students,
              icon: Users,
            },

            {
              title: "Experience",
              value: instructor.experience,
              icon: Briefcase,
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h3 className="text-xl font-bold">{item.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About & Contact */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold">About Instructor</h2>
              <p className="leading-7 text-gray-600">{instructor.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-5 text-xl font-bold">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium">{instructor.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium">{instructor.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Briefcase className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-medium">{instructor.experience}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
