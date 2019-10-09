const { AsyncRouter } = require("express-async-router");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const jwtMiddleware = require("../helpers/jwtMiddleware");

const router = AsyncRouter();

// List
router.get("/", async (req, res) => {
  const users = await User.find();

  res.send(users);
});

// Read
router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id });

  if (!user) return res.sendStatus(404);

  res.send(user);
});

// update
router.patch("/:_id", [jwtMiddleware], async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id });

  if (!user) return res.sendStatus(404);
  if (req.user._id !== user.user._id) return res.sendStatus(401);

  user.message = req.body.message;
  await user.save();

  res.send(user);
});

// delete
router.delete("/:_id", jwtMiddleware, async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id });

  if (!user) return res.sendStatus(404);
  if (req.user._id !== user.user._id) return res.sendStatus(401);

  await user.remove();

  res.send(user);
});

module.exports = router;
