import { useParams } from "react-router-dom";
import PollDetail from "../components/PollDetail";
import PollResults from "../components/PollResults";
import { polls } from "../data/polls";
import { useState, useEffect } from "react";

export default function PollPage() {
  const { id } = useParams();
  const poll = polls.find((p) => p.id === id);

  const [votes, setVotes] = useState(() => {
    const stored = localStorage.getItem(`poll-${id}`);
    return stored ? JSON.parse(stored) : Array(poll.options.length).fill(0);
  });
  const [voted, setVoted] = useState(() => !!localStorage.getItem(`voted-${id}`));

  useEffect(() => {
    localStorage.setItem(`poll-${id}`, JSON.stringify(votes));
  }, [votes, id]);

  const handleVote = (index) => {
    const updated = [...votes];
    updated[index]++;
    setVotes(updated);
    localStorage.setItem(`voted-${id}`, "true");
    setVoted(true);
  };

  return (
    <div className="poll-page">
      {!voted ? (
        <PollDetail poll={poll} onVote={handleVote} />
      ) : (
        <PollResults poll={poll} votes={votes} />
      )}
    </div>
  );
}
