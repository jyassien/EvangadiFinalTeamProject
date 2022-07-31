const router = require("express").Router();

const { createAnswer, readAnswers } = require("./answer.controller");

router.post("/", createAnswer);
router.get("/:questionId", readAnswers);

module.exports = router;
