<template>
    <div class="userProfile">
        <UserProfileComponent/>
    </div>
</template>


<style scoped>
.userProfile{
    background-color: #155263;
    min-height: 100vh;
    padding: 5rem 0 2rem 0;
}
</style>
<script>
import UserProfileComponent from '../components/UserProfile.vue'
export default{
components:{
    UserProfileComponent
}
}
</script>