export default function ProgressBar({ total, completed }) {
  const percent = Math.round((completed / total) * 100);
  return (
    <div className="progress-bar">
      <div className="bar" style={{ width: `${percent}%` }}>{percent}%</div>
    </div>
  );
}