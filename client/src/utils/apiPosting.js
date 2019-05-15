import axios from "axios";

export default {
  // Gets all postings
  getpostings: function () {
    return axios.get("/api/posting");
  },
  // getpostings: function() {
  //   return axios.get("/api/postingpopulate");
  // },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posting/" + id);
  },
  updatePost: function (postingData) {
    console.log("in updatePost")
    console.log(postingData)
    return axios.put(`/api/posting/${postingData[0].id}`, postingData);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posting/" + id);
  },
  // Saves a post to the database
  savePost: function (postingData) {
    console.log('the postingData', postingData);
    return axios.post(`/api/posting/${postingData[0].authorid}`, postingData);
  },
  getPopulatePostings: function (id) {
    return axios.get(`/api/posting/populatedauthor/${id}`);
  },
};