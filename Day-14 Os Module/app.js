//!Comman Js Method -------------------------------------------------------
const os = require("os");
// or (ES modules)
// import os from 'os';

//!Commonly used methods
// console.log(os.platform());   // 'win32', 'linux', 'darwin'
// console.log(os.type());       // 'Windows_NT', 'Linux', 'Darwin'
// console.log(os.arch());       // 'x64', 'arm64'
// console.log(os.release());    // OS version/release number
// console.log(os.hostname());   // computer name
// console.log(os.homedir());    // e.g. 'C:\\Users\\Shubham'
// console.log(os.tmpdir());     // temp directory path
// console.log(os.uptime());     // system uptime in seconds

//!Memory

// console.log(os.totalmem());   // total RAM in bytes
// console.log(os.freemem());    // free RAM in bytes

// Convert to GB
// const toGB = (bytes) => (bytes / 1024 ** 3).toFixed(2);
// console.log(`Total: ${toGB(os.totalmem())} GB`);
// console.log(`Free: ${toGB(os.freemem())} GB`);

//!CPU

// const cpus = os.cpus();
// console.log(cpus.length);     // number of logical cores
// console.log(cpus[0].model);   // CPU model name
// console.log(cpus[0].speed);   // speed in MHz

//!Network and user info
// console.log(os.networkInterfaces()); // IP/MAC addresses of all interfaces
// console.log(os.userInfo());          // { username, uid, gid, shell, homedir }

//!Constants and helpers
// console.log(os.EOL);          // '\n' on Linux/Mac, '\r\n' on Windows
// console.log(os.constants.signals.SIGINT); // signal constants
// console.log(os.endianness()); // 'LE' or 'BE'
// console.log(os.loadavg());    // [1, 5, 15 min] load averages (always [0,0,0] on Windows)

//!Practical example: system info endpoint

//!========================================================================

// console.log("os plateform:", os.platform());
// console.log("os architecture:", os.arch());
// console.log("os cpu:", os.cpus());
// console.log("total memory : ", os.totalmem());
// console.log("free memory :", os.freemem() / 1024 / 1024 / 1024);
// console.log("Host name : ", os.hostname());
// console.log("Temporary Directory  :", os.tmpdir());

