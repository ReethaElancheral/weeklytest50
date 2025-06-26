export default function ConfirmModal({ appointment, onConfirm, onCancel }) {
  if (!appointment) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Confirm Your Appointment</h3>
        <p>
          <strong>Name:</strong> {appointment.name}
        </p>
        <p>
          <strong>Date:</strong> {appointment.date}
        </p>
        <p>
          <strong>Time:</strong> {appointment.time}
        </p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
