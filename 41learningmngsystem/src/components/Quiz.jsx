import { useState } from "react";

export default function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[index];

  const check = (option) => {
    if (option === current.answer) setScore(score + 1);
    const next = index + 1;
    if (next < questions.length) setIndex(next);
    else setDone(true);
  };

  return done ? (
    <p>✅ You scored {score} / {questions.length}</p>
  ) : (
    <div className="quiz">
      <p><strong>{current.question}</strong></p>
      {current.options.map((opt) => (
        <button key={opt} onClick={() => check(opt)}>{opt}</button>
      ))}
    </div>
  );
}
