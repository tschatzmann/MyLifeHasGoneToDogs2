const router = require("express").Router();
const postingsController = require("../../controllers/postingsController");
//git changes

// Matches with "/api/postings"
router.route("/posted")
  .get(postingsController.findAll)
  .post(postingsController.create);

// Matches with "/api/postings/:id"
router
  .route("/:id")
  .get(postingsController.findById)
  .put(postingsController.update)
  .delete(postingsController.remove);

module.exports = router;
