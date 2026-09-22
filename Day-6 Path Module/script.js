//! Modules--three type of modules in Nodejs  - 1.built-in module-fs,path,...., 2.Third Party Module-express,..., 3.UserDefine Module - app.js,...
//!1) - built-in Module - path module ------------
const path = require("path");
// console.log(path);

// C:\Users\HP\Desktop\All Qspider\Qspider5\NodejsByShresthSir\Day-6 Path Module>node app.js
// <ref *1> {
//   resolve: [Function: resolve],
//   normalize: [Function: normalize],
//   isAbsolute: [Function: isAbsolute],
//   join: [Function: join],
//   relative: [Function: relative],
//   toNamespacedPath: [Function: toNamespacedPath],
//   dirname: [Function: dirname],
//   basename: [Function: basename],
//   extname: [Function: extname],
//   format: [Function: bound _format],
//   parse: [Function: parse],
//   matchesGlob: [Function: matchesGlob],
//   sep: '\\',
//   delimiter: ';',
//   win32: [Circular *1],
//   posix: <ref *2> {
//     resolve: [Function: resolve],
//     normalize: [Function: normalize],
//     isAbsolute: [Function: isAbsolute],
//     join: [Function: join],
//     relative: [Function: relative],
//     toNamespacedPath: [Function: toNamespacedPath],
//     dirname: [Function: dirname],
//     basename: [Function: basename],
//     extname: [Function: extname],
//     format: [Function: bound _format],
//     parse: [Function: parse],
//     matchesGlob: [Function: matchesGlob],
//     sep: '/',
//     delimiter: ':',
//     win32: [Circular *1],
//     posix: [Circular *2],
//     _makeLong: [Function: toNamespacedPath]
//   },
//   _makeLong: [Function: toNamespacedPath]
// }

//!----------------------------------------------------------------------------------------------
//! dirname: [Function: dirname]
// console.log("DirectoryName :", __dirname);

// DirectoryName : C:\Users\HP\Desktop\All Qspider\Qspider5\NodejsByShresthSir\Day-6 Path Module

// console.log("FileName : ", __filename);
// FileName :  C:\Users\HP\Desktop\All Qspider\Qspider5\NodejsByShresthSir\Day-6 Path Module\app.js

//!  1. path.join(arg1,arg2,arg3) => relative path - parent\child\abc

//1. relative path----
// const relativePath = path.join("parent", "child", "abc");
// console.log(relativePath); //relative path - parent\child\abc

//2. absolute path---
// const absolutePath = path.join(__dirname, "parent", "child", "abc");
// console.log(absolutePath); //\parent\child\abc

//! 2. path.resolve()

// const resolvePathOutput = path.resolve("xyz.txt");
// console.log(resolvePathOutput); //C:\Users\HP\Desktop\All Qspider\Qspider5\NodejsByShresthSir\Day-6 Path Module\app.js

//!3. path.dirname()
// const resolvePath = path.resolve("app.js");
// const dirOutput = path.dirname(resolvePath);
// console.log(dirOutput); //C:\Users\HP\Desktop\All Qspider\Qspider5\NodejsByShresthSir\Day-6 Path Module

//!4. path.basename()
// const baseOutput = path.basename(__filename);
// console.log(baseOutput); //app.js

//!5. path.extname()
// const extensionOutput = path.extname(__filename);
// console.log("ExtensionOutput :", extensionOutput); //ExtensionOutput : .js

//! 6. path.parse(path)
// let parseOutput = path.parse(__filename);
// console.log("ParseOutput: ", parseOutput);
// // console.log("ParseOutput: ", parseOutput.name);
// // console.log("ParseOutput: ", parseOutput.ext);

// ParseOutput:  {
//   root: 'C:\\',
//   dir: 'C:\\Users\\HP\\Desktop\\All Qspider\\Qspider5\\NodejsByShresthSir\\Day-6 Path Module',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

//! 7. path.format(parseObj)
// // You need this line before using parseObj
// const parseObj = path.parse("C:/Users/HP/Desktop/example.txt");
// // console.log(parseObj);
// const formatOutput = path.format(parseObj);
// console.log("FormatOutput:", formatOutput); //FormatOutput: C:/Users/HP/Desktop\example.txt

//! 8. path.isAbsolute(path) => true or false
// const relativePath = path.join("parent", "child", "xyz.txt");
// const absolutePath = path.join(__dirname, "parent", "child", "xyz.txt");

// const output1 = path.isAbsolute(relativePath);
// const output2 = path.isAbsolute(absolutePath);

// console.log("output1:", output1); //output1: false
// console.log("output2:", output2); //output2: true

//! 9. path.normalize()
// const x =
//   "F:\\Premium Batch\\M-8 Premium Backend 15 Sep\\NODE\\Day-6 Path Module\\..\\Day-5 Node Server\\server.js";

// const normalizeOutput = path.normalize(x);
// console.log("NormalizeOutput:", normalizeOutput); //NormalizeOutput: F:\Premium Batch\M-8 Premium Backend 15 Sep\NODE\Day-5 Node Server\server.js


