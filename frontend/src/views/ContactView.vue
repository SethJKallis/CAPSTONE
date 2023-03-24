<template>
    <div class="contact">
        <form action="https://formspree.io/f/xnqybono" method="post" target="_blank" class="contactForm">
            <h1 class="display-5 fw-bold mb-4 mt-2">CONTACT US</h1>
            <label for="contactName">
                <input type="text" name="contactName" id="contactName" class="form-control w-50 mx-auto mb-2" required placeholder="Enter your name...">
            </label>
            <label for="contactEmail">
                <input type="text" name="contactEmail" id="contactEmail" class="form-control w-50 mx-auto mb-3" required placeholder="Enter you email address...">
            </label>
            <label for="comments">
                <textarea name="comments" id="comments" cols="30" rows="10" class="form-control w-50 mx-auto mb-3" placeholder="Let us know what you think..."></textarea>
            </label>
            <button type="submit" class="btn btn-dark mb-2 me-1">Submit</button>
            <button type="reset" class="btn btn-danger mb-2">Reset</button>
        </form>
    </div>
</template>

<style scoped>
label{
    color: #ff9a3c;
}
.contact{
    background-image: url('../assets/homepageimg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    min-height: 100vh;
    padding: 8em 0 1em 0;
}
.contactForm{
    background-color: #0000005f;
    width: 50%;
    min-width: 250px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
}
button{
    width: 25%;
    transition: all 0.25s ease 0s;
    align-self: center;
}
button:hover{
    scale: 1.05;
    box-shadow: 3px 3px 3px #000;
}
input,
textarea{
    transition: all 0.25s ease 0s;
}
input:active,
input:focus,
textarea:active,
textarea:focus{
    scale: 1.05;
    box-shadow: 5px 5px 8px #000;
}
</style>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
    setup(){
        const store = useStore();
        const user = computed(() => store.state.user);

        return{
            user
        }
    }
}
</script>