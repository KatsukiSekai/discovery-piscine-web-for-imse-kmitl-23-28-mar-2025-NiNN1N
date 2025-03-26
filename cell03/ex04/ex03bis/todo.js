$(document).ready(function() {
    loadTasks();

    $("#new-task").click(function() {
      let task = prompt("Enter a new task:");
      if (task) {
        addTask(task);
        saveTasks();
      }
    });

    function addTask(task) {
      let div = $("<div></div>").text(task).addClass("task");
      div.click(function() {
        if (confirm("Do you want to remove this task?")) {
          $(this).remove();
          saveTasks();
        }
      });
      $("#ft_list").prepend(div);
    }

    function saveTasks() {
      let tasks = [];
      $("#ft_list div").each(function() {
        tasks.push($(this).text());
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
      let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.reverse().forEach(task => addTask(task));
    }
});