import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
 
  params: {       hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'ee9a81108bmsh4d9a05e1193ec6ep1aab19jsn1f1d9136aeac'  ,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export  const  FetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
