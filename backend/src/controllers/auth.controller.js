import bcrypt from 'bcryptjs';
import { prisma } from '../../prisma.js';
import {
  clearAuthCookies,
  setAuthCookies,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from '../utils/tokenUtils.js';
import { asyncHandler } from '../utils/helper.js';

function getEmail(v) {
  if (!v) return '';
  return String(v).trim().toLowerCase();
}

const signup = asyncHandler(async (req, res) => {
  const email = getEmail(req.body?.email);
  const password = req.body?.password;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'email and password are required' });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ success: false, message: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, passwordHash },
    select: { id: true, email: true },
  });

  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id);
  setAuthCookies(res, { accessToken, refreshToken });

  return res.json({
    success: true,
    user: { id: user.id.toString(), email: user.email },
  });
});

const login = asyncHandler(async (req, res) => {
  const email = getEmail(req.body?.email);
  const password = req.body?.password;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'email and password are required' });
  }

  const userRow = await prisma.user.findUnique({ where: { email } });
  if (!userRow) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const ok = await bcrypt.compare(password, userRow.passwordHash);
  if (!ok) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const accessToken = signAccessToken(userRow.id);
  const refreshToken = signRefreshToken(userRow.id);
  setAuthCookies(res, { accessToken, refreshToken });

  return res.json({
    success: true,
    user: { id: userRow.id.toString(), email: userRow.email },
  });
});

const refresh = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies?.refresh_token;
  if (!refreshToken) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const payload = verifyRefreshToken(refreshToken);
  if (!payload || payload.type !== 'refresh') {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const userId = payload.sub;
  const accessToken = signAccessToken(userId);
  const newRefreshToken = signRefreshToken(userId);
  setAuthCookies(res, { accessToken, refreshToken: newRefreshToken });

  return res.json({ success: true });
});

const logout = asyncHandler(async (req, res) => {
  clearAuthCookies(res);
  return res.json({ success: true });
});

const me = asyncHandler(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

  const user = await prisma.user.findUnique({
    where: { id: BigInt(userId) },
    select: { id: true, email: true, createdAt: true },
  });

  if (!user) return res.status(404).json({ success: false, message: 'User not found' });

  return res.json({
    success: true,
    user: { id: user.id.toString(), email: user.email, createdAt: user.createdAt },
  });
});

const updateName = asyncHandler(async (req, res) => {
  const userId = BigInt(req.user.id);
  const name = String(req.body?.name || '').trim();

  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }

  // Assumes your Prisma `User` model has a `name` field.
  const updated = await prisma.user.updateMany({
    where: { id: userId },
    data: { name },
  });

  if (updated.count === 0) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  return res.json({ success: true });
});

const updatePassword = asyncHandler(async (req, res) => {
  const userId = BigInt(req.user.id);
  const oldPassword = req.body?.oldPassword;
  const newPassword = req.body?.newPassword;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ success: false, message: 'oldPassword and newPassword are required' });
  }
  if (String(newPassword).length < 6) {
    return res.status(400).json({ success: false, message: 'New password must be at least 6 characters' });
  }

  const userRow = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, passwordHash: true },
  });

  if (!userRow) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  const ok = await bcrypt.compare(oldPassword, userRow.passwordHash);
  if (!ok) {
    return res.status(400).json({ success: false, message: 'Old password is incorrect' });
  }

  const passwordHash = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash },
  });

  return res.json({ success: true });
});

export {
  signup,
  login,
  refresh,
  logout,
  me,
  updateName,
  updatePassword,
};

