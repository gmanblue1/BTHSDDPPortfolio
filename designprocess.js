const extendButton = document.getElementById("extendFutbol");
const lebigtext = document.getElementById("longFutbol");

extendButton.onclick = function(){
    //alert("are you sure?");
    extendButton.remove();
    let text = "";
    text += "<p>We started off with some simple table footballs. Regular folds, regular shape, regular everything. It's the most basic it could get.</p>";
    lebigtext.innerHTML = text;
    lebigtext.onclick = function(){
        alert("Why did you click on the text of all things 😭");
    }
}