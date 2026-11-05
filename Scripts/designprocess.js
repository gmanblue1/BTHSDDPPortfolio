const extendFutbol = document.getElementById("extendFutbol");
const jalenmarquisbrunson = document.getElementById("longFutbol");
const extendFlip = document.getElementById("extendFlip");
const joshaaronhart = document.getElementById("longFlip");

extendFutbol.onclick = function(){
    extendFutbol.remove();
    let text = "";
    text += "<p>We started off with some simple table footballs. Regular folds, regular shape, regular everything. It's the most basic it could get.</p>";
    text += "<img src=\"../Images/fut1.jpg\">";
    text += "<p>We saw how hard it was and started to make different designs. This made the Hello Fung plane and the Plank.</p>";
    text += "<img src=\"../Images/fut2.jpg\">";
    text += "<img src=\"../Images/fut3.jpg\">";
    text += "<p>After a few revisions to accomadate to different constraints, we got the final product.</p>";
    text += "<img src=\"../Images/fut4.jpg\">";
    text += "<img src=\"../Images/fut5.jpg\">";
    jalenmarquisbrunson.innerHTML = text;
}

extendFlip.onclick = function(){
    extendFlip.remove();
    let text = "";
    text += "<p>By using basic bottles, it introduced an unreliable result that based off luck. Do 5 in a row and then you'll miss the next 5.</p>";
    text += "<img src=\"../Images/flip5.jpg\">"
    text += "<p>We designed the Raft, which provided a great and lightweight safety net to ensure that flipping was at least more reliable.</p>";
    text += "<img src=\"../Images/flip2.jpg\">"
    joshaaronhart.innerHTML = text;
}