import express from "express";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import tvRoutes from "./routes/tv.route.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";
import searchRoutes from "./routes/search.route.js"

const app = express();

app.use(cors(
    {
        origin: "http://localhost:5000",
        methods: "GET,POST,PUT,DELETE",
    }
));

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parse req.body

app.use(cookieParser());

app.use("/api/v1/auth", protectRoute, authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.listen(PORT, () => {
    console.log("Server started at  http://localhost:" + PORT);
    connectDB();
})


  
  