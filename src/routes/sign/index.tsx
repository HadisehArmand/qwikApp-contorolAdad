import styles from "./sign.module.css?inline";
import "../../index.css";
import { component$, useComputed$, useSignal,$,useStylesScoped$ } from '@builder.io/qwik';
import {submitUser} from '~/userStore'

export default component$(() => {
    const firstname = useSignal('');
    const lastname = useSignal('');
    const email = useSignal('');
    const password = useSignal('');
    const avatar = useSignal('');
    useStylesScoped$(styles);
    return (
        <div class="flex justify-center mt-20"> 
            <div class="border-slate-200 bg-amber-50	w-1/3 h-auto rounded-lg drop-shadow-xl ">
                <div class="row d-flex justify-content-center">
                    <h1 class=" text-center  font-bold text-violet-500 text-4xl mt-4">Sign Up</h1>
                    <div class="flex justify-center">
                        {/* <span class="input-group-text" id="basic-addon1">
                            F
                        </span> */}
                        <input
                            id="firstname"
                            type="text"
                            class="border rounded px-4 py-2 focus:outline-none focus:ring mb-6 mt-10"
                            placeholder="FirstName"
                            aria-label="FirstName"
                            aria-describedby="basic-addon1"
                            bind: value={firstname}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">
                            L
                        </span> */}
                        <input
                            id="lastname"
                            type="text"
                            class="border rounded px-4 py-2 focus:outline-none focus:ring mb-3.5"
                            placeholder="LastName"
                            aria-label="LastName"
                            aria-describedby="basic-addon1"
                            bind: value={lastname}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">
                            @
                        </span> */}
                        <input
                            id="email"
                            type="email"
                            class="border rounded px-4 py-2 focus:outline-none focus:ring mb-3.5"
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="basic-addon1"
                            bind: value={email}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">
                            P
                        </span> */}
                        <input
                            id="password"
                            type="password"
                            class="border rounded px-4 py-2 focus:outline-none focus:ring mb-3.5"
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            bind: value={password}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">
                            A
                        </span> */}
                        <input
                            id="avatar"
                            type="text"
                            class="border rounded px-4 py-2 focus:outline-none focus:ring mb-3.5"
                            placeholder="Avatar"
                            aria-label="Avatar"
                            aria-describedby="basic-addon1"
                            bind: value={avatar}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="col-6  d-flex justify-content-evenly">
                        {/* <input
                            class="btn"
                            type="button"
                            value="SignUp"
                            onClick$={()=>submitUser(firstname.value,lastname.value,email.value,password.value,avatar.value)}
                        /> */}
                        <button class="rounded-full bg-violet-400 text-white w-64 h-10	text-center mb-10"  onClick$={()=>submitUser(firstname.value,lastname.value,email.value,password.value,avatar.value)}>
                    add user
                  </button>
                    </div>
                </div>
            </div>
        </div>
    );
});
