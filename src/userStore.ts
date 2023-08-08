import {useResource$} from "@builder.io/qwik";
import axios from "axios";


export const useUserData = () => {
  return useResource$(async () => {
    const response = await axios.get("https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user");
    return response.data;
  })
};
