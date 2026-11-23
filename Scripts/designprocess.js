const extendFutbol = document.getElementById("extendFutbol");
const jalenmarquisbrunson = document.getElementById("longFutbol");
const extendFlip = document.getElementById("extendFlip");
const joshaaronhart = document.getElementById("longFlip");

extendFutbol.onclick = function(){
    extendFutbol.remove();
    let text = "";
    text += "<p>We started off with some simple table footballs. Regular folds, regular shape, regular everything. It's the most basic it could get. The good part about this is that they were simple and minimal. The bad part was that we found them to be insanely difficult to score without having it fall off.</p>";
    text += "<img src=\"../Images/fut1.jpg\">";
    text += "<p>We saw how hard it was and started to make different designs. This made the Plane and the Plank. The plane was amazing because while I initially did it to joke around, it was actually much easier to score with it. The plank was minimal and worked similar to the plane. They were still inconsistent, the hardest problem to solve since we need solutions for ourselves.</p>";
    text += "<img src=\"../Images/fut2.jpg\">";
    text += "<img src=\"../Images/fut3.jpg\">";
    text += "<p>We saw the groups near us start to make them REALLY long. And so, we did the same. The advantage is that inconsistency was basically wiped. The problem is that Mr. Fung started giving us constraints to start further back, and it became too inconsistent.</p>";
    text += "<img src=\"../Images/fut4.jpg\">";
    text += "<p>Here's the final product. It's a little similar to the last one but weight is distributed much different. It was better at consistency, but it came to no evail as we were barely out of last place.</p>"
    text += "<img src=\"../Images/fut5.jpg\">";
    jalenmarquisbrunson.innerHTML = text;
}

extendFlip.onclick = function(){
    extendFlip.remove();
    let text = "";
    text += "<p>By using basic bottles, it introduced an unreliable result that based off luck. Do 5 in a row and then you'll miss the next 5. Inconsistency is the enemy of solution. It was lightweight - which was the meta, but it couldn't consistently flip.</p>";
    text += "<img src=\"../Images/flip5.png\">"
    text += "<p>We designed the Raft, which provided a great and lightweight safety net to ensure that flipping was at least more reliable. Using this design (which was pretty light) we were able to breeze through flipping on the table. But once we got to the floor, it proved to be difficult.</p>";
    text += "<img src=\"../Images/flip2.png\">"
    text += "<p>Then we just threw stuff at the wall. Whatever design we thought was good, we made. It came yet again to failure, but we did get through the floor part. They were more reliable than the raft, but they couldn't survive being thrown on the floor across the table.</p>"
    text += "<img> src=\"../Images/flip1.jpg\">"
    text += "<img> src=\"../Images/flip3.png\">"
    text += "<img> src=\"../Images/flip4.png\">"
    joshaaronhart.innerHTML = text;
}