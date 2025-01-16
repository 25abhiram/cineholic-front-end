import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Replace with your backend URL

export const signIn = async (username: string, password: string) => {
  return axios.post(`${API_URL}/signin`, { username, password });
};

export const signUp = async (
  username: string,
  email: string,
  password: string
) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};
