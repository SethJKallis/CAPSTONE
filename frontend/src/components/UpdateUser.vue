<template>
    <div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateUserModal'+this.userDetails.userID">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</button>

<div class="modal fade mt-5" :id="'updateUserModal'+this.userDetails.userID" tabindex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="updateUserModalLabel">Edit {{ this.userDetails.firstName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input class="form-control mb-1" type="text" name="firstName" :id="'firstName'+this.userDetails.userID" placeholder="First Name" v-model="payloadTemp.firstName">
            <input class="form-control mb-1" type="text" name="lastName" :id="'lastName'+this.userDetails.userID" placeholder="Last Name" v-model="payloadTemp.lastName">

            <input class="form-control mb-1" type="text" name="userProfile" :id="'userProfile'+this.userDetails.userID" placeholder="Profile Image URL" v-model="payloadTemp.userProfile">

            <input class="form-control mb-1" type="text" name="userRole" :id="'userRole'+this.userDetails.userID" placeholder="User Role" v-model="payloadTemp.userRole">

            <input class="form-control mb-1" type="email" name="userEmail" :id="'userEmail'+this.userDetails.userID" placeholder="Email Address" required v-model="payloadTemp.userEmail">
            <input class="form-control" type="password" name="userPass" :id="'userPass'+this.userDetails.userID" placeholder="Password" autocomplete="new-password" required v-model="payloadTemp.userPass">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="editUser(this.userDetails)">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default{
  inheritAttrs:false,
  props:['userDetails'],
setup(){
  const store = useStore();

        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null : userLoggedIn;

        let payloadTemp = {
                userID:'',
                firstName:'',
                lastName:'',
                userEmail:'',
                userPass:'',
                userProfile:'',
                userRole:''
            }

            let payloadConstructor = async (user) => {
            let payload =  await  {
                userID:await user.userID,
                firstName:payloadTemp.firstName,
                lastName:payloadTemp.lastName,
                userEmail:payloadTemp.userEmail,
                userPass:payloadTemp.userPass,
                userProfile:payloadTemp.userProfile,
                userRole:payloadTemp.userRole
            }
            console.log(await payload.userRole);
            if(payload.firstName == '')payload.firstName = user.firstName;
            if(payload.lastName == '')payload.lastName = user.lastName;
            if(payload.userEmail == '')alert('Please Enter your email address!');
            if(payload.userPass == '')alert('Please enter your password!');
            if(payload.userProfile == '')payload.userProfile = user.userProfile;
            if(payload.userRole == '')payload.userRole = user.userRole
            if(await payload.userRole !== 'admin' && payload.userRole !== 'user')alert(`
            User Roles Accepted: 
            admin
            user
            `)
            return payload;
        }

        let editUser = async (user) => {
          console.log(await payloadConstructor(user));
          await store.dispatch('updateUser', await payloadConstructor(user));
          await store.dispatch('fetchUsers');
          location.reload();
        }

  return{
    user,
    payloadTemp,
    payloadConstructor,
    editUser
  }
}
}
</script>