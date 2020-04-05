// Axios
import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'localhost:5309/api',
    headers: {
      authorization: token
    }
  });
};