// Sample user list
const assignedUserList = [
    { userid: 'A', role: 'admin', name: 'Alice' },
    { userid: 'B', role: 'user', name: 'Bob' },
    { userid: 'C', role: 'admin', name: 'Charlie' },
    { userid: 'D', role: 'user', name: 'David' }
];

// Using find() - Get first admin user
const firstAdmin = assignedUserList.find(u => u.userid === 'A' && u.role === 'admin');
console.log("First Admin:", firstAdmin);

// Using filter() - Get all admins
const adminUsers = assignedUserList.filter(u => u.role === 'admin');
console.log("Admin Users:", adminUsers);

// Using map() - Get list of user IDs
const userIds = assignedUserList.map(u => u.userid);
console.log("User IDs:", userIds);

// Combining filter() and map() - Get user IDs of all admins
const adminUserIds = assignedUserList
    .filter(u => u.role === 'admin')
    .map(u => u.userid);
console.log("Admin User IDs:", adminUserIds);


// First Admin: { userid: 'A', role: 'admin', name: 'Alice' }
// Admin Users: [
//   { userid: 'A', role: 'admin', name: 'Alice' },
//   { userid: 'C', role: 'admin', name: 'Charlie' }
// ]
// User IDs: [ 'A', 'B', 'C', 'D' ]
// Admin User IDs: [ 'A', 'C' ]