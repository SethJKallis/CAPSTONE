<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateUserModal">
  Update Details
</button>

<!-- Modal -->
<div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="updateUserModalLabel">Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input class="form-control" type="text" name="firstName" id="firstName" placeholder="First Name">
            <input class="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name">
            <input class="form-control" type="text" name="userProfile" id="userProfile" placeholder="Profile Image URL">
            <input class="form-control" type="email" name="userEmail" id="userEmail" placeholder="Email Address">
            <input class="form-control" type="password" name="userPass" id="userPass" placeholder="Password">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default{

}
</script>