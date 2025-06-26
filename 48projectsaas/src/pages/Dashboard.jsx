import { dummyTasks, dummyTeams, dummyUsers } from "../data/dummyData.jsx";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Teams</h3>
          <p>{dummyTeams.length}</p>
        </div>
        <div className="card">
          <h3>Total Tasks</h3>
          <p>{dummyTasks.length}</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>{dummyUsers.length}</p>
        </div>
      </div>
      <h3>Recent Notifications</h3>
      <ul>
        <li>Task "Design login page" due in 3 days</li>
        <li>New team "Gamma" created</li>
        <li>User "John" added as Member</li>
      </ul>
    </div>
  );
}
