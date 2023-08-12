import { component$, Resource, useStylesScoped$, useSignal, $ } from "@builder.io/qwik";
import styles from "./edit.module.css?inline";
import { routeLoader$ } from '@builder.io/qwik-city';
import { updateUser } from "~/userStore";
import axios from "axios";
import { useLocation } from "@builder.io/qwik-city";

export const useUserDetails = routeLoader$(async (requestEvent) => {
  const res = await axios.get(
      `https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/${requestEvent.params.id}`
    );
  const user = await res.data;
  return user;
});

export default component$(() => {
  const SU = useUserDetails()
  const UID = useLocation().params.id
  const firstname = useSignal(SU.value.firstname);
  const lastname = useSignal(SU.value.lastname);
  const email = useSignal(SU.value.email);
  const password = useSignal(SU.value.password);
  const avatar = useSignal(SU.value.avatar);
  

  useStylesScoped$(styles);
  return (
    <div class="flex justify-center mt-20">
      <div class="border-slate-200 bg-amber-50	w-1/3 h-auto rounded-lg drop-shadow-xl">
        <div class="row d-flex justify-content-center">
          <h1 class="cap-view">Edit</h1>
          <div class="flex justify-center">
            {/* <span class="input-group-text" id="basic-addon1">
              F
            </span> */}
            <input
              id="firstname"
              type="text"
              class="input-sign"
              placeholder="FirstName"
              aria-label="FirstName"
              aria-describedby="basic-addon1"
              bind: value={firstname}
            />
          </div>
          <div class="input-group mb-3  flex justify-center">
            {/* <span class="input-group-text" id="basic-addon1">
              L
            </span> */}
            <input
              id="lastname"
              type="text"
              class="input-sign"
              placeholder="LastName"
              aria-label="LastName"
              aria-describedby="basic-addon1"
              bind: value={lastname}
            />
          </div>
          <div class="input-group mb-3  flex justify-center">
            {/* <span class="input-group-text" id="basic-addon1">
              @
            </span> */}
            <input
              id="email"
              type="text"
              class="input-sign"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
              bind: value={email}
            />
          </div>
          <div class="input-group mb-3  flex justify-center">
            {/* <span class="input-group-text" id="basic-addon1">
              P
            </span> */}
            <input
              id="password"
              type="text"
              class="input-sign"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              bind: value={password}
            />
          </div>
          <div class="input-group mb-3 flex justify-center">
            {/* <span class="input-group-text" id="basic-addon1">
              A
            </span> */}
            <input
              id="avatar"
              type="text"
              class="input-sign"
              placeholder="avatar"
              aria-label="avatar"
              aria-describedby="basic-addon1"
              bind: value={avatar}
            />
          </div>
        </div>
        
        <div class="flex justify-center">
          <div class="col-6  flex justify-center">
            {/* <input
              class="btn"
              type="button"
              value="Edit"
              onClick$={()=>updateUser(parseInt(UID),firstname.value,lastname.value,email.value,password.value,avatar.value)}
            /> */}
             <button class="btn-add"  onClick$={()=>updateUser(parseInt(UID),firstname.value,lastname.value,email.value,password.value,avatar.value)}>
                    Edit
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
});
