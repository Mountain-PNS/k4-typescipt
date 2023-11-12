"use strict";
const customs = [
    {
        type: "admin",
        name: "Son",
        age: 20,
        role: "Administrator",
    },
    {
        type: "user",
        name: "Khanh",
        age: 23,
        occupation: "Student",
    },
    {
        type: "user",
        name: "Hien",
        age: 21,
        occupation: "Student",
    },
];
function checkAdmin(custom) {
    return custom.type === "admin";
}
function checkUser(custom) {
    return custom.type === "user";
}
function logClient(client) {
    let roleClient = "";
    if (checkAdmin(client)) {
        roleClient = client.role;
    }
    if (checkUser(client)) {
        roleClient = client.occupation;
    }
    console.log(`Tao là ${client.name} và tao ${client.age} tuổi vai trò của tao là ${roleClient}`);
}
customs.filter(checkAdmin).forEach(logClient);
customs.filter(checkUser).forEach(logClient);
