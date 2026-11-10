import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-linear-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto grid min-h-112.5 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Welcome to LearnHub
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Learn New Skills.
            <span className="text-indigo-600"> Build Your Future.</span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-600">
            Connect with experienced instructors, explore courses and become
            part of our learning community.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>
              <Link href="/instructors">Explore Instructors</Link>
            </Button>

            <Button variant="outline">
              <Link href="/students">Our Students</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-3xl bg-indigo-100 p-10 text-center">
            <div className="text-8xl">🎓</div>
            <h3 className="mt-4 text-2xl font-bold">Start Learning Today!</h3>
            <p className="mt-2 text-gray-600">Knowledge is your superpower.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
