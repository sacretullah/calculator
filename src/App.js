import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [degisken, setdegisken] = useState(0);
  const handleChange = (event) => {
    setdegisken(event.target.value);
  };

  const [degisken2, setdegisken2] = useState(0);
  const handleChange1 = (event) => {
    setdegisken2(event.target.value);
  };
  const [result, setresult] = useState(0);

  const handleresult = () => {
    setresult(parseInt(degisken) + parseInt(degisken2));
  };
  const clear = () => {
    setdegisken(0);
    setdegisken2(0);
    setresult(0);
  };
  const random = () => {
    setdegisken(Math.floor(Math.random() * 101));
    setdegisken2(Math.floor(Math.random() * 101));
  };

  return (
    <div>
      <h1 className="h1">RESULT</h1>
      <div className="result1">{result}</div>
      <div className="motherdiv">
        <input
          value={degisken}
          type="number"
          className="input"
          onChange={handleChange}
        />

        <AddIcon className="plus" />

        <input
          value={degisken2}
          type="number"
          className="input2"
          onChange={handleChange1}
        />

        <button className="calculate" onClick={handleresult}>
          CALCULATE
        </button>

        <button className="clear" onClick={clear}>
          {" "}
          CLEAR
        </button>
        <button className="random" onClick={random}>
          RANDOM
        </button>
      </div>
    </div>
  );
}

export default App;
