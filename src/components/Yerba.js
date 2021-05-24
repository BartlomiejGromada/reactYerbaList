import React from "react";

const Yerba = ({ yerba, Yerbas, setYerbas }) => {
  const handleClick = () => {
    setYerbas(Yerbas.filter((item) => item.id !== yerba.id));
  };
  return (
    <li>
      <h3>{yerba.name}</h3>
      <p className="dateTime">{yerba.date}</p>
      <button onClick={handleClick} className="removeButton">
        -
      </button>
    </li>
  );
};

export default Yerba;
