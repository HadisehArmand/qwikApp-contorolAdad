import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./main.module.css?inline";
import { Link } from "@builder.io/qwik-city";
import "../../../index.css";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class=" flex justify-center mt-20">
      <div class=" border-slate-200 bg-amber-50	w-2/5 h-auto rounded-lg drop-shadow-xl ">
        <div class="row">
          <h1 class="text-4xl text-violet-500 mt-5">User Management</h1>
        </div>
        <div class="row">
          <div class=" flex justify-center ">
            <Link class="no-underline" href="/view">
              <button class="rounded-lg	 w-44 h-36 bg-violet-400	text-white m-8">
                view
              </button>
            </Link>
          </div>
          <div class=" flex justify-center">
            <Link class="no-underline" href="/add">
              <button class="rounded-lg	 w-44 h-36 bg-violet-400 text-white m-8	">
                add/edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
