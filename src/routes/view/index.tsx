import { component$, Resource, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./view.module.css?inline";
import "../../index.css";
import { useUserData } from "~/userStore";

export default component$(() => {
  const users = useUserData();
  console.log(users.value);

  const UsersTableRow = () => (
    <Resource
      value={users}
      onPending={() => <p>Loading...</p>}
      onRejected={() => <p>Error...</p>}
      onResolved={(data) =>
        data.map((t: any) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.firstname}</td>
            <td>{t.lastname}</td>
            <td>{t.email}</td>
            <td>{t.password}</td>
            <td>
              <img src={t.avatar} height="50" alt="pic" />
            </td>
          </tr>
        ))
      }
    />
  );

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
            <tbody>{UsersTableRow()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
