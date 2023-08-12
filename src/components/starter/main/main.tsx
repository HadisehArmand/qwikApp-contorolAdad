import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./main.module.css?inline";
import { Link } from "@builder.io/qwik-city";
import "../../../index.css";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class=" flex justify-center mt-20">
      <div class="border">
        <div class="row">
          <h1 class="font">User Management</h1>
        </div>
        <div class="row">
          <div class=" flex justify-center ">
            <Link class="no-underline" href="/view">
              <button class="btn-view">view</button>
            </Link>
          </div>
          <div class=" flex justify-center">
            <Link class="no-underline" href="/add">
              <button class="btn-view">add/edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
