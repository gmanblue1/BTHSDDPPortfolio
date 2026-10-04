let endOfYearStatement = document.getElementById("endOfYearStatement");
let endOfYearButton = document.getElementById("endOfYearButton");
let now = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[now.getMonth()];

endOfYearButton.onclick = function() {
    endOfYearStatement.innerHTML = "You can't see this yet! It's still " + currentMonth + "! Come back at the end of the year to see my statement. For now you can <a href='./directory.html'>see the current Directory</a>.";
}
const jsChecker = document.createElement("p");
jsChecker.innerHTML = "If you are seeing this, it means that <a href='https://en.wikipedia.org/wiki/JavaScript'>JavaScript</a> is working!";