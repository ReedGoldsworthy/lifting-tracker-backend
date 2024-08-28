const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const querystring = require("querystring");
const config = require("../utils/config"); // Spotify credentials
const logger = require("../utils/logger");

const loginRouter = express.Router();

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

//this route
loginRouter.get("/google", async (req, res) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173", // Replace with your callback URL
    },
  });

  if (error) {
    console.error("Error signing in:", error.message);
    return res.status(500).json({ error: error.message });
  }

  res.redirect(data.url); // Redirect to Google sign-in
});

loginRouter.post("/email", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Log the error for debugging
      console.error("Supabase Error:", error);
      return res.status(401).json({ message: "Invalid credentials", error });
    }

    if (!data || !data.session) {
      // Check if data or session is undefined
      console.error("Supabase Data:", data);
      return res.status(500).json({ message: "No session data found" });
    }

    // Extract access token from the session
    const accessToken = data.session.access_token;
    // Redirect to frontend with access token in the URL hash
    res.json(accessToken);
  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected Error:", error);
    res.status(500).json({ message: "An unexpected error occurred", error });
  }
});

//this route
loginRouter.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    logger.error(error);
    return res.status(400).json({ message: "Sign-up failed", error });
  }

  res.json({
    message: "Sign-up successful! Check your email for the confirmation link.",
  });
});

module.exports = loginRouter;
