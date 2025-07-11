import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use("/", (req: Request, res: Response) => {
  res.send("On page");
});
if (process.env.NODE_ENV === "development") {
  app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });
}
