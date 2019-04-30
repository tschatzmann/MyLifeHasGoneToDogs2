const router = require("express").Router();
const authorController = require("../../controllers/authorsController");

// Matches with "/api/author"
router.route("/signin")
  .get(authorController.findAll)
  .post(authorController.create);

// Matches with "/api/author/:id"
router
  .route("/:id")
  .get(authorController.findById)
  .put(authorController.update)
  .delete(authorController.remove);

module.exports = router;
