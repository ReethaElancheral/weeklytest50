import { useNotifications } from "../data/dummyData.jsx";

export default function Header() {
  const { notifications } = useNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="header">
      <h1>Project Management Board</h1>
      <div className="notification-icon">
        🔔
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </div>
    </header>
  );
}
