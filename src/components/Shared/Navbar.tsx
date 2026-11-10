"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Instructors", href: "/instructors" },
  { name: "Students", href: "/students" },
  { name: "Courses", href: "/courses" },
];

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const handleSignout = () => {
    authClient.signOut();
  };
  console.log(session);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Button onClick={handleSignout}>Signout a</Button>
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-indigo-600 p-2 text-white">
            <GraduationCap size={25} />
          </div>
          <span className="text-2xl font-bold text-gray-900">
            Learn<span className="text-indigo-600">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant={"ghost"}>
            <Link href="/login">Login</Link>
          </Button>

          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              }
            />

            <SheetContent side="right" className="w-70">
              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-indigo-600"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 border-t pt-5">
                  <Button variant="outline">
                    <Link href="/login">Login</Link>
                  </Button>

                  <Button>
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
