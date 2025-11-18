import { useState } from "react";
import { useNavigate } from "react-router";
import "./Register.css"; // reuse your existing styling

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();



  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email) return;

    // Store user info in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    setMessage(`Logged in as ${username}`);

    // Optionally navigate to feed page
    setTimeout(() => navigate("/profile"), 500);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: "0.5rem", padding: "0.5rem" }}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "0.5rem", padding: "0.5rem" }}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>

      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}
