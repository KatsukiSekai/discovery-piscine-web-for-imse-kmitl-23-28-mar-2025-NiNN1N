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
        document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
    }

    function loadTasks() {
        let cookies = document.cookie.split("; ");
        let taskCookie = cookies.find(row => row.startsWith("tasks="));
        if (taskCookie) {
            let tasks = JSON.parse(taskCookie.split("=")[1]);
            tasks.forEach(task => addTask(task));
        }
    }
});