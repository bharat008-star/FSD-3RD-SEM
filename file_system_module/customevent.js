import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();
eventEmitter.on("login", () => {
    console.log("User logged in successfully");
});
eventEmitter.emit("login");
