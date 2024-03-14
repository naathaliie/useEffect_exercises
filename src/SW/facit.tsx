/* Redigera-koden-övningar
Kopiera koden ovan och se till att den fungerar.

1. Redigera Luke-komponenten så att den visar upp tre egenskaper till om Luke ifrån APIet.

2. Lägg till så att komponenten visar hur många filmer Luke varit med i.

3. Redigera Luke-komponenten så att den tar emot en prop som är ett number. Denna prop ska 
användas för att hämta den person i APIet som har det numret. Lägg ut flera Person-komponenter 
i din App med olika nummer och kolla att det fungerar.

4. Utöka din prop så att den kan innehålla en sträng utöver ett number som identifierare. 
Alltså propen kan vara sträng eller nummer. Om det är en sträng som kommer in till komponenten 
ska vi söka efter en person med det namnet och visa upp den första personen som matchar 
sökningen (om det finns ngn). Uppdatera App så du testar både sträng och nummer.

5. Utöka komponenten så att vi även visar hemplanet till personen. Visa hemplanetens namn i Person-komponenten.

6. Utöka så hemplanetens klimat och terräng visas i Person-komponenten.

7. Utöka så vi även visar personens art (species). Visa artens namn, språk och hemplanet. */

import { useEffect, useState } from "react";

type SwApiProps = {
  wantedCharacter: number | string;
};

type StarWarsCharacter = {
  name: string;
  height: number;
  gender: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  films: [];
};

const SwApi = ({ wantedCharacter }: SwApiProps) => {
  const [character, setCharacter] = useState({} as StarWarsCharacter);

  useEffect(() => {
    const apiURL = "https://swapi.py4e.com/api/people/";

    const fetchAPI = async () => {
      const response = await fetch(apiURL);

      if (!ignore) {
        const data = await response.json();

        if (typeof wantedCharacter === "string") {
          const foundCharacter = data.results.find((one: StarWarsCharacter) => {
            return one.name === wantedCharacter;
          });

          setCharacter({
            name: foundCharacter.name,
            height: foundCharacter.height,
            gender: foundCharacter.gender,
            eyeColor: foundCharacter.eye_color,
            hairColor: foundCharacter.hair_color,
            skinColor: foundCharacter.skin_color,
            films: foundCharacter.films.length,
          });
        }

        if (typeof wantedCharacter === "number") {
          const oneCharacter = data.results[wantedCharacter];
          console.log("oneCharacter", oneCharacter);

          setCharacter({
            name: oneCharacter.name,
            height: oneCharacter.height,
            gender: oneCharacter.gender,
            eyeColor: oneCharacter.eye_color,
            hairColor: oneCharacter.hair_color,
            skinColor: oneCharacter.skin_color,
            films: oneCharacter.films.length,
          });
        }
      }
    };
    let ignore = false;
    fetchAPI();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="swApiDiv">
      <h3>Star wars Api</h3>
      <div>
        {character
          ? `Namn: ${character.name}, Height: ${character.height}, Gender: ${character.gender}, 
          Ögonfärg: ${character.eyeColor}, Hårfärg: ${character.hairColor}, Hudfärg: ${character.skinColor},
          Antal filmer: ${character.films}`
          : "Laddar..."}
      </div>
    </div>
  );
};

export default SwApi;
