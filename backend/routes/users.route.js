const {
  userSignup,
  userLogin,
  viewUser,
  singleuser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const router = require("express").Router();

//---------------------------------——
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images/");
//   },
//   filename: function (req, file, cb) {
//     const name = Date.now() + "-" + file.originalname;
//     cb(null, name);
//   },
// });
// const upload = multer({ storage: storage });
// upload.single("ryan"),
//---------------------------------——
//
//
// View users || get request
router.get("/", viewUser);
//
//
// View single users || get request
router.get("/:id", singleuser);
//
//
// delete users || delete request
router.delete("/:id", deleteUser);
//
//
// update users || put request
router.put("/:id", updateUser);
//
//
// Register a user || post request
router.post("/signup", userSignup);
//
//
// Login user || post request
router.post("/login", userLogin);
//
//
//
module.exports = router;
