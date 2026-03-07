const API_URL = "https://mindx-mockup-server.vercel.app/api/resources/Test-API?apiKey=69aada0c3d8d68a55c599a36";

function filterTasks(tasks, flagId, statusId, assignedTo){
    const filteredTasks = tasks.filter(task => {
        return (
            ( flagId === undefined || task.flagId === flagId) && 
            ( statusId === undefined || task.statusId === statusId) &&
            ( assignedTo === undefined || task.assignedTo === assignedTo)
        );
    });

    return filteredTasks;
}

async function getData() {
    const response = await fetch(API_URL);
    const result = await response.json();

    const apiData = result.data.data[0];

    console.log(apiData);
    
    const users = apiData.users;
    const tasks = apiData.tasks;
    const flags = apiData.flags;
    const taskStatus = apiData.taskStatus;

    console.log("Users: ", users);
    console.log("Tasks: ",tasks);
    console.log("Flags: ", flags);
    console.log("Task Status: ", taskStatus);

    const urgentTasks = filterTasks(tasks,1);
    console.log("Task có flag ID = 1: ", urgentTasks);

    const inProgressTasks = filterTasks(tasks, 1, 2);
    console.log("Task có flag ID = 1 và status ID = 2: ", inProgressTasks);

    const completedTasks = filterTasks(tasks, 1, 2, 3);
    console.log("Task có flag ID = 1, status ID = 2 và assignedTo = 3: ", completedTasks);


}

getData();