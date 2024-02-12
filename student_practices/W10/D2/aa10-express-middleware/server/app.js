const express = require("express");
require("express-async-errors");
const app = express();

const dogsRouter = require("./routes/dogs");

app.use(express.json());
app.use("/dogs", dogsRouter);

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} `);
  res.on("finish", () => {
    console.log(res.statusCode);
  });
  next();
};

const errorHandler = async (req, res, next) => {
  const error = new Error("The requested resource couldn't be found.");
  error.statusCode = 404;
  throw error;
};

app.use(logger);

app.use(express.json());

// For testing purposes, GET /
app.get("/", (req, res) => {
  res.json(
    "Express server running. No content provided at root level. Please use another route."
  );
});

// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  // console.log(req.body);
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
  // console.log("TEST ERROR");
  throw new Error("Hello World!");
});

app.use(errorHandler);
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
