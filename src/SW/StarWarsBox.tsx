/* Hämta ut info från ett api via useEffect och skriv ut 3 saker på skärmen*/

import { useState, useEffect } from "react";
import StarWarsPerson from "./StarWarsPerson";

//Create a type alias for the props
type StarWarsBoxProps = {
  choosenCaracter: number | string;
};

//create a Type Alias for the swCaracter so we dont make any mistakes
type swCaracterInfo = {
  name: string;
  gender: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  hair_color: string;
  films: string[];
  homeworld: string;
};

export const StarWarsBox = ({ choosenCaracter }: StarWarsBoxProps) => {
  const [swCaracter, setSwCaracter] = useState({} as swCaracterInfo);

  useEffect(() => {
    //here I put the code that is a side effect, this will be renderd after the DOM has been renderd.
    //The API get its own variabel that is local in the useEffect, we dont need it anywhere else.
    const API_URL: string = `https://swapi.py4e.com/api/people/`;

    // create the async function to fetch the API
    const fetchAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      //Collects only the results, since I dont need anything else
      const allCharacters = data.results;

      //If the props is a number
      if (!ignore) {
        if (typeof choosenCaracter === "number") {
          const result = allCharacters[choosenCaracter];
          console.log("result", result.homeworld);

          setSwCaracter({
            name: result.name,
            gender: result.gender,
            birth_year: result.birth_year,
            eye_color: result.eye_color,
            skin_color: result.skin_color,
            hair_color: result.hair_color,
            films: result.films.length,
            homeworld: "",
          });
        }
        //If the props is a string
        if (typeof choosenCaracter === "string") {
          //.find() will return the first element that is the same as choosencaracter
          const result = allCharacters.find((character: swCaracterInfo) => {
            return character.name === choosenCaracter;
          });

          setSwCaracter({
            name: result.name,
            gender: result.gender,
            birth_year: result.birth_year,
            eye_color: result.eye_color,
            skin_color: result.skin_color,
            hair_color: result.hair_color,
            films: result.films.length,
            homeworld: "",
          });
        }
      }
    };

    //Call the fetchAPI funktion so it can be executed
    fetchAPI();
    let ignore = false;
    // Don't need a cleanup because useEffect will only be executed once.
    // But I use a cleanup function here to avoid setting state on an unmounted component.
    return () => {
      ignore = true;
    };
    //Empty dependecies array bc we only need to use useEffect once, for fetching data from API
  }, []);
  return (
    <div className="SWBoxDiv">
      <h3>Star Wars Box</h3>
      {/* The terner operator. If swCaracter.name contains something(default is undefined) we will call in the component
          SWCard, else it will display the text "laddar..." */}
      {swCaracter.name ? (
        <StarWarsPerson swCaracter={swCaracter} />
      ) : (
        "Laddar..."
      )}
    </div>
  );
};
