import styles from "./sign.module.css?inline";
import "../../index.css";
import { component$, useComputed$, useSignal,$,useStylesScoped$ } from '@builder.io/qwik';
import {submitUser} from '~/userStore'

export default component$(() => {
    const firstname = useSignal('FirstName');
    const lastname = useSignal('LastName');
    const email = useSignal('Email');
    const password = useSignal('Password');
    const avatar = useSignal('avatar');
    useStylesScoped$(styles);
    return (
        <div class="container-fluid d-flex justify-content-center mt-5">
            <div class="row main-sign-log">
                <div class="row d-flex justify-content-center">
                    <h1 class="text-center">Sign Up</h1>
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
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="input-group mb-3">
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
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            @
                        </span>
                        <input
                            id="email"
                            type="email"
                            class="form-control"
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="basic-addon1"
                            bind: value={email}
                        />
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            P
                        </span>
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            bind: value={password}
                        />
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            A
                        </span>
                        <input
                            id="avatar"
                            type="text"
                            class="form-control"
                            placeholder="Avatar"
                            aria-label="Avatar"
                            aria-describedby="basic-addon1"
                            bind: value={avatar}
                        />
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-6  d-flex justify-content-evenly">
                        <input
                            class="btn"
                            type="button"
                            value="SignUp"
                            onClick$={()=>submitUser(firstname.value,lastname.value,email.value,password.value,avatar.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
