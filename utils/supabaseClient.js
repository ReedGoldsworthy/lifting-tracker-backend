const { createClient } = require("@supabase/supabase-js");
const logger = require("./logger"); // Adjust path as necessary
const config = require("./config");

let supabase;

try {
  // Log the connection attempt
  logger.info("Connecting to Supabase with URL:", config.SUPABASE_URL);

  // Create Supabase client
  supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

  // Log success
  logger.info("Successfully connected to Supabase");
} catch (error) {
  logger.error("Error connecting to Supabase:", error.message);
  // Optionally handle the error or exit
}

module.exports = supabase;
