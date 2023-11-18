import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Server is Ready");
});
app.get("/api/beer", (req, res) => {
  const colors = [
    {
      color: "red",
      value: "#f00",
    },
    {
      color: "green",
      value: "#0f0",
    },
    {
      color: "blue",
      value: "#00f",
    },
    {
      color: "cyan",
      value: "#0ff",
    },
    {
      color: "magenta",
      value: "#f0f",
    },
    {
      color: "yellow",
      value: "#ff0",
    },
    {
      color: "black",
      value: "#000",
    },
  ];
  res.send(colors);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Liseting port,${port}`);
});
