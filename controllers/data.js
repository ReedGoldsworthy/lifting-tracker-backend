const dataRouter = require("express").Router();
const supabase = require("../utils/supabaseClient"); // Import the Supabase client
const axios = require("axios");

const { createClient } = require("@supabase/supabase-js");

//this route returns all playlists from our DB, might want to specify a user to get playlists from in future
dataRouter.post("/userinfo", async (req, res) => {
  const { accessToken } = req.body;

  try {
    // Set the access token in the Supabase client
    const { data, error } = await supabase.auth.getUser(accessToken);

    if (error) {
      console.error("Error getting user info:", error.message);
      return res.status(401).json({ error: error.message });
    }

    // Send user info back to client
    res.json(data);
  } catch (err) {
    console.error("Unexpected error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

dataRouter.post("/workouts", async (req, res) => {
  const { accessToken } = req.body;

  try {
    // Retrieve user information using the access token
    const { data: userData, error: userError } = await supabase.auth.getUser(
      accessToken
    );

    if (userError) {
      console.error("Error getting user info:", userError.message);
      return res.status(401).json({ error: userError.message });
    }

    const userId = userData?.user?.id;
    if (!userId) {
      return res.status(400).json({ error: "User ID not found" });
    }

    // Query workouts for the user
    const { data: workouts, error: workoutsError } = await supabase
      .from("workouts")
      .select("*")
      .eq("user_id", userId);

    if (workoutsError) {
      console.error("Error getting workouts:", workoutsError.message);
      return res.status(500).json({ error: workoutsError.message });
    }

    // Send workouts data back to the client
    res.json(workouts);
  } catch (err) {
    console.error("Unexpected error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = dataRouter;
