import React from "react";
import "../styles/pages.css";

function Doctors() {
  const doctors = [
    { id: 1, name: "Dr. Asha Sharma", department: "Cardiology", experience: "10 Years" ,Image:"https://media.istockphoto.com/id/1468678624/photo/nurse-hospital-employee-and-portrait-of-black-man-in-a-healthcare-wellness-and-clinic-feeling.jpg?s=612x612&w=0&k=20&c=AGQPyeEitUPVm3ud_h5_yVX4NKY9mVyXbFf50ZIEtQI="},
    { id: 2, name: "Dr. Ramesh Patel", department: "Orthopedics", experience: "8 Years",Image: "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE="},
    { id: 3, name: "Dr. Sneha Rao", department: "Neurology", experience: "12 Years",Image:"https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=" },
    { id: 4, name: "Dr. Vikram Menon", department: "Pediatrics", experience: "6 Years" ,Image:"https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg"},
  ];

  return (
    <div className="page">
      <h1 className="doctor">Our Doctors</h1>
      <p className="pp">Meet our expert team of medical professionals.</p>
      <div className="cards-container">
        {doctors.map((doc) => (
          <div key={doc.id} className="card">
            <img src={doc.Image} alt="no found"/>
            <h3>{doc.name}</h3>
            <p><strong>Department:</strong> {doc.department}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
