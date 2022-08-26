var i; // index!
var priority = window.document.getElementById("priorities") //datalist
var options = window.document.getElementsByTagName('option') // it's getting the Urgent, Medium and Low options.
const res_Urgent = window.document.getElementById("urgent_chores") //div
const res_Medium = window.document.getElementById("medium_chores") //div
const res_Low = window.document.getElementById("low_chores") //div
const submit = window.document.getElementById("sub") // the submit button

function update() {
    var selectedOption = priority.options[priority.selectedIndex]; //it's just for control of which priority we're setting.

    console.log(selectedOption);
}

function click(){ // this one is caotic and terribly long, but it basically creates all div children and everything it has inside
    var span = document.getElementById("res_submit"); // this one will create the "task created" message below the submit button. in  this line, just got it element from the DOM!
    var task = document.getElementById('tasktitle').value //task name input
    var description = document.getElementById('taskdescription').value //task description input

    let last_task =  localStorage.getItem('task');
    let last_task_desc = localStorage.getItem('description');

    //var selectedValue = priorities.value;
    var selectedOption = priority.options[priority.selectedIndex];

    if (selectedOption == priority.options[0]){
        const res_Urgent_task = document.createElement("div"); // creating our task div!!
        res_Urgent_task.setAttribute("class", "urgent-child-div");
        res_Urgent_task.id = "urgent_div" + document.getElementsByClassName("urgent-child-div").length;

        const butUrgent = document.createElement("input"); // creating our delete button!
        butUrgent.setAttribute("class", "delete Urgent"); // really important class for our buttons
        butUrgent.id = "delete-Urgent"; //separating each button from each other -- we're giving it an unique name! it's just to specify which of our delete buttons it is
        butUrgent.setAttribute("type", "button");
        butUrgent.setAttribute("onclick", "Deletar_U()");

        

        res_Urgent_task.innerHTML = "<h3>"+ task +"</h3><p>" + description +"</p>"; // after getting the task input and desc input, we are nesting it in our task div
        span.innerHTML = "Urgent task added!" // the message when you submit :)

        res_Urgent.appendChild(res_Urgent_task); // it's getting it inside ou chore board!
        res_Urgent_task.appendChild(butUrgent); // also getting out button inside our chore board :)
        

        console.log("Done. Urgent task added.")
    } else if ( selectedOption == priority.options[1]){ // it's doing the same above it. you'll get it.

        const res_Medium_task = document.createElement("div");
        res_Medium_task.setAttribute("class", "medium-child-div");
        res_Medium_task.id = "medium_div" + document.getElementsByClassName("medium-child-div").length;

        const butMedium = document.createElement("input");
        butMedium.setAttribute("class", "delete Medium");
        butMedium.id = "delete-Medium";
        butMedium.setAttribute("type", "button");
        butMedium.setAttribute("onclick", "Deletar_M()");

        res_Medium_task.innerHTML = "<h3>"+ task +"</h3><p>" + description +"</p>";
        span.innerHTML = "Medium task added!"
        
        res_Medium.appendChild(res_Medium_task);
        res_Medium_task.appendChild(butMedium);

        console.log("Done. Medium task added.")
    } else if ( selectedOption == priority.options[2]){

        const res_Low_task = document.createElement("div");
        res_Low_task.setAttribute("class", "low-child-div");
        res_Low_task.id = "low_div" + document.getElementsByClassName("low-child-div").length;

        const butLow = document.createElement("input");
        butLow.setAttribute("class", "delete Low");
        butLow.id = "delete-Low";
        butLow.setAttribute("type", "button");
        butLow.setAttribute("onclick", "Deletar_L()");


        res_Low_task.innerHTML = "<h3>"+ task +"</h3><p>" + description +"</p>";
        span.innerHTML = "Low task added!"
        
        res_Low.appendChild(res_Low_task);
        res_Low_task.appendChild(butLow);

        console.log("Done. Low task added.")
    } else {
        console.log("Failed"); // if it doesnt create anything, it's bc there's something wrong with reading input (the code)
    }


}


function Deletar_U(){ // it's the res_Urgent delete button function!

    var buttons = document.getElementsByClassName("delete Urgent"); // i didn't need to indicate it but i was thinking about a general function that didn't work out. i intend to try it again.
    var buttonU = document.getElementById("delete-Urgent");
    var Urgent_children = document.getElementsByClassName("urgent-child-div");
    Urgent_children.children = buttons;

    var task = document.getElementById('tasktitle').value //task name input
    var description = document.getElementById('taskdescription').value //task description input

    if (isDescendant(res_Urgent, buttons) !== 0 && res_Urgent.firstElementChild !== null) {

        buttonU.parentElement.remove();
        
        localStorage.removeItem(task);
        localStorage.removeItem(description);

        console.log("Done. Urgent task removed.")

      } 
        
}


function Deletar_M(){ //for some reason this one doesn't work like its siblings. it's the res_Medium delete button function.

    var buttons = document.getElementsByClassName("delete Medium");
    var buttonM = document.getElementById("delete-Medium");
    //var buttons = document.getElementsByClassName("delete");
        buttonM.parentElement.remove();

        console.log("Done. Medium task removed.")
        
}

function Deletar_L(){ // it's the res_Low delete button function

    var buttons = document.getElementsByClassName("delete Low");
    var buttonLow = document.getElementById("delete-Low");
    
    if (isDescendant(res_Low, buttons) !== 0 && res_Low.firstElementChild !== null){

       buttonLow.parentElement.remove();
        

        console.log("Done. Low task removed.")

      } 
        
}


function isDescendant(parent, child) { //it's all about knowing what thing here is child of something. they're all connected so its important to define it.
    var node = child.parentNode; // this function is very useful to avoid repeating of checking it ^ and it will return if it parameter is (true) or not(false) parent of child given second parameter
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

submit.addEventListener("click", click); // adding to submit button in DOM our click function that will fill our chore board!
