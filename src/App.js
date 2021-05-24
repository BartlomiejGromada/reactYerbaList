import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import YerbaList from "./components/YerbaList";

function App() {
  const [Yerbas, setYerbas] = useState([]);
  const [Yerba, setYerba] = useState("");

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    saveLocalStorage();
  }, [Yerbas]);

  const saveLocalStorage = () => {
    localStorage.setItem("yerbas", JSON.stringify(Yerbas));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("yerbas") == null) {
      localStorage.getItem("yerbas", JSON.stringify(Yerbas));
    } else {
      let yerbasLocal = JSON.parse(localStorage.getItem("yerbas"));
      setYerbas(yerbasLocal);
    }
  };

  return (
    <div className="App">
      <h1>Yerba drink list</h1>
      <Form
        Yerbas={Yerbas}
        setYerbas={setYerbas}
        Yerba={Yerba}
        setYerba={setYerba}
      />
      <YerbaList Yerbas={Yerbas} setYerbas={setYerbas} />
    </div>
  );
}

export default App;
