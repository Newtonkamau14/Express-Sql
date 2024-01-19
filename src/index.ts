import dotenv from "dotenv";
import express, { Application } from "express";
import expressLayouts from "express-ejs-layouts";
import methodOverride from "method-override";
import personRouter from "./routes/persons";
const PORT = process.env.PORT || 5000;
const app: Application = express();

dotenv.config();

//Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "layouts/layout");
app.use(methodOverride("_method"));

//Routes
app.use("/", personRouter);

//Start server
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);

export default app;
