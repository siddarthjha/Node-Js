const crypto = require('crypto');
// Hash Based Message Authentication Code (HMAC) -> Applying hash both on data and secret key to result final hash
const secret = 'attack';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Commence Attack on Marleyland')  
                   .digest('hex');  
console.log(hash);  

// Encryption using AES Cipher 192-bit
const cipher = crypto.createCipher('aes192', 'a password');  
var encrypted = cipher.update('Attack on Titan', 'utf8', 'hex');  
encrypted += cipher.final('hex');  
console.log(encrypted);  

// Decryption
