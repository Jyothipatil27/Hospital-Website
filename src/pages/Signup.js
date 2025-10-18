import React, { useState } from "react";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <span onClick={() => navigate("/")}>Login</span></p>
    </div>
  );
}

export default Signup;
