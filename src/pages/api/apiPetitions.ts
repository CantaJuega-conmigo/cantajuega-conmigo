import { setUser } from "@/context/userSlice";
import { Dispatch } from "react";
import axios from "./axios";

interface UserData {
  user: any;
  token: string;
}

export async function getHello(state: Dispatch<any>) {
  try {
    const petition = await axios.get("/");
    state(petition.data);
    return
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error('algo salio mal :(')
  }
}

export async function registerUser(
  body: any,
  state: (data: any) => void
) {
  try {
    const petition = await axios.post<UserData>("/users/register", body);
    state(setUser(petition?.data.user));
    localStorage.setItem("tkn", petition?.data.token);
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error('algo salio mal :(')
  }
}

export async function loginUser(
  body: any,
) {
  try {
    const petition = await axios.post<UserData>("/user/login", body);
    console.log(petition);
    localStorage.setItem("tkn", petition?.data.token);
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error('algo salio mal :(')
  }
}

export async function authUser(
  token: string,
  state: (data: any) => void
) {
  try {
    const petition = await axios.get("/users/auth", {
      headers:{
        authorization:`Bearer ${token}`
      }
    });
    state(setUser(petition?.data));
    localStorage.setItem("user", petition?.data);
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    localStorage.removeItem("tkn");
    window.location.pathname = "/";
  }
}
