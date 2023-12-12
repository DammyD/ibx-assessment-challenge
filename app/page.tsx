import { Courses, Hero, Instructors, TopCourses, YourCourses } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Courses />
      <Instructors />
      <YourCourses />
      <TopCourses />
    </main>
  );
}
