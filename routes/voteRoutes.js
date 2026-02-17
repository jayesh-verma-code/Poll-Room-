const router = require("express").Router();
const Poll = require("../models/Poll");
const Vote = require("../models/Vote");
const hash = require("../utils/hash");

router.post("/:pollId", async(req,res)=>{
  const { optionIndex } = req.body;
  const pollId = req.params.pollId;
  const voterHash = hash(req);

  let vote = await Vote.findOne({ pollId, voterHash });
  const poll = await Poll.findById(pollId);

  if(!poll) return res.sendStatus(404);

  if(vote){
    if(vote.optionIndex == optionIndex)
      return res.json(poll);

    poll.options[vote.optionIndex].votes--;
    poll.options[optionIndex].votes++;

    vote.optionIndex = optionIndex;
    await vote.save();
  }
  else{
    poll.options[optionIndex].votes++;
    await Vote.create({ pollId, voterHash, optionIndex });
  }

  await poll.save();

  req.io.to(pollId).emit("update", poll);

  res.json(poll);
});

router.delete("/:pollId", async(req,res)=>{
  const pollId = req.params.pollId;
  const voterHash = hash(req);

  const vote = await Vote.findOne({ pollId, voterHash });
  if(!vote) return res.sendStatus(400);

  const poll = await Poll.findById(pollId);
  poll.options[vote.optionIndex].votes--;

  await vote.deleteOne();
  await poll.save();

  req.io.to(pollId).emit("update", poll);

  res.json(poll);
});

module.exports = router;
