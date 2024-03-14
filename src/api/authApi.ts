import axios from "axios";
import { LoginObj } from "../components/login/LoginPage.hook";
import { API_URL } from "../config/constant";

export const userLogin = ({ email, password }: LoginObj) =>
  axios.post(API_URL + "/login", { email, password });
