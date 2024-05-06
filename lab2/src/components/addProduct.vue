<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">Add Product</h1>
      <div class="row mt-5 flex-d justify-content-center">
        <div class="col-md-6">
          <form>
            <div class="mb-3 d-flex justify-content-center">
              <label for="title" class="form-label w-25">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter title"
                v-model="product.title"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="description" class="form-label w-25"
                >Description</label
              >
              <textarea
                class="form-control"
                id="description"
                rows="3"
                placeholder="Enter description"
                v-model="product.description"
              ></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="price" class="form-label w-25">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="Enter price"
                v-model="product.price"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="image" class="form-label w-25">Image Url</label>
              <input
                type="text"
                class="form-control"
                id="image"
                placeholder="Choose image"
                v-model="product.images[0]"
              />
            </div>
            <button type="submit" class="btn btn-primary" @click="addProduct()">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { router } from "vue-router";
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        title: "",
        description: "",
        price: "",
        images: [],
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("createProduct", this.product);
      this.product = {
        title: "",
        description: "",
        price: "",
        images: [],
      };
      this.$router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped></style>
