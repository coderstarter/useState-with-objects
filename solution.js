import "./styles.css";
import React, { useState } from "react";
// import ParentComponent from "./Components/ParentComponent";
function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        text="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        text="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}
export default App;
