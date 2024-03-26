import swCaracterTYPE from "../types/types";

type SWCaracterProps = {
  swCaracter: swCaracterTYPE;
};

const SWCaracter = ({ swCaracter }: SWCaracterProps) => {
  console.log("swCaracter", swCaracter);
  return (
    <>
      <ul>
        {`${swCaracter.name}`}
        <li>{`Gender: ${swCaracter.gender}`}</li>
      </ul>
    </>
  );
};

export default SWCaracter;
