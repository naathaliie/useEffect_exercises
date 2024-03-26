import { useEffect, useState } from "react";
import "./SWContainer.scss";

import SWCaracter from "../SWCaracter/SWCaracter";
import swCaracterTYPE from "../types/types";
import fetchAPI from "../../functions/FetchApi";

//Create a type alias for the props
type SWContainerProps = {
  oneCaracter: number | string;
};

//The swCaracterTYPE is declared in the file types
type collectedInfoType = swCaracterTYPE;

const SWContainer = ({ oneCaracter }: SWContainerProps) => {
  const [swCaracter, setSwCaracter] = useState({} as collectedInfoType);

  useEffect(() => {
    const API_URL_PEOPLE = `https://swapi.py4e.com/api/people/`;

    fetchAPI(API_URL_PEOPLE, oneCaracter).then((data) => {
      return setSwCaracter({
        name: data.name,
        gender: data.gender,
        height: data.height,
      });
    });

    let ignore = false;
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="sWContainerDiv">
      <h3>SWContainer</h3>
      {swCaracter.name ? <SWCaracter swCaracter={swCaracter} /> : "laddar...."}
    </div>
  );
};

export default SWContainer;
