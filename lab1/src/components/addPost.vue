<template>
  <div>
    <div class="d-flex flex-column align-items-center">
      <h1 class="mb-4">Add Post</h1>
      <div class="card col-6 flex-d align-items-center">
        <form>
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="post.title"
            />
            <label for="body">Body:</label>
            <textarea
              class="form-control"
              id="body"
              v-model="post.body"
            ></textarea>

            <button
              type="submit"
              class="btn btn-primary m-4"
              @click="AddPost(post)"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import addPost from "../Mixins/PostsService.js";
export default {
  name: "addPost",
  mixins: [addPost],
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    AddPost(post) {
      this.$options.methods.AddPost.call(this, post);
    },
  },
};
</script>

<style scoped></style>
