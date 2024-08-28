const express = require("express");
const axios = require("axios");
const config = require("../utils/config");
const { createClient } = require("@supabase/supabase-js");
const logger = require("../utils/logger");

const callbackRouter = express.Router();

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

callbackRouter.get("/", async (req, res) => {
  res.json("hello world");
});

module.exports = callbackRouter;
