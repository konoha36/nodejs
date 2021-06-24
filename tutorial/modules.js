//CommonJS,every file is module (by default)
//Modules = Encapsulated Code (only shere minimum)
// const name = require('./4-name')
// const sayHi = require('./5-utlist')
// const data = require('./6-alternative')
// require('./7-mind-genade')

// console.log(data)
//  sayHi('wankan')
//  sayHi(name.palm)
//  sayHi(name.cat)

//const os = require('os')

//info about current user
//const user = os.userInfo()
//console.log(user);

//const network = os.networkInterfaces()
//console.log(network);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS);
//method returns the system uptime in seconds

//const path = require('path')


console.log(path.sep)

const filePath = path.join('/subfolder/','test.text')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
//console.log(`The System Uptime is ${os.uptime()} seconds`);

const absolute = path.resolve(__dirname,'subfolder','test.text')
console.log(absolute);