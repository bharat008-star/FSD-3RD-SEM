import fs from 'fs';

// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds");
// }, 2000);
// fs.readFile('intro.txt', 'utf8', (err, data) => {
//     console.log("file read successfully");
// });
// setInterval(() => {
//     console.log("This message is displayed every 5m seconds");
// },5000);
// setImmediate(() => {
//     console.log("This message is displayed immediately after the current event loop");
// });
//event loop 6 phase:-
//1. timers phase
//2. pending callbacks phase
//3. idle, prepare phase
//4. poll phase
//5. check phase
//6. close callbacks phase

//  fs.readFile('intro.txt', 'utf8', (err, data) => {
//      console.log("file read successfully");
//         setTimeout(() => {
//             console.log("This message is displayed after 0 seconds");
//         }, 0);
//         setImmediate(() => {
//             console.log("This message is displayed immediately after the current event loop");
//         });
//  //});
//  Capturing Phase: The event starts at the top root of the document (like the window or html element) and travels down the tree toward the specific target element.
//  Target Phase: The event reaches the exact element where the action happened.
//  Bubbling Phase: The event moves back up from the target element toward the root of the document. This is the default behavior for most events