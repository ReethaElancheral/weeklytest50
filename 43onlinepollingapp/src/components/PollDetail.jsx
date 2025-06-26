export default function PollDetail({ poll, onVote }) {
  return (
    <div className="poll-detail">
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((opt, idx) => (
          <li key={idx}>
            <button onClick={() => onVote(idx)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}