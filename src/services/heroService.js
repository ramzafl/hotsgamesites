import http from "./httpService";
import { apiUrl } from "../config.json";

export function getHeroes() {
  return http.get(apiUrl + "/heroes");
}
