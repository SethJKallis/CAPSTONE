<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
  Add User
</button>

<!-- Modal -->
<div class="modal fade mt-5" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="addUserModalLabel">Add User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="form-control mb-1" type="text" name="firstName" id="newFirstName" required v-model="payload.firstName" placeholder="First Name">
        <input class="form-control mb-1" type="text" name="lastName" id="newLastName" required v-model="payload.lastName" placeholder="Last Name">
        <input class="form-control mb-1" type="text" name="userRole" id="newUserRole" v-model="payload.userRole" placeholder="User Role">
        <input class="form-control mb-1" type="text" name="userProfile" id="userProfile" v-model="payload.userProfile" placeholder="Profile Image URL">
        <input class="form-control mb-1" type="email" name="userEmail" id="newUserEmail" required v-model="payload.userEmail" placeholder="Email Address">
        <input class="form-control mb-1" type="password" name="userPass" id="newUserPass" autocomplete="new-password" required v-model="payload.userPass" placeholder="Password">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="addUser">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import { useStore } from 'vuex';


export default{
    setup(){
        const store = useStore();

        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;

        let payload = {
            firstName:'',
            lastName:'',
            userRole:'',
            userProfile:'',
            userEmail:'',
            userPass:''
        }

        let addUser = async () => {
            if(payload.userProfile == '')payload.userProfile = 'https://i.postimg.cc/hGYgg2JY/istockphoto-587805156-612x612.jpg';
            if(payload.userRole == '')payload.userRole = 'user';
            if(payload.userRole !== 'admin' && payload.userRole !== 'user')alert(`
            User Roles Accepted: 
            admin
            user
            `);
            console.log(payload);
            await store.dispatch('register', payload);
            await store.dispatch('fetchUsers');
            location.reload();
        }
        return{
            user,
            payload,
            addUser
        }
    }
}
</script>