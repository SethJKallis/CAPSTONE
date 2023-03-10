<template>
    <div>
        <img :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName" width="300" height="300" class="mb-4">
        <p class="fs-3 
        fw-bold">Name</p>
        <p class="lead">{{ user.firstName + ' ' + user.lastName }}</p>
        <p class="fs-3 fw-bold">Email Address</p>
        <p class="lead">{{ user.userEmail }}</p>
        <p class="fs-3 fw-bold">User Role</p>
        <p class="lead">{{ user.userRole }}</p>
        <p class="fs-3 fw-bold">Join Date</p>
        <p class="lead">{{ splitDate[0] }}</p>
    </div>
</template>

<script>
export default{
    setup(){
    const userLoggedIn =JSON.parse(localStorage.getItem('user'));
    let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;

    const {joinDate} = user;
    let splitDate = joinDate.split('T');

    return{
      user,
      splitDate
    }
    },
}
</script>