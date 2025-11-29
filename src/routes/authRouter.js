import express from "express";
import registerUser from "../controllers/registerUser.js";

const router = express.Router()
console.log('Here at auth router');


router.get("/register", registerUser)

export default router;