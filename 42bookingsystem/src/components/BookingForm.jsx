import { useState, useEffect } from "react";

export default function BookingForm({ onBook, appointments }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  // Define possible time slots (e.g., every 30 min from 9am to 5pm)
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  ];

  // Update available time slots based on selected date and existing appointments
  useEffect(() => {
    if (!date) {
      setAvailableTimes(timeSlots);
      setTime("");
      return;
    }
    const bookedTimes = appointments
      .filter((a) => a.date === date)
      .map((a) => a.time);

    const filtered = timeSlots.filter((t) => !bookedTimes.includes(t));
    setAvailableTimes(filtered);
    if (!filtered.includes(time)) {
      setTime("");
    }
  }, [date, appointments]);

  const validate = () => {
    if (!name.trim() || !date || !time) {
      setError("Please fill all fields.");
      return false;
    }
    const selectedDateTime = new Date(`${date}T${time}:00`);
    const now = new Date();
    if (selectedDateTime <= now) {
      setError("You cannot book an appointment in the past.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newAppointment = {
      id: Date.now().toString(),
      name: name.trim(),
      date,
      time,
    };

    onBook(newAppointment);
    setName("");
    setDate("");
    setTime("");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>

      <label>
        Name
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </label>

      <label>
        Time
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Select a time</option>
          {availableTimes.length === 0 && <option disabled>No available slots</option>}
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={availableTimes.length === 0}>
        Book Appointment
      </button>
    </form>
  );
}
