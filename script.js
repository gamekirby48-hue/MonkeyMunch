const adminUsers = [
  'CoolDuck',
  'Memez'
];

// SAFE ADMIN CHECK (USE THIS EVERYWHERE)
function isAdminUser(username) {
  return adminUsers.some(
    u => u.toLowerCase() === (username || '').toLowerCase().trim()
  );
}
