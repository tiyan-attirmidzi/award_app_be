const router = require("express").Router();

const authRoutes = require("../modules/routes");

router.use(authRoutes);

module.exports = router;
