import {
  component$,
  useStylesScoped$,
  useTask$,
  useStore,
} from "@builder.io/qwik";
import styles from "./view.module.css?inline";
import "../../index.css";
import { setUserData } from "~/userStore";

export default component$(() => {
  useTask$(async () => {
    // A task without `track` any state effectively behaves like a `on mount` hook.
    const users = setUserData();
    console.log(users);
  });

  const renderUser = () => {
    return users.map(({ id, firstname, lastname, email, password, avatar }) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>
            <img src={avatar} height="50px" alt="pic" />
          </td>
        </tr>
      );
    });
  };
  useStylesScoped$(styles);
  return (
    <div class="container-fluid">
      <div class="main">
        <div class="table">
          <table class="table-fixed">
            <caption class="caption-top text-black text-xl">
              View the list of users
            </caption>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>
            <tbody>{renderUser()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
