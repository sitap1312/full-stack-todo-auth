import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createTodo } from "../../services/todos";
import { useHistory } from "react-router";

export default function NewTodo(props) {
  const [input, setInput] = useState({ name: "", due_date: "", complete: "" });
  const history = useHistory();
  const handleChange = (e) => {
    const { id, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo(input);
    history.push("/");
  };

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        New Todo
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input id="name" value={input.name} onChange={handleChange} />
          <br />
          <label>Due Date</label>
          <br />
          <input id="due_date" value={input.due_date} onChange={handleChange} />
          <br />
          <label>Complete</label>
          <br />
          <input id="complete" value={input.complete} onChange={handleChange} />
          <br />
          <button>Create Todo</button>
        </form>
      </div>
    </Layout>
  );
}
