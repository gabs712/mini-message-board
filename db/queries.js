const pool = require('./pool')

async function insertMessage(username, text) {
  await pool.query(
    "INSERT INTO messages (username, text, time) VALUES ($1, $2, DATE_TRUNC('second', NOW()))",
    [username, text],
  )
}

async function getMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ])
  return rows[0]
}

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages;')
  return rows
}

module.exports = {
  insertMessage,
  getMessageById,
  getAllMessages,
}
