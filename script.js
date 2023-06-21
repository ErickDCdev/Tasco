const taskInput = document.getElementById("taskInput");
                        const taskList = document.getElementById("taskList");
                    
                        function createTaskElement(task) {
                          const taskItem = document.createElement("li");
                          taskItem.className = "task-item";
                    
                          const checkbox = document.createElement("input");
                          checkbox.type = "checkbox";
                          checkbox.className = "task-checkbox";
                          checkbox.addEventListener("change", function () {
                            if (checkbox.checked) {
                              taskItem.style.textDecoration = "line-through";
                            } else {
                              taskItem.style.textDecoration = "none";
                            }
                          });
                    
                          const taskText = document.createElement("span");
                          taskText.textContent = task;
                    
                          const deleteButton = document.createElement("button");
                          deleteButton.className = "delete-button";
                          deleteButton.textContent = "X";
                          deleteButton.addEventListener("click", function () {
                            taskItem.remove();
                          });
                    
                          taskItem.appendChild(checkbox);
                          taskItem.appendChild(taskText);
                          taskItem.appendChild(deleteButton);
                    
                          return taskItem;
                        }
                    
                        function addTask() {
                          const task = taskInput.value.trim();
                          if (task !== "") {
                            const taskElement = createTaskElement(task);
                            taskList.appendChild(taskElement);
                            taskInput.value = "";
                          }
                        }
                    
                        taskInput.addEventListener("keydown", function (event) {
                          if (event.key === "Enter") {
                            addTask();
                          }
                        });