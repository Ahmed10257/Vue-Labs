<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">Edit Product</h1>
      <div class="row mt-5">
        <div class="col-md-6">
          <img :src="product.images[0]" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <form>
            <div class="mb-3 d-flex justify-content-center">
              <label for="title" class="form-label w-25">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
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
                v-model="product.description"
              ></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="price" class="form-label w-25">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="product.price"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="images" class="form-label w-25">Image URL</label>
              <input
                type="text"
                class="form-control"
                id="images"
                v-model="product.images[0]"
              />
            </div>
            <button type="submit" class="btn btn-primary" @click="Edit()">
              Edit Product
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProduct",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$store.dispatch("getProductById", this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.state.Product;
    },
  },
  methods: {
    Edit() {
      this.$store.dispatch("editProduct", this.product);
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped></style>
