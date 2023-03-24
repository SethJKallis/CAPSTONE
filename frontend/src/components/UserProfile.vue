<template>
    <h2 class="display-5">USER PROFILE</h2>
    <div class="container-fluid row mx-auto">
        <div class="profileImg col-12 col-lg-4">
            <img :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName" class="mb-4 mb-lg-0 rounded-circle">
        </div>
        <div class="profileContent col-12 col-lg-8 pt-2">
            <div class="contentContainer row">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-lines-fill col-6 d-none d-lg-block" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                </svg>
                <p class="lead fs-4 col-6"><span class="d-block fs-6 text-danger">Name</span>{{ user.firstName + ' ' + user.lastName }}</p>
            </div>
            <div class="contentContainer row">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-at col-6 d-none d-lg-block" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                </svg>
                <p class="lead fs-4 col-6"><span class="d-block fs-6 text-danger">Email Address</span>{{ user.userEmail }}</p>
            </div>
            <div class="contentContainer row">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-check col-6 d-none d-lg-block" viewBox="0 0 16 16">
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                <p class="lead fs-4 col-6"><span class="d-block fs-6 text-danger">Join Date</span>{{ splitDate[0] }}</p>
            </div>
            <div class="contentContainer row mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-geo-alt-fill col-6 d-none d-lg-block" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <p class="lead fs-4 col-6"><span class="d-block fs-6 text-danger">Delivery Address</span>{{ user.address }}</p>
            </div>
            
            <div class="greenDot" v-if="user.userRole == 'admin'">ADMIN</div>
            <div class="blueDot" v-else-if="user.userRole == 'user'">USER</div>
            
        </div>
    </div>
    <div class="btnContainer d-flex justify-content-between px-5">
        <div class="compContainer mt-3">
            <UpdateSingleUser :userDetails="user"/> 
        </div>
        <button class="btn btn-warning mt-3" v-on:click="logOut">Sign Out</button>
        <button class="btn btn-danger mt-3" v-on:click="deleteAccount(user)">Delete Account</button>

    </div>
    </template>

<script>
import UpdateSingleUser from '@/components/UpdateSingleUser.vue';
import store from '@/store';
import {useRouter} from 'vue-router';


export default{
    setup() {
        const router = useRouter();

        const userLoggedIn = JSON.parse(localStorage.getItem("user"));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null : userLoggedIn;
        const { joinDate } = user;
        let splitDate = joinDate.split("T");

        function logOut(){
            localStorage.removeItem('user');
            router.push({name:'home', path:'/'}).then(() => location.reload());
        }

        function deleteAccount(user){
            let doubleCheck = prompt('Are you sure?(y/n)');
            
            if(doubleCheck !== null && doubleCheck.toLowerCase() == 'y'){
                store.dispatch('deleteUser', user.userID);
                localStorage.removeItem('user');
                router.push({name:'home', path:'/'}).then(() => location.reload())
            } else if(doubleCheck !== null && doubleCheck.toLowerCase() == 'n') {
                return
            } else {
                alert('Please enter a valid response!')
            }
        }
        return {
            user,
            logOut,
            splitDate,
            deleteAccount
        };
    },
    components: { UpdateSingleUser }
}
</script>

<style scoped>
.container-fluid{
    padding: 0;
    background-color: #000000cf;
}
.profileImg{
    display: flex;
    justify-content: center;
    align-content: center;
}
.profileImg img{
    max-width: 295px;
    height: 295px;
    align-self: center;
    margin: 0;
}

.profileContent{
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
.contentContainer{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.greenDot{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
}
.blueDot{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
}
@media screen and (max-width:992px) {
    p{
        width: 100%;
    }
}
</style>