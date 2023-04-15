const router = require("express").Router();

const authRoutes = require("../modules/auths/routes");
const awardRoutes = require("../modules/awards/routes");

router.use(authRoutes);
router.use(awardRoutes);

module.exports = router;
