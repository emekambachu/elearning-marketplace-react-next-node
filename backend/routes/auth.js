import express from 'express';

const router = express.Router();

// Middlewares
import {requireSignIn} from "../middlewares";

// controllers
import {register, login, logout, currentUser} from '../controllers/auth_controller';

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get('/current-user', requireSignIn, currentUser);

module.exports = router;