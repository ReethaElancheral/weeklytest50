import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <div className="home">
      <h2>Available Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}