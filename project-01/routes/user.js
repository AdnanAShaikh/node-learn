const express = require("express");
const {
  handleGetAllUsers,
  getUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controller/user");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

//   .put((req, res) => {})
//   .patch((req, res) => {})
//   .delete((req, res) => {});

// router.get("/", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
//     <ul>
//         ${allDbUsers
//           .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//           .join("")}
//         <ul>
//     `;

//   res.send(html);
// });

router
  .route("/:id")
  .get(getUserById)

  .patch(handleUpdateUserById)

  .delete(handleDeleteUserById);

module.exports = router;
