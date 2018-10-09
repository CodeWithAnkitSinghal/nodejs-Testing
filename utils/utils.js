module.exports.add = (a,b) => a+ b;

module.exports.square = (a) => a*a;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

//after 2 second it will give error as mocha has this time limit to run a test case
module.exports.asyncAdd = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 1000);
}

//after 2 second it will give error as mocha has this time limit to run a test case
module.exports.asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(a*a);
    }, 1000);
}