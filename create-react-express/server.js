const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes= require("./routes") 
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/MyLifeDogsDB", { useNewUrlParser: true, useCreateIndex: true, });

const apiAuthorRoutes = require('./routes/api/author');
const apiPostingRoutes = require('./routes/api/posting');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use("/api/author", apiAuthorRoutes);
app.use("/api/posting", apiPostingRoutes);

app.use(test)

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
