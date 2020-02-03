const express = require("express");
const { getHosts } = require("../controllers/hosts");
const router = express.Router();
/*
router.get("/", (req, res) => {
  res.send("Hi there!");
});
*/

router.route("/").get(getHosts);

module.exports = router;
