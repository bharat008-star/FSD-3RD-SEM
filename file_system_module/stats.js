const fs = require("fs");


fs.stat("notes.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("information about file:[notes.txt]", stats)
    console.log("size of this file [notes.txt]", stats.size)
    console.log('creation time of the file[notes.txt]',stats.birthtime.toISOString().split('T')[0])
    console.log('last access time of the file[notes.txt]',stats.atime.toISOString().split('T')[0])
})