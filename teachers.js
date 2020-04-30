const fs = require("fs");
const data = require("./data.json");

// create
exports.post = function post(req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("notfilled");
    }
  }
  let { avatar_url, name, birth, graduation, modality, specialty } = req.body;

  id = Number(data.teachers.length + 1);
  created_date = Date.now();
  birth = Date.parse(birth);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    graduation,
    modality,
    specialty,
    created_date,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Write error! Try again...");
    }
  });
  return res.redirect("/teachers");
};
// update
exports.put = function (req, res) {};
// delete
exports.delete = function (req, res) {};
