require("dotenv").config();

let SUPABASE_KEY = process.env.SUPABASE_KEY;
let PORT = process.env.PORT || 3001;
let SUPABASE_URL = process.env.SUPABASE_URL;

module.exports = {
  PORT,
  SUPABASE_KEY,
  SUPABASE_URL,
};
