const express = require('express');
const app = express();
const UserController = require("../Controllers/UserController");
const router = express.Router();
userController = new UserController();

router.post("/create", userController.createUser);
router.post("/auth",userController.login);

module.exports = router;
