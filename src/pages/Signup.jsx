import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import "../styles/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    loginUser({
      name: form.name,
      email: form.email,
    });

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Create Account 🚀</h1>
        <p>Join the fintech platform</p>

        <form onSubmit={handleSignup} className="auth-form">

          <input
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>

        </form>

        <p className="switch">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login</span>
        </p>

      </div>
    </div>
  );
};

export default Signup;