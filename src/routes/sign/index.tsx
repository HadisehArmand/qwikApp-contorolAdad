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
            <div class="border-sign">
                <div class="row d-flex justify-content-center">
                    <h1 class=" font-sign">Sign Up</h1>
                    <div class="flex justify-center">
                        {/* <span class="input-group-text" id="basic-addon1">
                            F
                        </span> */}
                        <input
                            id="firstname"
                            type="text"
                            class="input-sign "
                            placeholder="FirstName"
                            aria-label="FirstName"
                            aria-describedby="basic-addon1"
                            bind: value={firstname}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group ">
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
                </div>
                <div class="flex justify-center">
                    <div class="input-group ">
                        {/* <span class="input-group-text" id="basic-addon1">
                            @
                        </span> */}
                        <input
                            id="email"
                            type="email"
                            class="input-sign"
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="basic-addon1"
                            bind: value={email}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group ">
                        {/* <span class="input-group-text" id="basic-addon1">
                            P
                        </span> */}
                        <input
                            id="password"
                            type="password"
                            class="input-sign"
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            bind: value={password}
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="input-group ">
                        {/* <span class="input-group-text" id="basic-addon1">
                            A
                        </span> */}
                        <input
                            id="avatar"
                            type="text"
                            class="input-sign "
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
                        <button class="btn-add"  onClick$={()=>submitUser(firstname.value,lastname.value,email.value,password.value,avatar.value)}>
                    add user
                  </button>
                    </div>
                </div>
            </div>
        </div>
    );
});
