const express = require("express");
const router = express.Router();
const {
  registration,
  profileUpdate,
  login,
  profileDetails, RecoverVerifyEmail, recoverOTPVerify, RecoverResetPassword
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authVerifyMiddleware");
router.post("/registration", registration);
router.post("/login", login);
router.post("/profileUpdate", authMiddleware, profileUpdate);
router.get("/RecoverVerifyEmail/:email", RecoverVerifyEmail)
router.get("/RecoverVerifyOTP/:email/:otp", recoverOTPVerify)
router.post("/RecoverResetPassword", RecoverResetPassword)






router.get("/profileDetails", authMiddleware, profileDetails);

module.exports = router;
