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
            <td class="border-view">{t.id}</td>
            <td class="border-view">{t.firstname}</td>
            <td class="border-view">{t.lastname}</td>
            <td class="border-view">{t.email}</td>
            <td class="border-view">{t.password}</td>
            <td class="border-view">
              <img src={t.avatar} height="50" alt="pic" />
            </td>
          </tr>
        ))
      }
    />
  );

  useStylesScoped$(styles);
  return (
    <div>
      <div>
        <div class="container-fluid align-center">
          <table class="container table-auto border-separate border border-slate-500 w-4/5 h-auto">
            <caption class="my-2.5 text-center ml-2.5 pb-2.5	 font-bold text-black text-4xl">
              View the list of users
            </caption>
            <thead class="ma-2 pa-2">
              <tr class="ma-2 pa-2">
                <th scope="" class="border--view">
                  id
                </th>
                <th scope="" class="border--view">
                  FirstName
                </th>
                <th scope="" class="border--view">
                  LastName
                </th>
                <th scope="" class="border--view">
                  Email
                </th>
                <th scope="" class="border--view">
                  Password
                </th>
                <th class="w-4 h-5	border--view" scope="">
                  Avatar
                </th>
              </tr>
            </thead>
            <tbody>{UsersTableRow()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
