import React, { useState } from "react";

const Form = ({ Yerbas, setYerbas, Yerba, setYerba }) => {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 16));
  const handleSubmit = (e) => {
    e.preventDefault();
    Yerba = {
      id: Math.random() * 1000,
      name: Yerba,
      date: date,
    };
    setYerbas([...Yerbas, Yerba]);
    setYerba("");
  };

  const handleText = (e) => {
    setYerba(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <form action="#" method="get">
      <input
        type="text"
        name="yerbaName"
        placeholder="Yerba..."
        onChange={handleText}
        value={Yerba}
        autoComplete="off"
      />
      <br />
      <input
        type="datetime-local"
        id="dateTime"
        name="dateTime"
        className="dateTimePicker"
        value={date}
        onChange={handleChangeDate}
      />
      <button type="submit" name="send" onClick={handleSubmit}>
        +
      </button>
    </form>
  );
};

export default Form;
