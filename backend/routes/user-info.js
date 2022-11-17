const express = require("express");
const router = express.Router();

const { getUserInfo } = require("../controllers/user-info");

router.get('/info/:id', getUserInfo)

module.exports = router;