<template>
  <div>
    <div class="d-flex flex-column align-items-center">
      <h1 class="mb-4">Edit Post</h1>
      <div class="card col-6 flex-d align-items-center">
        <form>
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              type="text"
              class="form-control"
              id="title"
              value="post.title"
              v-model="post.title"
            />
          </div>

          <div class="form-group">
            <label for="body">Body:</label>
            <textarea
              class="form-control"
              id="body"
              value="post.body"
              v-model="post.body"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary m-4"
            @click="EditPost(post.id, post)"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import editPost from "../Mixins/PostsService.js";
export default {
  name: "editPost",
  mixins: [editPost],
  data() {
    return {
      post: {},
    };
  },
  methods: {
    editPost(id, post) {
      this.$options.methods.editPost.call(this, id, post);
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost(this.id);
  },
};
</script>

<style scoped></style>
