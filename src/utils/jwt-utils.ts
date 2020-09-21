import jwt from 'jsonwebtoken';

const extractPayloadFromToken = (token: string | null) => {
  if (!token) return false;
  const payload = jwt.decode(token);
  if (!payload || typeof(payload) === 'string') return false;
  return payload;
};

export const isValidToken = (token: string | null) => {
  const payload = extractPayloadFromToken(token);
  return !!payload && Date.now() <= payload.exp * 1000;
};

// GET USER ID
export const getUserIdFromToken = (token: string | null) => {
  const payload = extractPayloadFromToken(token);
  return !!payload && payload.id;
};