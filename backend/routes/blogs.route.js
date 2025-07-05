import express from "express";
const router = express.Router();
import { postblog ,getblogbyId,getblogs,latestblogs,getblogbytitle} from "../controllers/blogs.controller.js";
router.route('/create').post(postblog);
router.route("/blogs").get(getblogs)
router.route('/').get(latestblogs)
router.route('/title').get(getblogbytitle)
router.route('/:id').get(getblogbyId)
export default router;