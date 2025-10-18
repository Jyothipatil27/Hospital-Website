import React, { useState } from "react";
import "../styles/form.css";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name && message) {
      alert("Thank you for contacting us, " + name + "!");
      setName("");
      setMessage("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>We’re here to help. Send us a message below.</p>
      <div className="form-container">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        ></textarea>
        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
