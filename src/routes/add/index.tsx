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
            <td class="border-view">{t.id}</td>
            <td class="border-view">{t.firstname}</td>
            <td class="border-view">{t.lastname}</td>
            <td class="border-view">{t.email}</td>
            <td class="border-view">{t.password}</td>
            <td class="border-view">
              <img src={t.avatar} height="50" alt="pic" />
            </td>
            <td>
              <div class="button">
                <button
                  class="delete btn-del"
                  onClick$={() => handleDeleteUser(t.id)}
                >
                  delete
                </button>
                <Link href={`/edit/${t.id}`}>
                  <button class="edit btn-del">edit</button>
                </Link>
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
                  {/* <input
                    type="submit"
                    placeholder="add user"
                    aria-label="add user"
                    value="add user"
                    aria-describedby="basic-addon1"
                  /> */}
                  <button class="btn-add">add user</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="container ">
          <table class="table-view ">
            <caption class="cap-view">View the list of users</caption>
            <thead class="ma-2 pa-2">
              <tr class="ma-2 pa-2">
                <th class="border--view padding-id">id</th>
                <th class="border--view">FirstName</th>
                <th class="border--view">LastName</th>
                <th class="border--view">Email</th>
                <th class="border--view">Password</th>
                <th class="avatar	 border--view">Avatar</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{UsersTableRow()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
