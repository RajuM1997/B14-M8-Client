import React from "react";
import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Button, Input } from "@base-ui/react";
import { Textarea } from "./ui/textarea";
import { Link, UserPlus } from "lucide-react";

const InstructorForm = () => {
  return (
    <CardContent>
      <form className="space-y-6" onSubmit={handleInstructor}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input name="name" id="name" placeholder="Enter instructor name" />
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
            <Input name="phone" id="phone" placeholder="+880 1XXXXXXXXX" />
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
  );
};

export default InstructorForm;
