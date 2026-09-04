// server/utils/auth.ts
import config from '#shared/config';
import jwt from 'jsonwebtoken';

export function getAuthToken(event: any): string | null | undefined {
  const authHeader = getHeader(event, 'Authorization')
  if (!authHeader) return null

  const [scheme, token] = authHeader.split(' ')
  if (scheme !== 'Bearer') return null

  return token
}


export async function getVerifyToken(token: string) {
  try {
    const userInfo = await jwt.verify(token, config.jwtSecretKey);
    return {
      ...userInfo,
    } 
  } catch (error) {
    return { message: 'Token 无效或已过期' }
  }
}