//Main routes

const express = require("express");
const router = express.Router();
const app = express();
console.log("router loaded");
const homecontroller = require("../controllers/home_controller");

router.get("/", homecontroller.front);
router.use("/questions", require("./question"));
router.use("/options", require("./option"));
module.exports = router; //exporting router
