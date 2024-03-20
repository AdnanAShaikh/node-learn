const User = require("../model/user");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({}); // Fetch all users from the database
  return res.json(allUsers);
}

async function getUserById(req, res) {
  const userId = await User.findById(req.params.id);
  const user = userId.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ status: "not found" });
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (!body.first_name || !body.email || !body.gender || !body.job_title) {
    return res.status(400).json({ status: "need all file" });
  } else {
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });

    console.log("result: ", result);
    return res.status(201).json({ msg: "success", id: result._id });
  }
}
module.exports = {
  handleGetAllUsers,
  getUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
