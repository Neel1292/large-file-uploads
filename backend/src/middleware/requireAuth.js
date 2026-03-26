import jwt from 'jsonwebtoken';
import 'dotenv/config'

const getAccessSecret = () => {
  if (!process.env.ACCESS_TOKEN_SECRET) throw new Error('ACCESS_TOKEN_SECRET missing');
  return process.env.ACCESS_TOKEN_SECRET;
};

export function requireAuth(req, res, next) {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const payload = jwt.verify(token, getAccessSecret());
    // payload.sub is userId
    req.user = { id: payload.sub };
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
}

