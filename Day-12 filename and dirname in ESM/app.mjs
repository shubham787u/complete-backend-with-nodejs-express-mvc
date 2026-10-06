//!=========================================
// Yes, it's possible to run it. The .mjs extension tells Node to treat the file as an ES module, so you can use import/export syntax without adding "type": "module" to package.json.
// Top-level await works in .mjs files, so you can write const data = await fetch(url) directly, with no wrapping async function.
// You can't use require() or __dirname directly. Use import and import.meta.url (with fileURLToPath) instead. 

import {fileURLToPath} from "url";
import {dirname} from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("__filename:",__filename);
console.log("__dirname:",__dirname);