export default defineEventHandler(async(event) => {

  const db = useDatabase();
  const token = getAuthToken(event) as string;

  // const res = await db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)')
  //   .bind('zhangesan', 'zhang@example.com', '12345')
  //   .run();


  // console.log(res)

  // db.sql`INSERT INTO users (username, email, password) VALUES ('张三1', 'zhang@example.com', '123456')`

  // const {rows, success} = await db.sql`SELECT id, username, email, avatar, count, created_at FROM users`;

  const info = await getVerifyToken(token);
  
  return { hello: 'API', data: info, success: 'success' };
})