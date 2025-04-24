const pool = require('./pool')

async function insertMessage(username, text) {
  await pool.query(
    "INSERT INTO messages (username, text, time) VALUES ($1, $2, DATE_TRUNC('second', NOW()))",
    [username, text],
  )
}
