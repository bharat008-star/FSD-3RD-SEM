// readable stream
import fs, { read, write } from "fs";
const readStream = fs.createReadStream("./input.txt","utf-8");
readStream.on("data", (chunk) => {
    console.log("Data chunk received: ");
    console.log("Data", chunk);
});
readStream.on("end", () => {
    console.log("No more data to read.");
});
readStream.on("error", (err) => {
    console.log("Error: ", err);
});
// CREATING A WRITABLE STREAM
const writeStream = fs.createWriteStream("./output.txt");
//writeStream.write("Hello, this is a writable stream.\n");

writeStream.on("finish", () => {
    console.log("All data has been written to the file.");
});
writeStream.on("error", (err) => {
    console.log("Error: ", err);
});
readStream.pipe(writeStream);
//writeStream.end("This is the end of the writable stream.\n");
