export default function PollResults({ poll, votes }) {
  const total = votes.reduce((a, b) => a + b, 0);
  return (
    <div className="poll-results">
      <h2>Results: {poll.question}</h2>
      <ul>
        {poll.options.map((opt, idx) => {
          const count = votes[idx];
          const percent = total ? Math.round((count / total) * 100) : 0;
          return (
            <li key={idx}>
              <span>{opt}</span>
              <div className="progress">
                <div className="fill" style={{ width: `${percent}%` }} />
              </div>
              <span>{percent}% ({count})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
