var i;
var priority = window.document.getElementById("priorities") //datalist
var options = window.document.getElementsByTagName('option')
const res_Urgent = window.document.getElementById("urgent_chores") //div
const res_Medium = window.document.getElementById("medium_chores") //div
const res_Low = window.document.getElementById("low_chores") //div
const submit = window.document.getElementById("sub")




function update() {
    var selectedOption = priority.options[priority.selectedIndex];

    console.log(selectedOption);
}

function click(){
    var span = document.getElementById("res_submit");
    var task = document.getElementById('tasktitle').value //task name input
    var description = document.getElementById('taskdescription').value //task description input

    //var selectedValue = priorities.value;
    var selectedOption = priority.options[priority.selectedIndex];

    if (selectedOption == priority.options[0]){
        const res_Urgent_task = document.createElement("div");
        res_Urgent_task.setAttribute("class", "urgent-child-div");
        const butUrgent = document.createElement("input");
        butUrgent.setAttribute("class", "delete");
        butUrgent.setAttribute("id", "delete-Urgent");
        butUrgent.setAttribute("type", "button");
        butUrgent.setAttribute("onclick", "Deletar_U()");
        

        res_Urgent.appendChild(res_Urgent_task);
        res_Urgent.appendChild(butUrgent);

        res_Urgent_task.innerHTML = "<h3>"+ task +"</h3><p>" + description +"</p>";
        span.innerHTML = "Urgent task added!"

        console.log("Done. Urgent task added.")
    } else if ( selectedOption == priority.options[1]){

        const res_Medium_task = document.createElement("div");
        res_Medium_task.setAttribute("class", "medium-child-div");
        const butMedium = document.createElement("input");
        butMedium.setAttribute("class", "delete");
        butMedium.setAttribute("id", "delete-Medium");
        butMedium.setAttribute("type", "button");
        butMedium.setAttribute("onclick", "Deletar_M()");

        res_Medium_task.innerHTML = "<h3>"+ task +"</h3><p>" + description +"</p>";
        span.innerHTML = "Medium task added!"
        
        res_Medium.appendChild(res_Medium_task);
        res_Medium.appendChild(butMedium);

        console.log("Done. Medium task added.")
    } else if ( selectedOption == priority.options[2]){

        const res_Low_task = document.createElement("div");
        res_Low_task.setAttribute("class", "low-child-div");
        const butLow = document.createElement("input");
        butLow.setAttribute("class", "delete");
        butLow.setAttribute("id", "delete-Low");
        butLow.setAttribute("type", "button");
        butLow.setAttribute("onclick", "Deletar_L()");
        const trashicon = document.createElement("span");
        trashicon.setAttribute("class", "glyphicon glyphicon-trash");
        butLow.innerHTML = trashicon.outerHTML;


        res_Low_task.innerHTML = "<h3>"+ task +"</h3><p>" + description +"</p>";
        span.innerHTML = "Low task added!"
        
        res_Low.appendChild(res_Low_task);
        res_Low.appendChild(butLow);

        console.log("Done. Low task added.")
    } else {
        console.log("Failed");
    }


}

function Deletar_U(){

    var buttons = document.getElementsByClassName("delete");
    res_Urgent_task = document.getElementsByClassName("urgent-child-div");

    if (isDescendant(res_Urgent, buttons) !== 0 && res_Urgent.firstElementChild !== null) {

        res_Urgent.removeChild(res_Urgent.firstElementChild);

        console.log("Done. Urgent task removed.")

      } 
        
}


function Deletar_M(){

    //var buttons = document.getElementsByClassName("delete");

        res_Medium.removeChild(res_Medium.firstElementChild);

        console.log("Done. Medium task removed.")
        
}

function Deletar_L(){

    var buttons = document.getElementsByClassName("delete");
    if (isDescendant(res_Low, buttons) !== 0 && res_Low.firstElementChild !== null){

        res_Low.removeChild(res_Low.firstElementChild);

        console.log("Done. Low task removed.")

      } 
        
}
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

submit.addEventListener("click", click);