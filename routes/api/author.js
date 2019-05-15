const router = require("express").Router();
const authorController = require("../../controllers/authorsController");

// Matches with "/api/author"
router.route("/")
  .get(authorController.findAll)
  .post(authorController.create);
//
router.route("/populatedauthor")
  .get(authorController.getAuthorsPopulatePostings);
// Matches with "/api/author/:id"
router
  .route("/:username")
  .get(authorController.findOne)
  .put(authorController.update)
  .delete(authorController.remove);

module.exports = router;