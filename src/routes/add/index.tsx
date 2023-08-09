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
            <td class="border-separate border border-slate-500 align-center text-center">
              {t.id}
            </td>
            <td class="border-separate border border-slate-500 align-center text-center">
              {t.firstname}
            </td>
            <td class="border-separate border border-slate-500 align-center text-center">
              {t.lastname}
            </td>
            <td class="border-separate border border-slate-500 align-center text-center">
              {t.email}
            </td>
            <td class="border-separate border border-slate-500 align-center text-center">
              {t.password}
            </td>
            <td class="border-separate border border-slate-500 align-center text-center">
              <img src={t.avatar} height="50" alt="pic" />
            </td>
            <td>
              <div class="button">
                <button class="delete" onClick$={() => handleDeleteUser(t.id)}>
                  delete
                </button>
                <Link href={`/edit/${t.id}`}>
                  <button class="edit">edit</button>
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
                  <button class="rounded-full bg-violet-400 text-white w-64 h-10	text-center ">
                    add user
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid align-center">
          <table class="container table-auto border-separate border border-slate-500">
            <caption class="my-2.5 text-center ml-2.5 pb-2.5	 font-bold text-black text-4xl">
              View the list of users
            </caption>
            <thead class="ma-2 pa-2">
              <tr class="ma-2 pa-2">
                <th class="border-separate border border-slate-700 py-5">id</th>
                <th class="border-separate border border-slate-700">
                  FirstName
                </th>
                <th class="border-separate border border-slate-700">
                  LastName
                </th>
                <th class="border-separate border border-slate-700">Email</th>
                <th class="border-separate border border-slate-700">
                  Password
                </th>
                <th class="w-4 h-5	 border-separate border border-slate-700">
                  Avatar
                </th>
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
