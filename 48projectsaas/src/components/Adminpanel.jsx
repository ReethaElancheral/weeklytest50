import { dummyUsers, dummyRoles } from "../data/dummyData.jsx";

export default function AdminPanel() {
  return (
    <div className="admin-panel">
      <h3>Users & Roles</h3>
      {dummyUsers.map(user => (
        <div key={user.id} className="user-card">
          <h4>{user.name}</h4>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Permissions:</strong></p>
          <ul>
            {dummyRoles[user.role]?.map((perm, i) => <li key={i}>{perm}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
