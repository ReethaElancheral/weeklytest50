import { dummyTeams } from "../data/dummyData.jsx";

export default function TeamList() {
  return (
    <div className="team-list">
      {dummyTeams.map(team => (
        <div key={team.id} className="team-card">
          <h3>{team.name}</h3>
          <p>{team.description}</p>
          <strong>Members:</strong> {team.members.join(", ")}
        </div>
      ))}
    </div>
  );
}
