const mysql = require("mysql");

const pool = mysql.createPool({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "127.0.0.1", // process.env.DB_HOST,
  user: "users", // process.env.DB_USER,
  password: "users1234", //  process.env.DB_PASS,
  database: "users", //  process.env.MYSQL_DB,
  connectionLimit: 10,
});

let registration = `CREATE TABLE if not exists registration(
  user_id int auto_increment,
  user_name varchar(255) not null,
  user_email varchar(255) not null,
  user_password varchar(255) not null,
  PRIMARY KEY (user_id)
  )`;
let profile = `CREATE TABLE if not exists profile(
  user_profile_id int auto_increment,
  user_id int not null,
  first_name varchar(255) not null,
  last_name varchar(255) not null,        
  PRIMARY KEY (user_profile_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

let question = `CREATE TABLE if not exists question(
  question_id int auto_increment,
  question varchar(255) not null,
  question_description varchar(255),
  question_code_block varchar(255),
  tags varchar(255),
  user_id int not null,
  PRIMARY KEY (question_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
  )`;
// post_id varchar(255) not null,
// UNIQUE KEY (post_id),
let answer = `CREATE TABLE if not exists answer(
  answer_id int auto_increment,
  answer varchar(255) not null,
  question_id int not null,
  user_id int not null,
  PRIMARY KEY (answer_id),
  FOREIGN KEY (question_id) REFERENCES question(question_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
  )`;
// user_id int not null,
// question_id int not null,
//  answer_code_block varchar(255),
// FOREIGN KEY (question_id) REFERENCES question(question_id)
// FOREIGN KEY (user_id) REFERENCES registration(user_id),
pool.query(registration, (err, results) => {
  if (err) throw err;
  console.log("registration table created");
});
pool.query(profile, (err, results) => {
  if (err) throw err;
  console.log("profile table created");
});
pool.query(question, (err, results) => {
  if (err) throw err;
  console.log("question table created");
});
pool.query(answer, (err, results) => {
  if (err) throw err;
  console.log("answer table created");
});

module.exports = pool;
