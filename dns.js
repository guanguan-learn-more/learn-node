const dns = require('dns');

dns.lookup('nodejs.red', (err, address, family) => {
    console.log('地址: %j 地址族: IPv%s', address, family);
});

dns.resolve('www.nodejs.red', (err, records) => {
    console.log(records);
});