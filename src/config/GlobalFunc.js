import axios from "axios";
import { toast } from "react-toastify";
import { GlobalVar } from "./GlobalVar";

export async function getRequest(path) {
  try {
    const response = await axios.get('https://newsapi.org/' + path + "&apiKey=" + GlobalVar.apiKey);
    return response;
  } catch (error) {
    toast.error(error.message, {
      theme: "colored"
    })
    console.log(error);
  }
}