import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New task assigned to you", read: false },
    { id: 2, message: "Team 'Alpha' created", read: false },
  ]);

  const markRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <NotificationContext.Provider value={{ notifications, markRead }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);

export const dummyTeams = [
  {
    id: "team-1",
    name: "Alpha",
    members: ["Alice", "Bob", "Charlie"],
    description: "Frontend Team"
  },
  {
    id: "team-2",
    name: "Beta",
    members: ["Dave", "Eve"],
    description: "Backend Team"
  },
];

export const dummyTasks = [
  {
    id: "task-1",
    title: "Design login page",
    assignedTo: "Alice",
    status: "In Progress",
    team: "Alpha",
    dueDate: "2025-07-15",
  },
  {
    id: "task-2",
    title: "Implement API",
    assignedTo: "Eve",
    status: "Pending",
    team: "Beta",
    dueDate: "2025-07-20",
  },
  {
    id: "task-3",
    title: "Setup DB schema",
    assignedTo: "Dave",
    status: "Completed",
    team: "Beta",
    dueDate: "2025-07-10",
  },
];

export const dummyUsers = [
  { id: "user-1", name: "Alice", role: "Member" },
  { id: "user-2", name: "Bob", role: "Member" },
  { id: "user-3", name: "Charlie", role: "Member" },
  { id: "user-4", name: "Dave", role: "Member" },
  { id: "user-5", name: "Eve", role: "Admin" },
];

export const dummyRoles = {
  Admin: ["Create Team", "Assign Tasks", "Manage Users"],
  Member: ["View Tasks", "Update Task Status"],
};
