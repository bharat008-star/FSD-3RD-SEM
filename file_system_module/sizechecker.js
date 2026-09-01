const fs = require("fs");

// function sizechecker(filePath) {
    
//     fs.stat(filePath, (err, stats) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(`Size of the file [${filePath}]:`, stats.size, "bytes");

//     }); 
// }




// function sizechecker(filePath) {
//     const limit = 2*1024*1024; // 2 MB in bytes
//  const stats = fs.statSync(filePath);
//     if (stats.size > limit) {
//         console.log(`File [${filePath}] exceeds the size limit of 2 MB. Size: ${stats.size} bytes`);
//     } else {
//         console.log(`File [${filePath}] is within the size limit. Size: ${stats.size} bytes`);
//     }
// }
// sizechecker("notes.txt");



fs.stat("./myfolder1.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Size of the file [myfolder1.txt]:`, stats.size, "bytes");

});