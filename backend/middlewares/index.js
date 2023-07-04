import {expressjwt} from "express-jwt";

export const requireSignIn = expressjwt({
    getToken: () => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS265"],
});