<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">Product Details</h1>
      <div class="row mt-5">
        <div class="col-md-6">
          <img :src="product.images[0]" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p>Price: {{ product.price }} $</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductDetails",
  components: {},
  created() {
    this.$store.dispatch("getProductById", this.$route.params.id);
  },
  computed: {
    ...mapState({
      product: (state) => state.Product,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
