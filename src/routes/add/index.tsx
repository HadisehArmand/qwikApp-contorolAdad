import { component$, Resource, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./add.module.css?inline";
import "../../index.css";
import { Link } from "@builder.io/qwik-city";
import { useUserData, handleDeleteUser } from "~/userStore";

export default component$(() => {
  const users = useUserData();

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
            <td>
              <div class="row">
                <button class="col-4 " onClick$={() => handleDeleteUser(t.id)}>
                  delete
                </button>
                <button class="col-4">edit</button>
              </div>
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
        <div class="main-add">
          <div class="row d-flex justify-content-start mt-1">
            <div class="col-5">
              <div class="input-group mb-1">
                <Link class="" href="/sign">
                  <input
                    type="submit"
                    placeholder="add user"
                    aria-label="add user"
                    value="add user"
                    aria-describedby="basic-addon1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
