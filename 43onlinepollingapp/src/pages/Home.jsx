import { polls } from "../data/polls";
import PollCard from "../components/PollCard";

export default function Home() {
  return (
    <div className="home">
      <h2>Available Polls</h2>
      <div className="poll-list">
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
}