// JavaScript source code

const requestButton = document.getElementById("requestButton");
const message = document.getElementById("message");

requestButton.addEventListener("click", function () {
    message.textContent =
        "Your maintenance request form would open here!";
});


function sayHello() {
    alert("Hello, World! I am Krista Deken, welcome to my World!");
}
function showExperience() {
    alert("I have experience in C#, VB.NET, SQL, software testing, and process improvement!");
}

function showFit() {
    alert("I combine technical problem-solving skills with communication, adaptability, and a people-first approach!");
}
function openResume() {
    window.open("resume.pdf", "_blank");
}