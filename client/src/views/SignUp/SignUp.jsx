import { useState } from "react";

export default function SignUp() {
  const [input, setInput] = useState({ username: "", email: "", password: "" });

  const handleSubmit = () => {};

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };
  return (
    <div>
      SignUp
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />
        <label>Email</label>
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
