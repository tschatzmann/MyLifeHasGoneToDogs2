const path = require("path");
const router = require("express").Router();
const apiAuthorRoutes = require("./api/author")
const apiPostingRoutes = require("./api/posting")
// API Routes
router.use("/api/author", apiAuthorRoutes);
router.use("/api/posting", apiPostingRoutes);
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
