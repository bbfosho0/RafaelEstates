import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c47baa4dd0mshcdb04bce622f585p15c45djsn86d27ccf8ec5',
    },
  });
    
  return data;
}