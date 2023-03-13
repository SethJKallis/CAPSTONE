<template>
    <div class="signInAndOut">
        <form v-if="signIn && user == null" class="signIn">
            <h2 class="display-5 fw-bold mb-4 mt-2">SIGN IN</h2>
            <label for="userEmail" class="mt-3 lead">Email Address</label>
            <input type="email" name="userEmail" id="userEmail" class="form-control w-50 mx-auto mb-2" required placeholder="Enter Your Email Address..." v-model="signInPayload.userEmail">
            <label for="userPass" class="mt-3 lead">Password</label>
            <input type="password" name="userPass" id="userPass" class="form-control w-50 mx-auto mb-5" required placeholder="Enter Your Password..." v-model="signInPayload.userPass">
            <button class="btn btn-dark mb-3 me-1 mt-4" v-on:click.prevent="userSignIn(signInPayload)">Sign In</button>
            <button class="btn btn-danger mb-3 mt-4" v-on:click.prevent="changeSign()">Sign Up</button>
        </form>

        <form v-if="!signIn && user == null" class="signUp">
            <h2 class="display-5 fw-bold mt-2">SIGN UP</h2>
            <label class="mt-3 lead" for="firstName">First Name</label>
            <input class="form-control w-50 mx-auto mb-2" type="text" name="firstName" id="firstName" required placeholder="Enter Your First Name..." v-model="signUpPayload.firstName">
            <label class="mt-3 lead" for="lastName">Last Name</label>
            <input class="form-control w-50 mx-auto mb-2" type="text" name="lastName" id="lastName" required placeholder="Enter Your Last Name..." v-model="signUpPayload.lastName">
            <label class="mt-3 lead" for="email">Email Address</label>
            <input class="form-control w-50 mx-auto mb-2" type="email" name="email" id="email" placeholder="Enter Your Email Address..." v-model="signUpPayload.userEmail">
            <label class="mt-3 lead" for="userPass">Password</label>
            <input class="form-control w-50 mx-auto mb-2" type="password" name="userPass" id="userPass" required placeholder="Enter Your Password..." v-model="signUpPayload.userPass">
            <button class="btn btn-dark mb-3 me-1 mt-4" v-on:click.prevent="userSignUp(signUpPayload)">Sign Up</button>
            <button class="btn btn-danger mb-3 mt-4" v-on:click.prevent="changeSign()">Sign In</button>
        </form>

        <div v-if="user !== null" class="userSignedIn">
            <h1>YOU'VE SIGNED IN!</h1>
        </div>
    </div>
    </template>

<style scoped>
.signInAndOut{
    min-height: 100vh;
    padding: 5em 0 2em 0;
    color: #ffffff;
    background-color: #155263;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
.signIn,
.signUp{
    background-color: #000000ae;
    width: 50%;
    margin: 0 auto;
}

</style>

<script>
import { useStore } from 'vuex';
// import {computed} from '@vue/runtime-core';

export default{
    setup(){
        const store = useStore();

        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;

        const signInPayload = {
            "userEmail":'',
            "userPass":''
        }
        const signUpPayload = {
            "firstName":'',
            "lastName":'',
            "userEmail":'',
            "userPass":''
        }
        async function userSignIn(signInPayload){
            await store.dispatch('login', signInPayload);
            localStorage.setItem('user',JSON.stringify(store.state.user))
            location.reload();
        }

        async function userSignUp(signUpPayload){
            await store.dispatch('register', signUpPayload);
            let tempPayload = {
                "userEmail":signUpPayload.userEmail,
                "userPass":signUpPayload.userPass
            };
            await store.dispatch('login', tempPayload);
            localStorage.setItem('user', JSON.stringify(store.state.user));
            location.reload();
        }

        
        return{
            user,
            signInPayload,
            signUpPayload,
            userSignIn,
            userSignUp

        }
    },
    data(){
        const store = useStore();
        return{
            signIn:true,
            store
        }
    },
    methods:{
        changeSign(){
            console.log(this.user)
            this.signIn = !this.signIn
        }
        
    }
}
</script>