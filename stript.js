const button = document.getElementById("clickButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Button clicked successfully!";
});
