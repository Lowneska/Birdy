import express from "express";
const router = express.Router();
import {getUser, getUserFriends, addRemoveFriend} from '../controllers/user.js'
import checkUser from "../middleware/check.js";

router.get("/:id", checkUser, getUser);
router.get("/:id/friends", checkUser, getUserFriends);
router.patch("/:id/:friendId", checkUser, addRemoveFriend);

export default router;