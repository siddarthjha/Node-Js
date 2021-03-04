const dns = require('dns');
dns.lookup('www.google.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
  console.log('Error:', err);
}); 

dns.lookupService('115.98.210.132', 22, (err, hostname, service) => {  
  console.log('Hostname:', hostname);
  console.log('service:', service);
  console.log('Error:', err);  
    // Prints: localhost  
});  