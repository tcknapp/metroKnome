const router = require("express").Router();
const dataController = require("../controllers/dataController");

// Matches with "/api/"
router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);


module.exports = router;
