import React from "react";
import "../styles/pages.css";

function Patients() {
  const patients = [
    { id: 1, name: "Rajesh Kumar", disease: "Fever", doctor: "Dr. Sneha Rao" },
    { id: 2, name: "Priya Singh", disease: "Fracture", doctor: "Dr. Ramesh Patel" },
    { id: 3, name: "Manoj Das", disease: "Chest Pain", doctor: "Dr. Asha Sharma" },
  ];

  return (
    <div className="page">
      <h1>Patients List</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Consulting Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.disease}</td>
              <td>{p.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
