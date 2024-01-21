import axios from "axios";
import { urlAPI } from "./Config";
const httpAxios = axios.create({
    baseURL: urlAPI,
    headers: {'X-Custom-Header': 'foobar'}
  });
export default httpAxios;