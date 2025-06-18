function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    const taskList = document.getElementById("taskList");
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Mark completed on click
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      li.remove();
    });
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = "";
  }
  
