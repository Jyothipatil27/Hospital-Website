import React from "react";
import "../styles/pages.css";

function Departments() {
  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "Emergency Medicine",
    "Madicine",
     "dentistry",
     "ENT"
  ];

  return (
    <div className="page">
      <h1 className="head">Hospital Departments</h1>
      <p>Our hospital provides specialized services in multiple departments.</p>
      <div className="carbody">

       <div className="cardss">
        <p className="pap">Cardiology</p>
        
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rBr4h58whrzsilOb5cq72KcMqGLcxdZlQQ&s" alt="Not found"/>
     </div>

     <div className="cardss">
      <p className="pap">Neurology</p>
      <img src="https://vshhospital.com/media/departments/Nurology.jpg" alt="not found" />

     </div>

     <div className="cardss">
      <p className="pap">Orthopedics</p>
      <img src="https://ssimsb.ac.in/public//uploads/course/1655211147.jpg" alt="not found" />

     </div>

     <div className="cardss">
      <p className="pap">Pediatrics</p>
      <img src="https://www.jjmmc.org/departments/pediatrics/images/gallery/1.jpg" alt="not found" />

     </div>

     <div className="cardss">
      <p className="pap">Gynecology</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0Umr6fbQOCfDqf9-dqMaP0Now4Oqvl3_7g&s" alt="not found" />

     </div>
     </div>
    
     <div className="Carsbody2">
       

     <div className="cardss">
      <p className="pap">Dermatology</p>
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHfmD6IkM19vYE3S5TiSRMJ65cJS71roVaw&s" alt="not found" />

     </div>

     <div className="cardss">
      <p className="pap">Emergency ward</p>
      
      <img src="https://news.weill.cornell.edu/sites/default/files/story_featured_images/rahul_sharma_md_emergency_medicine_chief_21_by_john_abbott_sm.jpg" alt="not found" />

     </div>

     <div className="cardss">
      <p className="pap">Medicine</p>
      <img src="https://productimages.withfloats.com/serviceimages/tile/648473485a64f64262dae428image-1LL" alt="not found" />

     </div>

     <div className="cardss">
      <p className="pap">dentistry</p>
      <img src="https://owaisihospital.com/wp-content/uploads/2022/12/Dental-Dept-scaled-1000x600-1.jpg" alt="not found" />

     </div>

      <div className="cardss">
        <p className="pap">ENT</p>
      <img src="https://www.gmcrajouri.in/adminpanel/files/1120196046173.jpg" alt="not found" />

     </div>

     </div>
    </div>
  );
}

export default Departments;
