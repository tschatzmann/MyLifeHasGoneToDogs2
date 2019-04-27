import axios from "axios";

export default {
  // Gets all postings
  getpostings: function() {
    return axios.get("/api/postings");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/postings/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/postings/" + id);
  },
  // Saves a post to the database
  savePost: function(postingData) {
    return axios.post("/api/postings", postingData);
  }
};