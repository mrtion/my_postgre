import config from '#shared/config';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async(event) => {
  const db = useDatabase();

  const res = await db.prepare('SELECT id, username, email, avatar, count, created_at FROM users WHERE username=? AND email=?')
    .bind('zhangesan', 'zhang@example.com')
    .get();


  let token = ''

  if (res) {
    token = jwt.sign(res, config.jwtSecretKey, { expiresIn: '1h' });
  }


  return {
    data: token
  }

});