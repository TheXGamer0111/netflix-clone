import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn: "15d"}); // 15 day

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true,     // prevent xss attacks cross-site scripting attacks, make it not accessed by javascript
        sameSite: "strict", // prevent csrf attacks cross-site request forgery
        secure: ENV_VARS.NODE_ENV !== "development",
    });

    return token;
}