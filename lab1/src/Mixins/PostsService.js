import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      id: "",
      title: "",
      body: "",
      post: {},
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPost(id) {
      axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePost(id) {
      axios
        .delete(`http://localhost:3000/posts/${id}`)
        .then(() => {
          this.getPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editPost(id, post) {
      axios
        .put(`http://localhost:3000/posts/${id}`, post)
        .then(() => {
          this.getPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addPost(post) {
      axios
        .post("http://localhost:3000/posts", post)
        .then(() => {
          this.getPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
