
let inreselt = document.getElementById("result");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
        let inBtn = buttons[i].textContent;

        if (inBtn === "Del") {
            deleteOne();
        }
        else if (inBtn === "=") {
            answer();
        }
        else if (inBtn === "AC") {
            allClear();
        }
        else {
            newinput(inBtn);
        }


    });
}



function deleteOne() {
    inreselt.value = inreselt.value.slice(0, -1);
}

function answer() {
    let doininput = inreselt.value;

    if (doininput) {
        let result = eval(doininput);
        if (result !== undefined) {
            inreselt.value = result;
        } else {
            inreselt.value = "Error";
        }
    } else {
        inreselt.value = "Error";
    }

}

function allClear(){
    inreselt.value = "";
}


function newinput(inBtn){
    inreselt.value += inBtn;
}


