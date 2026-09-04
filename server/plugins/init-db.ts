export default defineNitroPlugin(async () => {
	const db = useDatabase('postgresql');
	console.log('db init success');
	// 用户表
  // await db.exec(`
  //   CREATE TABLE IF NOT EXISTS users (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     username TEXT NOT NULL,
  //     email TEXT NOT NULL,
	// 		password TEXT NOT NULL,
	// 		avatar TEXT,
	// 		count INTEGER DEFAULT 2,
  //     created_at TEXT DEFAULT CURRENT_TIMESTAMP
  //   )
  // `)
  const res = await db.sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      avatar TEXT,
      count INTEGER DEFAULT 2,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  console.log('users table created:', res);
})