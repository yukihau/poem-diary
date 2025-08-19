import axios from "axios";
import api from "./api";

export function getUser(token?: string) {
  console.log(token);
  if (token) return { username: "yukiiris" };
  throw new Error("Invalid token!")
}

export async function authLogin(username: string, password: string): Promise<string> {
  try {
    return await api.post('/auth/login', { username, password })
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Login Error:', error.response?.data || error.message)
    } else {
      console.error('Unexpected Error')
    }
    throw error;
  }
}

export async function authRegister(
  fullName: string,
  email: string,
  username: string,
  password: string
): Promise<boolean> {
  try {
    return await api.post('/auth/register', { fullName, email, username, password })
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Register Error:', error.response?.data || error.message)
    } else {
      console.error('Unexpected Error')
    }
    throw error;
  }
}
