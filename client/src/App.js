import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* route all todos */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* route a single todo */}
      {/* route create todo */}
      {/* route login */}
      {/* route sign-up */}
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
