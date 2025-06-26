import { Link } from "react-router-dom";
export default function PollCard({ poll }) {
  return (
    <div className="card">
      <h3>{poll.question}</h3>
      <Link to={`/polls/${poll.id}`}>Vote Now</Link>
    </div>
  );
}
