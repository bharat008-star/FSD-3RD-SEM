const fs = require("fs");

const watcher = fs.watchFile("./intro.txt",{ interval: 5000 }, (curr, prev) => {
    console.log("Current Modified Time: ", curr.birthtime.toISOString());
    console.log("Previous Modified Time: ", prev.birthtime.toISOString());
});
