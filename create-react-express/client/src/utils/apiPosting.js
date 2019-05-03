import axios from "axios";

export default {
  // Gets all postings
  getpostings: function() {
    return axios.get("/api/posting");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posting/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posting/" + id);
  },
  // Saves a post to the database
  savePost: function(postingData) {
    return axios.post("/api/posting", postingData);
  }
};