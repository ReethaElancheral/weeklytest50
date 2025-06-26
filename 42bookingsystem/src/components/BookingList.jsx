function BookingList({ appointments }) {
  if (appointments.length === 0) {
    return <p>No appointments booked yet.</p>;
  }

  return (
    <div className="booking-list">
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map(({ id, name, date, time }) => (
          <li key={id} className="booking-item">
            <div>
              <strong>{name}</strong> — {date} at {time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;