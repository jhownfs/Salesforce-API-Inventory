import axios, { AxiosInstance } from 'axios';

export const doAuthenticate = (sessionId: string): AxiosInstance => {
  return axios.create({
    baseURL: 'https://coisasdavida3-dev-ed.develop.lightning.force.com/services/data/v60.0/',
    headers: {
      'Authorization': `Bearer ${sessionId}`,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};
