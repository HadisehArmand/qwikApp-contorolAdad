import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import axios from "axios";


export const setUserData(() => {
  const User = useSignal<object[]>();

  useTask$(async () => {
    const arrayUser = [];
    var api = async () => {
      try {
        const response = await axios.get("https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user");
        arrayUser.push(JSON.stringify(response.data))
        console.log("fetch done")
      } catch (errors) {
        console.error(errors);
      }
    };

    User.value = arrayUser;
  });
  return User;
});
