function markDone(par, button) {
    par.innerHTML = par.innerHTML + ": Done!";
    button.disabled = true;
}

let todobutton1 = document.getElementById("todo1");
let todobutton2 = document.getElementById("todo2");
let todopar1 = document.getElementById("todo3");
let todopar2 = document.getElementById("todo4");

todobutton1.onclick = markDone.bind(null, todopar1, todobutton1);
todobutton2.onclick = markDone.bind(null, todopar2, todobutton2);