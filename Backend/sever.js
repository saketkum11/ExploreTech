import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("sever is ready");
});
const port = 3000;
app.listen(port, () => {
  console.log("Liseting port");
});
