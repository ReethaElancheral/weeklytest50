import { useNotifications } from "../data/dummyData.jsx";

export default function Notification() {
  const { notifications, markRead } = useNotifications();

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        {notifications.map(({ id, message, read }) => (
          <div 
            key={id} 
            className={`notification ${read ? "read" : "unread"}`}
            onClick={() => markRead(id)}
            title="Click to mark as read"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
