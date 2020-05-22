export function generateUserID() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + Date.now();
}

export function generateGameID() {
  Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 5);
}