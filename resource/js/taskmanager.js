//Creating the card format to display on the browser

const createTaskHtml = (
  id,
  username,
  descriptionBox,
  assignedTo,
  dueDate,
  validateStatus
) => {
  const newForm = ` 
  <div class="card text-left mt-3" style="width: 18rem; box-shadow: 4px 4px ;" data-task-id=${id}>
<div class="card-body">
  <h5 class="card-title">Name:  ${username}</h5>
    <p class="card-subtitle mb-2 mt-1">Description:  ${descriptionBox}</p>
     <h6 class="card-subtitle mb-2 mt-1">Due Date:  ${dueDate}</h6>
    <h6 class="card-subtitle mb-2 mt-1" id="assignedToInput">Assignee:  ${assignedTo}</h6>
    <h6 class="card-subtitle mb-2 mt-1">Status:  ${validateStatus}</h6>
    <div class="row">
    <div class="col mt-3">
      <a href="#" class="btn btn-danger delete-button ml-3">Delete</a>
    </div>
    <div class="col mt-3">
      <a href="#" class="btn btn-success padding-right="100px" Update-button ml-5">Mark as Done</a>
    </div>
  </div>
</div>
</div>`;

  return newForm;
};

//Creating class to add task
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  //Add the task to array
  addTask(username, descriptionBox, assignedTo, dueDate, validateStatus) {
    const task = {
      id: this.currentId++,
      username: username,
      descriptionBox: descriptionBox,
      assignedTo: assignedTo,
      dueDate: dueDate,
      validateStatus: validateStatus,
    };

    this.tasks.push(task);
    console.log(
      `$(task.id) \n $(task.username)\n $(task.descriptionBox)\n $(task.assignedTo)\n $(task.dueDate) \n $(task.validateStatus)`
    );
    return task;
  }

  // Getting the task by id

  getTaskById(taskId) {
    let objTask;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      if (task.id === taskId) {
        objTask = task;
      }
    }

    return objTask;
  }

  //Displaying Task function

  render() {
    const tasksHtmlListToDo = [];
    const tasksHtmlListInProgress = [];
    const tasksHtmlListReview = [];
    const tasksHtmlListDone = [];

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      const taskHtml = createTaskHtml(
        task.id,
        task.username,
        task.descriptionBox,
        task.assignedTo,
        formattedDate,
        task.validateStatus
      );

      //tasksHtmlList.push(taskHtml);

      if (task.validateStatus === "To Do") {
        tasksHtmlListToDo.push(taskHtml);
      } else if (task.validateStatus === "In Progress") {
        tasksHtmlListInProgress.push(taskHtml);
      } else if (task.validateStatus === "Review") {
        tasksHtmlListReview.push(taskHtml);
      } else if (task.validateStatus === "Done") {
        tasksHtmlListDone.push(taskHtml);
      }
    }

    //const tasksHtml = tasksHtmlList.join("\n");
    // const tasksList = document.getElementById("tasksList");
    // tasksList.innerHTML = tasksHtml;

    const toDoHtml = document.getElementById("to_do_tasks");
    toDoHtml.innerHTML = tasksHtmlListToDo;

    const inProgressHtml = document.getElementById("in_progress_tasks");
    inProgressHtml.innerHTML = tasksHtmlListInProgress;

    const reviewHtml = document.getElementById("review_tasks");
    reviewHtml.innerHTML = tasksHtmlListReview;

    const doneHtml = document.getElementById("done_tasks");
    doneHtml.innerHTML = tasksHtmlListDone;
  }
}
