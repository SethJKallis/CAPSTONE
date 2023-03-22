<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateUserModal'+this.userDetails.userID">
  EDIT
</button>

<!-- Modal -->
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

            <input class="form-control mb-1" type="text" name="userRole" :id="'userRole'+this.userDetails.userID" :placeholder="this.userDetails.userRole" disabled>
            <input class="form-control mb-1" type="text" name="userAddress" :id="'userRole'+this.userDetails.address" placeholder="Delivery Address" v-model="payloadTemp.address">

            <input class="form-control mb-1 mt-3" type="email" name="userEmail" :id="'userEmail'+this.userDetails.userID" placeholder="Email Address" required v-model="payloadTemp.userEmail">
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
                userRole:'',
                address:''
            }

            let payloadConstructor = async (user) => {
            let payload =  await  {
                userID:await user.userID,
                firstName:payloadTemp.firstName,
                lastName:payloadTemp.lastName,
                userEmail:payloadTemp.userEmail,
                userPass:payloadTemp.userPass,
                userProfile:payloadTemp.userProfile,
                userRole:payloadTemp.userRole,
                address:payloadTemp.address
            }
            if(payload.firstName == '')payload.firstName = user.firstName;
            if(payload.lastName == '')payload.lastName = user.lastName;
            if(payload.userEmail == '')alert('Please Enter your email address!');
            if(payload.userPass == '')alert('Please enter your password!');
            if(payload.userProfile == '')payload.userProfile = user.userProfile;
            if(payload.userRole == '')payload.userRole = user.userRole
            if(payload.address == '')payload.address = user.address
            if(await payload.userRole !== 'admin' && payload.userRole !== 'user')alert(`
            User Roles Accepted: 
            admin
            user
            `)
            return payload;
        }

        let editUser = async (user) => {
          let payload = await payloadConstructor(user);
          await store.dispatch('updateUser', payload);
          await store.dispatch('fetchUserById', payload.userID);
          localStorage.setItem('user', JSON.stringify(store.state.user))
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