let choix = true;

function change() {
    let button = document.getElementById("button");
    if (choix == true) {
        button.style.backgroundColor = "black";
        choix = false;
    }
    else{
        button.style.backgroundColor = "#a50050";
        choix = true
    }
}
