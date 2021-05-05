const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./product-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/products", postRoutes);
router.use("/comments", commentRoutes);

//const productRoutes = require("./product-routes");
//const commentRoutes = require("./comment-routes");


//router.use("/products", productRoutes);
//router.use("/comments", commentRoutes);


module.exports = router;
