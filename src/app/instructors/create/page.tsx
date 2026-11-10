"use client";
import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function AddInstructorPage() {
  const handleInstructor = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const instructor = Object.fromEntries(formData.entries()) as {
      email: string;
    };
    const result = await fetch("http://localhost:8800/instructor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instructor),
    });
    console.log(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" className="mb-6">
          <Link href="/instructors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Instructors
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <UserPlus size={25} />
            </div>

            <CardTitle className="text-2xl">Add New Instructor</CardTitle>

            <CardDescription>
              Fill in the information below to add a new instructor.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6" onSubmit={handleInstructor}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    name="name"
                    id="name"
                    placeholder="Enter instructor name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    name="phone"
                    id="phone"
                    placeholder="+880 1XXXXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expertise">Expertise</Label>
                  <Input
                    name="expertise"
                    id="expertise"
                    placeholder="e.g. Full Stack Development"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    name="experience"
                    id="experience"
                    placeholder="e.g. 5 Years"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    name="designation"
                    id="designation"
                    placeholder="e.g. Senior Instructor"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="students">Students</Label>
                  <Input id="students" name="students" placeholder="200" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About Instructor</Label>
                <Textarea
                  name="bio"
                  id="bio"
                  placeholder="Write something about the instructor..."
                  rows={4}
                />
              </div>

              <div className="flex justify-end gap-3 border-t pt-5">
                <Button variant="outline">
                  <Link href="/instructors">Cancel</Link>
                </Button>

                <Button type="submit">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Instructor
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
