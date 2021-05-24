import React from "react";
import Yerba from "./Yerba";

const YerbaList = ({ Yerbas, setYerbas }) => {
  return (
    <div>
      <ul>
        {Yerbas.map((yerba, id) => {
          return (
            <Yerba
              key={id}
              yerba={yerba}
              Yerbas={Yerbas}
              setYerbas={setYerbas}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default YerbaList;
