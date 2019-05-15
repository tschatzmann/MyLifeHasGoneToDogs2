import axios from "axios";

export default {
  // Gets all authors
  getauthors: function() {
    return axios.get("/api/author");
  },
  // Gets the author with the given id
  getAuthor: function(id) {
    return axios.get("/api/author/" + id);
  },
  getAuthorsPopulatePostings: function(id){
   return axios.get("api/populatedauthor");
 },
 
  // Deletes the author with the given id
  deleteAthor: function(id) {
    return axios.delete("/api/author/" + id);
  },
  // Saves a author to the database
  saveAuthor: function(authorData) {
    return axios.post("/api/author", authorData);
  }
};