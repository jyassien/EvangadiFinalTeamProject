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
    pool.query("SELECT * FROM question", (err, result) => {
      if (err) {
        console.log("import questions: database connection error");
        return callback(err);
      }
      //   console.log(">>>>>>> importQuestions:  passed");
      //   console.log(">>>>>>>>> importQuestions: ", result);
      return callback(null, result);
    });
  },
};
