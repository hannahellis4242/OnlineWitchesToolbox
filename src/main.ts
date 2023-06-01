import express from "express";
import morgan from "morgan";
import { join } from "path";

const app = express();
app.use(morgan("combined"));

app.use(express.static(join(__dirname, "../public")));

app.listen(8080, "0.0.0.0", () => {
  console.log("listening on port 8080");
});
