import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    loginUser({
      email: form.email,
    });

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Welcome Back 👋</h1>
        <p>Login to your fintech dashboard</p>

        <form onSubmit={handleLogin} className="auth-form">

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

          <button type="submit">Login</button>

        </form>

       <div className="auth-switch">
  <p>Don't have an account?</p>

  <span onClick={() => navigate("/signup")}>
    Sign up
  </span>
</div>
      </div>
    </div>
  );
};

export default Login;