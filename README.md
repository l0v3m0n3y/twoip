# twoip
JavaScript library for 2ip.me
# main
```js
const {twoip} = require('./twoip');

const ip = new twoip();
ip.port_check(ip,port).then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
