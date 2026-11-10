import { HeroSection } from "@/components/ui/Home/HeroSection";
import { InstructorSection } from "@/components/ui/Home/InstructorSection";
import { StatisticsSection } from "@/components/ui/Home/StatisticsSection";
import { StudentSection } from "@/components/ui/Home/StudentSection";

export default function Home() {
  return (
    <main className="mx-auto container">
      <HeroSection />
      <StatisticsSection />
      <InstructorSection />
      <StudentSection />
    </main>
  );
}
