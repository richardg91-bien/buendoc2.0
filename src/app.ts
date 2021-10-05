import express from "express";
import cors from "cors";
import morgan from "morgan";


// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

import tasksRoutes from "./routes/tasks.routes";

const app = express();
const path = require ('path')

// Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const specs = swaggerJsDoc(options);

// Routes
app.use(tasksRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

// Static files

export default app;

