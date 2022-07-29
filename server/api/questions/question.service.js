const pool = require("../../config/database");

module.exports = {
  addQuestion: (data, callback) => {
    pool.query(
      "INSERT INTO question(question, question_description, user_id)VALUES(?,?,?)",
      [data.title, data.description, data.userId],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  importQuestions: (callback) => {
    pool.query(
      `SELECT registration.user_name,question_id, question,question_description,question_code_block FROM question JOIN registration ON question.user_id = registration.user_id ORDER BY question_id DESC`,
      (err, result) => {
        if (err) {
          console.log("import questions: database connection error");
          return callback(err);
        }
        console.log(">>>>>>> importQuestions:  passed");
        // console.log(">>>>>>>>> importQuestions: ", result);
        return callback(null, result);
      }
    );
  },
};
