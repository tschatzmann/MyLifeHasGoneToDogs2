const router = require("express").Router();
const postingsController = require("../../controllers/postingsController");

// Matches with "/api/postings"
router.route("/")
  .get(postingsController.findAll)
  .post(postingsController.create);

// Matches with "/api/postings/:id"
router
  .route("/:id")
  .get(postingsController.findById)
  .put(postingsController.update)
  .delete(postingsController.remove);

module.exports = router;
