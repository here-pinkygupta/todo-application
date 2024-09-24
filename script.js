
function addTask(){

    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value.trim();

    if (inputValue === "") {
        alert("Please enter a task before adding.");
        return;
    }


    const newElement = document.createElement("li");
    let tasks = document.getElementById('tasklist');
    tasks.appendChild(newElement);
    newElement.textContent = document.getElementById('input').value;
    document.getElementById('input').value = "";
    deletetask(newElement);
}
function deletetask(newElement){
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "DELETE";
    newElement.appendChild(deletebtn);
    deletebtn.onclick = function(){
        newElement.remove();
    }
}