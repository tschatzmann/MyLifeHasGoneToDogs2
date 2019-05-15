require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes= require("./routes") 
const mongoose = require("mongoose")

const apiAuthorRoutes = require('./routes/api/author');
const apiPostingRoutes = require('./routes/api/posting');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var databaseUrl = "mongodb://localhost/MyLifeDogsDB";

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
}
else {
	mongoose.connect(databaseUrl, { useNewUrlParser: true, useCreateIndex: true });
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use("/api/author", apiAuthorRoutes);
app.use("/api/posting", apiPostingRoutes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
