const express = require("express");
const router = express.Router();
const CatController = require("../controllers");

router.get("/", CatController.read);
router.get();
