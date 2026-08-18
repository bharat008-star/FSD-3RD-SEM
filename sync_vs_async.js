console.log("========== synchronous start ==========");
for (let i = 0; i <=10; i++) {
    console.log(`${i}`);
}      
console.log("========== synchronous end ==========");
console.log("========== asynchronous start ==========");
setTimeout(() => {
    console.log("This is a message from setTimeout");
}, 2000);
console.log("========== asynchronous end ==========");