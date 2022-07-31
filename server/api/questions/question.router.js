const router = require("express").Router();



const { createQuestion, getQuestions } = require("./question.controller");

router.post("/", createQuestion);
router.get("/", getQuestions);

module.exports = router;
