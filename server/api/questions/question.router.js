const router = require("express").Router();

//importing auth middleware
const auth = require("../middleware/auth");

const { createQuestion, getQuestions } = require("./question.controller");

router.post("/", createQuestion);
router.get("/", getQuestions);

module.exports = router;
