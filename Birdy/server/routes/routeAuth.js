import express from "express";
import {register, login, logout} from '../controllers/auth.js'
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.get("/jwt", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;