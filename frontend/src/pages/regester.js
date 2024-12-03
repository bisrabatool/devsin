import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";

const RegisterForm = () => {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between Signup and Login
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData); // Removed response
      toast.success("Registration successful! You can now log in.");
      setFormData({ name: "", email: "", password: "" }); // Reset form
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data); // Verify the token in the response
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <h2>{isSignup ? "Signup" : "Login"}</h2>
        <form onSubmit={isSignup ? handleRegister : handleLogin}>
          {isSignup && (
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <p className="toggle-form">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="toggle-button"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
      </div>
    </div>
  );
};

export default RegisterForm;
