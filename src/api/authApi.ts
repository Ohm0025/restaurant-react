import axios from "axios";
import { LoginObj } from "../components/login/LoginPage.hook";
import { API_URL } from "../config/constant";
import { RegisterObj } from "../components/register/Register.hook";

export const userLogin = ({ email, password }: LoginObj) =>
  axios.post(API_URL + "/login", { email, password });

export const userRegister = (registerObj: RegisterObj) =>
  axios.post(API_URL + "/register", { ...registerObj });
