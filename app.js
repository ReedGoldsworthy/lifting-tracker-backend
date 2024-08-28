const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const loginRouter = require("./controllers/login");
const callbackRouter = require("./controllers/callback");
const dataRouter = require("./controllers/data");
const middleware = require("./utils/middleware");

app.use(cors());

app.use(express.static("dist"));

app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/login", loginRouter);
app.use("/callback", callbackRouter);
app.use("/api/data", dataRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
