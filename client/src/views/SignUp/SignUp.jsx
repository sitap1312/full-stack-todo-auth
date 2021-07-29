import { useState } from "react";
import { signUp } from "../../services/users";

export default function SignUp() {
  const [input, setInput] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(input);
    console.log(user);
  };

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
        <br />
        <input
          id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
