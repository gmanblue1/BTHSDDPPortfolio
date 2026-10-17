const extendButton = document.getElementById("extendFutbol");
const lebigtext = document.getElementById("longFutbol");

extendButton.onclick = function(){
    extendButton.remove();
    let text = "";
    text += "<p>We started off with some simple table footballs. Regular folds, regular shape, regular everything. It's the most basic it could get.</p>";
    text += "<img src=\"fut1.jpg\">"
    text += "<p>We saw how hard it was and started to make different designs. This made the Hello Fung plane and the Plank.</p>"
    text += "<img src=\"fut2.jpg\">"
    text += "<img src=\"fut3.jpg\">"
    text += "<p>After a few revisions to accomadate to different constraints, we got the final product.</p>"
    text += "<img src=\"fut4.jpg\">"
    text += "<img src=\"fut5.jpg\">"
    lebigtext.innerHTML = text;
}