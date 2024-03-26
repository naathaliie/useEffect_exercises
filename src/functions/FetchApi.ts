import axios from "axios";



const fetchAPI = async (API_URL_PEOPLE: string, oneCaracter: string | number) => {
  const response = await axios.get(API_URL_PEOPLE);
  if (response.status !== 200) {
    throw Error("failed to load data");
  }
  else{
    const data = response.data;
  console.log("fetchAPI", data);
  return data.results[oneCaracter];
  }
  
};

export default fetchAPI;