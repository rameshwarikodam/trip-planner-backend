const express = require("express");
const packageController = require("../controllers/package.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();
router.get("/", packageController.getPackages);
router.get("/:id", packageController.getPackageById);
//router.post("/add", packageController.save); // to fav
router.post("/addPackage", packageController.addPackage); // insert into db
router.get("/get-all/:userId", packageController.getPackagesDetails);
module.exports = router;
