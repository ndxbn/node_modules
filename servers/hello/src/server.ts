// entry point as server process
import express from "express";

const app = express();
app.get("/", (_, res) => {
  res.json("Hello! Here is ndxbn Server!");
});

app.listen(8000);
