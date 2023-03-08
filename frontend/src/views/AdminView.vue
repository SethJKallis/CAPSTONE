<template>
    <div class="admin">
        <h1 class="fw-bold">Admin Page</h1>
        <div class="productsTable">
            <h2>Products <Table></Table></h2>
            <table class="table table-hover table-striped table-dark mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="d-none d-sm-table-cell">Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th class="d-none d-sm-block">Image</th>
                        <th>Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product Name</td>
                        <td class="d-none d-sm-table-cell">Product Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Product Name</td>
                        <td class="d-none d-sm-table-cell">Product Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Product Name</td>
                        <td class="d-none d-sm-table-cell">Product Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Product Name</td>
                        <td class="d-none d-sm-table-cell">Product Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Product Name</td>
                        <td class="d-none d-sm-table-cell">Product Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div class="usersTable pb-2">
            <table class="table table-hover table-striped table-dark mb-0 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Role</th>
                        <th class="d-none d-sm-table-cell">Profile Image</th>
                        <th class="d-none d-sm-table-cell">Join Date</th>
                        <th>Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td class="d-none d-sm-table-cell">Join Date</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td class="d-none d-sm-table-cell">Join Date</td>
                        <td>
                            <button class="btn btn-dark">Edit</button>
                            <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td class="d-none d-sm-table-cell">Join Date</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td class="d-none d-sm-table-cell">Join Date</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td class="d-none d-sm-table-cell">Join Date</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td class="d-none d-sm-table-cell">Image</td>
                        <td class="d-none d-sm-table-cell">Join Date</td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.admin{
    background-image: url('../assets/digitalcoffee.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 87.3vh;
    color: #ff9a3c;
}
table{
    width: 95%;
    min-width: 100px;
}
</style>