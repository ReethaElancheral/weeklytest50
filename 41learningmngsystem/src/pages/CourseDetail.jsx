import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import Quiz from "../components/Quiz";
import ProgressBar from "../components/ProgressBar";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const progress = JSON.parse(localStorage.getItem(`${id}-progress`) || "0");

  const markCompleted = () => {
    const updated = Math.min(progress + 1, course.lessons.length);
    localStorage.setItem(`${id}-progress`, JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <ProgressBar total={course.lessons.length} completed={progress} />

      <ul>
        {course.lessons.map((lesson, index) => (
          <li key={index}>
            {index < progress ? "✅ " : ""} {lesson}
          </li>
        ))}
      </ul>

      {progress < course.lessons.length && (
        <button onClick={markCompleted}>Mark Next Lesson Complete</button>
      )}

      <h3>Quiz</h3>
      <Quiz questions={course.quiz} />
    </div>
  );
}