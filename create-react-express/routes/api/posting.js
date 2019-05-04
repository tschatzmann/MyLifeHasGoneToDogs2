const router = require("express").Router();
const postingsController = require("../../controllers/postingsController");
//git changes

// Matches with "/api/postings"
router.route("/")
  .get(postingsController.findAll)

// Matches with "/api/postings/:id"
router
  .route("/:id")
  .post(postingsController.create)
  .get(postingsController.findById)
  .put(postingsController.update)
  .delete(postingsController.remove);

module.exports = router;
