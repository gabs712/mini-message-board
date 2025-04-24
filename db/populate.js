const { Client } = require('pg')

require('dotenv').config({ override: true })

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added DATE
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Amando', 'Hi there!', NOW()),
  ('Damon', 'Hello World!', NOW());
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
