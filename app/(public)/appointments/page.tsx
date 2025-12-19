export default function AppointmentsPage() {
  return (
    <main className="min-h-screen">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Appointments and Booking
      </h1>

      <div className="container">
        <div className="booking-section">
          <a href="/book">
            <button className="book-appointment bg-black text-white px-4 py-2 rounded-lg">
              Book Appointment
            </button>
          </a>
        </div>

        <div className="appointment-list">
          <div className="appointment">
            <h2>Appointment 1</h2>
            <p>Date: 2024-07-01</p>
            <p>Time: 10:00 AM</p>
          </div>

          <div className="appointment">
            <h2>Appointment 2</h2>
            <p>Date: 2024-07-02</p>
            <p>Time: 02:00 PM</p>
          </div>
        </div>
      </div>
    </main>
  );
}
