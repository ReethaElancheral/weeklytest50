import { useState } from "react";
import { dummyTasks } from "../data/dummyData.jsx";

export default function TaskList() {
  const [filter, setFilter] = useState("All");

  const filteredTasks = filter === "All" ? dummyTasks : dummyTasks.filter(t => t.status === filter);

  return (
    <div>
      <h3>Tasks</h3>
      <label>
        Filter by status: 
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </label>
      <div className="task-list">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-card">
            <h4>{task.title}</h4>
            <p><strong>Assigned To:</strong> {task.assignedTo}</p>
            <p><strong>Team:</strong> {task.team}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
