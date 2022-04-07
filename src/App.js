import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    fullName: "",
    food: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(state.fullName, state.food);

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form>
        <label>Full name</label>
        <input
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
        />

        <label>Fav Food</label>
        <input
          type="text"
          name="food"
          value={state.food}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
