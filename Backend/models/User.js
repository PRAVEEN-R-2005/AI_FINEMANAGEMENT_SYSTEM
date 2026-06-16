const db = require("../config/db");

// Register User
const registerUser = (userData, callback) => {

    const sql = `
    INSERT INTO users
    (username,email,password,role)
    VALUES (?,?,?,?)
    `;

    db.query(
        sql,
        [
            userData.username,
            userData.email,
            userData.password,
            userData.role
        ],
        callback
    );
};


// Find User By Email
const findUserByEmail = (email, callback) => {

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql,[email],callback);

};


module.exports = {

    registerUser,

    findUserByEmail

};