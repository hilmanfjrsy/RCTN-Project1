import axios from "axios";
import { toast } from "react-toastify";
import { GlobalVar } from "./GlobalVar";

export async function getRequest(path) {
  try {
    const response = await axios.get('https://api-project1.netlify.app/.netlify/functions/api/' + path);
    if(response){
      return response;
    }
  } catch (error) {
    toast.error(error.message, {
      theme: "colored"
    })
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    console.log(error);
  }
}