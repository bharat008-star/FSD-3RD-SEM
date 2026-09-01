import fs from "fs";
fs.symlink("notes.txt", "myfolder2.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Symbolic link created successfully."); 
});