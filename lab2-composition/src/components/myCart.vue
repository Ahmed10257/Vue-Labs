<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">My Cart</h1>
      <div class="row mt-5">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>
                  <img
                    :src="item.images[0]"
                    class="img-fluid"
                    width="100px"
                    alt="..."
                  />
                </td>

                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.price * item.quantity }} $</td>
                <td
                  class="text-center d-flex justify-content-center flex-row align-items-center"
                  style="height: 120px"
                >
                  <div class="input-group w-50">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-type="minus"
                      data-bs-field="quant[1]"
                      @click="removeFromCart(item.id)"
                    >
                      <span class="bi bi-dash"></span>
                    </button>
                    <input
                      type="text"
                      name="quant[2]"
                      class="form-control input-number"
                      :value="item.quantity"
                      min="1"
                      max="100"
                    />
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-type="plus"
                      data-bs-field="quant[1]"
                      @click="addToCart(item.id)"
                    >
                      <span class="bi bi-plus"></span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="total">
            <h3>Total: {{ calculateTotal() }} $</h3>
            <h4 v-if="calculateTotal() === 0">No Products added Yet</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myCart",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$store.dispatch("getCart");
  },
  computed: {
    cart() {
      return this.$store.state.Cart;
    },
  },
  methods: {
    calculateTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
    addToCart(id) {
      this.product = this.$store.state.Products.find((p) => p.id === id);
      this.$store.dispatch("addToCart", this.product);
    },
    removeFromCart(id) {
      this.product = this.$store.state.Products.find((p) => p.id === id);
      this.$store.dispatch("removeFromCart", this.product);
    },
  },
};
</script>

<style scoped>
.center {
  width: 150px;
  margin: 40px auto;
}
</style>
