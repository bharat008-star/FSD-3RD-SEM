function flightService() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Flight information retrieved");
        }, 1000);
    });
}

function hotelService() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hotel information retrieved");
        }, 1500);
    });
}

function cabService() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cab information retrieved");
        }, 800);
    });
}

function insuranceService() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Travel insurance information retrieved");
        }, 1200);
    });
}

function flightServer1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Flight Server 1 responded");
        }, 2000);
    });
}

function flightServer2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Flight Server 2 responded");
        }, 1000);
    });
}

function backupServer1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server 1 unavailable");
        }, 500);
    });
}

function backupServer2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Server 2 provided flight information");
        }, 1500);
    });
}

function backupServer3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Server 3 provided flight information");
        }, 2000);
    });
}

console.log("--- Promise.all() ---");

Promise.all([
    flightService(),
    hotelService(),
    cabService(),
    insuranceService()
])
.then((results) => {
    console.log("All services successful:");
    console.log(results);
})
.catch((error) => {
    console.log("One or more services failed:", error);
});

console.log("--- Promise.race() ---");

Promise.race([
    flightServer1(),
    flightServer2()
])
.then((result) => {
    console.log("First server response:", result);
})
.catch((error) => {
    console.log("First server failed:", error);
});

console.log("--- Promise.allSettled() ---");

Promise.allSettled([
    flightService(),
    hotelService(),
    cabService(),
    insuranceService()
])
.then((results) => {
    console.log("Results of all services:");

    results.forEach((result, index) => {
        console.log(`Service ${index + 1}:`, result);
    });
});

console.log("--- Promise.any() ---");

Promise.any([
    backupServer1(),
    backupServer2(),
    backupServer3()
])
.then((result) => {
    console.log("First successful response:", result);
})
.catch((error) => {
    console.log("All servers failed:", error);
});