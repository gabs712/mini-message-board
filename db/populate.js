const { Client } = require('pg')

require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  time TIMESTAMP
);

INSERT INTO messages (username, text, time) 
VALUES
  ('Amando', 'Hi there!', DATE_TRUNC('second', NOW())),
  ('Damon', 'Hello World!', DATE_TRUNC('second', NOW()));
`

async function main() {
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.PORT}/${process.env.DATABASE}`,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
}

main()
