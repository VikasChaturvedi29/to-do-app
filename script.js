function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let item = document.createElement("li");

    item.textContent = task;

    document.getElementById("taskList").appendChild(item);

    document.getElementById("taskInput").value = "";
}
