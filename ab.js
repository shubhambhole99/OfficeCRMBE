const bcrypt = require('bcrypt');

(async () => {password="password123"
const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword);
})()

// console.log(hashedPassword)
