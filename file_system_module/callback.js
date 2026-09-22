function getuser(id, callback) {
    setTimeout(() => {
        console.log("Fetching user from database...");
        const user = { id: id, name: "John Doe" };
        callback(null, user);
    }, 2000)
}
function getprofile(user, callback) {
    setTimeout(() => {
        console.log("Fetching profile from database...");
        const profile = { userId: user.id, bio: "This is a sample bio" };
        callback(null, profile);
    }, 2000)
}
function getposts(user, callback) {
    setTimeout(() => {
        console.log("Fetching posts from the database...");
        const posts = [
        "post 1", "post 2", "post 3"
        ];
        callback(null, posts);
    }, 2000)
}
getuser(1, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
        getprofile(user, (err, profile) => {
            if (err) {
                console.log(err);
            } else {
                console.log(profile);
                getposts(user, (err, posts) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(posts);
                    }
                });
            }
        });
    }
});