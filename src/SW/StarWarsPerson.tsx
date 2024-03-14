const StarWarsPerson = ({ swCaracter }: any) => {
  return (
    <>
      <ul>
        {`${swCaracter.name}`}
        <li>{`Kön: ${swCaracter.gender}`}</li>
        <li>{`Född: ${swCaracter.birth_year}`}</li>
        <li>{`Ögonfärg: ${swCaracter.eye_color}`}</li>
        <li>{`Hudfärg: ${swCaracter.skin_color}`}</li>
        <li>{`Hårfärg: ${swCaracter.hair_color}`}</li>
        <li>{`Filmer: ${swCaracter.films}`}</li>
        <li>{`Homeworld: ${swCaracter.homeworld}`}</li>
      </ul>
    </>
  );
};

export default StarWarsPerson;
