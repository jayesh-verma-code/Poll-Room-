const crypto = require("crypto");

module.exports = function(req){
  const ip = req.ip;
  const agent = req.headers["user-agent"];
  return crypto
    .createHash("sha256")
    .update(ip + agent)
    .digest("hex");
};
