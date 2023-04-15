const router = require("express").Router();
const multer = require("multer");

const { getAwards } = require("../handlers");
const { authorize } = require("../../../middlewares/authentication");

router.get("/awards", [multer().none(), authorize()], getAwards);

module.exports = router;
