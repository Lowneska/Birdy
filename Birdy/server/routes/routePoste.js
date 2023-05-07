import express from "express";
const router = express.Router();
import { createPost} from '../controllers/poste.js'

router.post('/poste', createPost);

export default router;