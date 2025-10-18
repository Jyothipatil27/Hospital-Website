import React, { useState } from "react";
import "../styles/form.css";

function Appointments() {
  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [appointments, setAppointments] = useState([]);

  const handleBook = () => {
    if (name && doctor && date) {
      setAppointments([...appointments, { name, doctor, date }]);
      setName("");
      setDoctor("");
      setDate("");
      alert("Appointment booked successfully!");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="page">
      <h1>Book an Appointment</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleBook}>Book Appointment</button>
      </div>

      <h2>Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={index}>
                <td>{a.name}</td>
                <td>{a.doctor}</td>
                <td>{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Appointments;
