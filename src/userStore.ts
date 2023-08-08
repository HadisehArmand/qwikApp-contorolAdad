import { useResource$,$ } from "@builder.io/qwik";
import axios from "axios";


export const useUserData = () => {
  return useResource$(async () => {
    const response = await axios.get("https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user");
    return response.data;
  })
};

export const handleDeleteUser = async (id: number) => {
  try {
    await axios.delete(
      `https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/${id}`
    );
    alert(`User with id ${id} was deleted!`);
    window.location.href = "/view";
  } catch (error) {
    console.error("Failed to delete user:", error);
  }
};


export const submitUser = $((firstname:any,lastname:any,email:any,password:any,avatar:any)=>{
  const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      avatar: avatar,
  };

  axios
      .post(
          `https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/`,
          user,
          {
              headers: {
                  "content-type": "application/json",
              },
          }
      )
      .then((res) => {
          alert(JSON.stringify(res.data) + "\nCreated !");
          window.location.href = "/view";
      })
      .catch((error) => {
          alert("An error occurred while creating the user.");
      });
});