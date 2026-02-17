const router = require("express").Router();
const Poll = require("../models/Poll");

router.get("/", (req,res)=>{
  res.render("create");
});

router.post("/create", async(req,res)=>{
  const { question, options } = req.body;

  const opts = options
    .filter(o=>o.trim() !== "")
    .map(o=>({ text:o }));

  if(!question || opts.length < 2)
    return res.send("Invalid input");

  const poll = await Poll.create({
    question,
    options: opts
  });

  res.redirect(`/poll/${poll._id}`);
});

router.get("/poll/:id", async(req,res)=>{
  try{
    const poll = await Poll.findById(req.params.id);
    if(!poll) return res.render("error");
    res.render("poll", { poll, request: req });
  }catch{
    res.render("error");
  }
});

module.exports = router;
