import { useState, useEffect } from "react";

export default function Admin() {
  const [appointments, setAppointments] = useState(() => {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(appointments.filter((a) => a.id !== id));
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="container">
        <h2>Admin Panel</h2>
        <p>No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Admin Panel - Manage Appointments</h2>
      <ul className="admin-list">
        {appointments.map(({ id, name, date, time }) => (
          <li key={id} className="admin-item">
            <div>
              <strong>{name}</strong> — {date} at {time}
            </div>
            <button className="delete-btn" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
