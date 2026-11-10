import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, UserCheck } from "lucide-react";

const statistics = [
  {
    title: "Total Students",
    value: "2,500+",
    icon: Users,
  },
  {
    title: "Instructors",
    value: "120+",
    icon: GraduationCap,
  },
  {
    title: "Courses",
    value: "85+",
    icon: BookOpen,
  },
  {
    title: "Active Students",
    value: "1,800+",
    icon: UserCheck,
  },
];

export function StatisticsSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((item) => (
          <Card key={item.title}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
                <item.icon size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h3 className="text-2xl font-bold">{item.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
