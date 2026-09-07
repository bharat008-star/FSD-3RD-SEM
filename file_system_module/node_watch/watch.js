const fs = require("fs");
const watcher = fs.watch("./intro.txt", (eventType, filename) => {
    console.log("Event Type: ",eventType)
    console.log("Filename: " ,filename)
});

// fs.watch("./intro.txt", (eventType, filename) => {
// console.log("Event Type: ",eventType)
// console.log("Filename: " ,filename)
// });
setTimeout(() => {
    watcher.close();
   console.log("Stopping the watch after 5 seconds"); 
}, 5000);