import jwt from 'jsonwebtoken';

function ttlToMs(ttl) {
  if (typeof ttl === 'number') return ttl;
  if (!ttl) return 3 * 60 * 60 * 1000; // default 3h

  const m = `${ttl}`.trim().match(/^(\d+)([mhd])$/i);
  if (!m) return 3 * 60 * 60 * 1000;

  const value = Number(m[1]);
  const unit = m[2].toLowerCase();

  if (unit === 'm') return value * 60 * 1000;
  if (unit === 'h') return value * 60 * 60 * 1000;
  if (unit === 'd') return value * 24 * 60 * 60 * 1000;

  return 3 * 60 * 60 * 1000;
}

export function signAccessToken(userId) {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) throw new Error('ACCESS_TOKEN_SECRET missing');

  const expiresIn = process.env.ACCESS_TOKEN_EXPIRES_IN || '3h';
  return jwt.sign({ sub: String(userId), type: 'access' }, secret, { expiresIn });
}

export function signRefreshToken(userId) {
  const secret = process.env.REFRESH_TOKEN_SECRET;
  if (!secret) throw new Error('REFRESH_TOKEN_SECRET missing');

  const expiresIn = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';
  return jwt.sign({ sub: String(userId), type: 'refresh' }, secret, { expiresIn });
}

export function verifyAccessToken(token) {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) throw new Error('ACCESS_TOKEN_SECRET missing');
  return jwt.verify(token, secret);
}

export function verifyRefreshToken(token) {
  const secret = process.env.REFRESH_TOKEN_SECRET;
  if (!secret) throw new Error('REFRESH_TOKEN_SECRET missing');
  return jwt.verify(token, secret);
}

export function setAuthCookies(res, { accessToken, refreshToken }) {
  const accessMaxAgeMs = ttlToMs(process.env.ACCESS_TOKEN_EXPIRES_IN || '3h');
  const refreshMaxAgeMs = ttlToMs(process.env.REFRESH_TOKEN_EXPIRES_IN || '7d');

  const secure = process.env.NODE_ENV === 'production';

  // Using HttpOnly cookies prevents reading tokens via XSS.
  res.cookie('access_token', accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    maxAge: accessMaxAgeMs,
    path: '/',
  });

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    maxAge: refreshMaxAgeMs,
    path: '/auth/refresh',
  });
}

export function clearAuthCookies(res) {
  res.clearCookie('access_token', { path: '/' });
  res.clearCookie('refresh_token', { path: '/auth/refresh' });
}

