<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">Products List</h1>
      <div class="row mt-5">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-md-4 mb-4"
        >
          <div class="card">
            <router-link :to="`/products/${product.id}`">
              <div class="Fixed-height">
                <img :src="product.images[0]" class="card-img-top" alt="..." />
              </div>
            </router-link>
            <div class="card-body CardHeight">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text fw-bold">Price: {{ product.price }} $</p>
            </div>
            <div class="d-flex justify-content-around mb-3">
              <button class="btn btn-success" @click="AddToCart(product.id)">
                Add to Cart
              </button>
              <button class="btn btn-warning" @click="EditProduct(product.id)">
                Edit
              </button>
              <button class="btn btn-danger" @click="DeleteProduct(product.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  components: {},
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.Products;
    },
  },
  methods: {
    EditProduct(id) {
      this.$router.push(`/products/edit/${id}`);
    },
    DeleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
      this.$router.push("/products");
    },
    AddToCart(id) {
      this.product = this.$store.state.Products.find((p) => p.id === id);
      this.$store.dispatch("addToCart", this.product);
    },
  },
};
</script>

<style scoped>
.Fixed-height {
  height: 200px;
  overflow: hidden;
}

.CardHeight {
  height: 300px;
}
</style>
