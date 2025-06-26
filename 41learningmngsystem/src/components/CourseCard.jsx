import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <Link to={`/courses/${course.id}`}>View Course</Link>
    </div>
  );
}
