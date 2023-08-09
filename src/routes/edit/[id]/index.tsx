import { component$, Resource, useStylesScoped$, useSignal, $ } from "@builder.io/qwik";
import styles from "./edit.module.css?inline";
// import "../../index.css";
import { Link, useLocation } from "@builder.io/qwik-city";
import { useUserData, handleEditUser } from "~/userStore";

export default component$(() => {
  const UID = useLocation().params.id
  const users = useUserData();
  const finderUser = (userList:any) => {
    for (let index = 0; index < userList.length; index++) {
      if (index == parseInt(UID)) {
        return userList[index]
      }
    }
  }
  const UsersTableRow = () => (
    <Resource
      value={users}
      onPending={() => <p>Loading...</p>}
      onRejected={() => <p>Error...</p>}
      onResolved={(data) =>
        finderUser(data)
      }
    />
  );
  const res = UsersTableRow()
  // const SU = finderUser(res)
  const firstname = useSignal(res.firstname);
  const lastname = useSignal('LastName');
  const email = useSignal('Email');
  const password = useSignal('Password');
  const avatar = useSignal('avatar');
  

  useStylesScoped$(styles);
  return (
    <div class="container-fluid d-flex justify-content-center mt-5">
      <div class="row main-sign-log">
        <div class="row d-flex justify-content-center">
          <h1 class="text-center">Edit</h1>
          <div class="input-group mb-3  d-flex justify-content-center">
            <span class="input-group-text" id="basic-addon1">
              F
            </span>
            <input
              id="firstname"
              type="text"
              class="form-control"
              placeholder="FirstName"
              aria-label="FirstName"
              aria-describedby="basic-addon1"
              bind: value={firstname}
            />
          </div>
          <div class="input-group mb-3  d-flex justify-content-center">
            <span class="input-group-text" id="basic-addon1">
              L
            </span>
            <input
              id="lastname"
              type="text"
              class="form-control"
              placeholder="LastName"
              aria-label="LastName"
              aria-describedby="basic-addon1"
              bind: value={lastname}
            />
          </div>
          <div class="input-group mb-3  d-flex justify-content-center">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
              bind: value={email}
            />
          </div>
          <div class="input-group mb-3  d-flex justify-content-center">
            <span class="input-group-text" id="basic-addon1">
              P
            </span>
            <input
              id="password"
              type="text"
              class="form-control"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              bind: value={password}
            />
          </div>
          <div class="input-group mb-3  d-flex justify-content-center">
            <span class="input-group-text" id="basic-addon1">
              A
            </span>
            <input
              id="avatar"
              type="text"
              class="form-control"
              placeholder="avatar"
              aria-label="avatar"
              aria-describedby="basic-addon1"
              bind: value={avatar}
            />
          </div>
        </div>
        {/* ... and the rest of the inputs ... */}
        <div class="row d-flex justify-content-center">
          <div class="col-6 d-flex justify-content-evenly">
            <input
              class="btn"
              type="button"
              value="Edit"
            //   onClick={updateUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
