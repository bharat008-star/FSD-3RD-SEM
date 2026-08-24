function fetchUserFromDatabase() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve({
                id: 1,
                username: "John Doe"
            });
        } else {
            reject(new Error("Failed to fetch user from database"));
        }
    });
}

async function getuser(){
    try {
        const user = await fetchUserFromDatabase();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
    getuser();
// const promise1 = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve({
//         id : 2,
//         name: "John Do"
//     });
//   } else {
//     reject(new Error("Failed to fetch user for database"));
//   }
// });

// promise1
//   .then(user => {
//     console.log(user);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// const promise2 = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve({
//         id : 1,
//         name: "John Doe"
//     });
//   } else {
//     reject(new Error("Failed to fetch user for database"));
//   }
// });

// promise2
//   .then(user => {
//     console.log(user);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Promise.allSettled([
//     promise1,promise2
// ])
// .then(result => {
//     console.log("All promises settled:", result);
// })
// .catch(error => {
//     console.log("One or more promises failed:", error);
// });

// promise1
// .then((Response)=> {
//     return response;
// })
// .then((response2) => {
//     console.log(response2.username);
// })
// .catch((error) => {
//     console.log(error.message);
// })