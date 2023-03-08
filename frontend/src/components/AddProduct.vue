<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
  Add Product
</button>

<!-- Modal -->
<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addProductModalLabel">Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input class="form-control" type="text" name="prodName" id="prodName" placeholder="Name">

            <input class="form-control" type="text" name="prodDescription" id="prodDescription" placeholder="Description">

            <input class="form-control" type="text" name="prodPrice" id="prodPrice" placeholder="Price">

            <input class="form-control" type="text" name="prodQuantity" id="prodQuantity" placeholder="Quantity">

            <input class="form-control" type="text" name="prodImg" id="prodImg" placeholder="Image URL">

            <input class="form-control" type="text" name="prodCatID" id="prodCatID" placeholder="Category">
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