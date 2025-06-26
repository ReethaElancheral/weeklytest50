export default function Dashboard({ role }) {
  return (
    <section className="card-grid">
      <div className="card">
        <h3>📁 Projects</h3>
        <p>5 active projects</p>
      </div>
      <div className="card">
        <h3>👥 Team Members</h3>
        <p>12 total users</p>
      </div>
      {role === "Admin" && (
        <div className="card">
          <h3>🛠 Admin Tools</h3>
          <p>Manage roles, permissions, and audits</p>
        </div>
      )}
    </section>
  );
}
