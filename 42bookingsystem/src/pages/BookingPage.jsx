import { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import ConfirmModal from "../components/ConfirmModal";

export default function Booking() {
  const [appointments, setAppointments] = useState(() => {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingAppointment, setPendingAppointment] = useState(null);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleBookRequest = (appointment) => {
    setPendingAppointment(appointment);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setAppointments([...appointments, pendingAppointment]);
    setShowConfirm(false);
    setPendingAppointment(null);
  };

  const handleCancelConfirm = () => {
    setShowConfirm(false);
    setPendingAppointment(null);
  };

  return (
    <div className="container">
      <BookingForm onBook={handleBookRequest} appointments={appointments} />
      <BookingList appointments={appointments} />
      {showConfirm && (
        <ConfirmModal
          appointment={pendingAppointment}
          onConfirm={handleConfirm}
          onCancel={handleCancelConfirm}
        />
      )}
    </div>
  );
}
