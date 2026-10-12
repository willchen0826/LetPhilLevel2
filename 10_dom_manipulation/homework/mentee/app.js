// ============================================================
// 🏠  DOM MANIPULATION — HOMEWORK  |  MENTEE VERSION
// ============================================================
// Mini Project: Task Board
//
// Render a set of tasks from an array of objects to a
// three-column board. Use DOM manipulation to build each
// card, update the header counts, mark tasks complete,
// and remove tasks.
//
// RULE: All DOM operations must be inside named functions.
//       No loose DOM code at the top level.
//
// Open index.html in your browser to see the board.
// ============================================================

// ============================================================
// THE DATA — do not modify
// ============================================================
const tasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    assignee: "Sofia",
    priority: "high",
    status: "done",
  },
  {
    id: 3,
    title: "Write API documentation",
    assignee: "Liam",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Fix login bug",
    assignee: "Alex",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Add dark mode support",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
  {
    id: 6,
    title: "Code review PR #42",
    assignee: "Sofia",
    priority: "medium",
    status: "todo",
  },
  {
    id: 7,
    title: "Deploy to staging",
    assignee: "Liam",
    priority: "high",
    status: "done",
  },
  {
    id: 8,
    title: "Update dependencies",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];

const boardName = "Sprint 12 — Task Board";

// ----------------------------------------------------------
// TASK 1 — renderHeader
// ----------------------------------------------------------
// Declare a function called renderHeader.
// Parameter: taskList (array)
//
// Inside:
//   - Select #board-title and set its textContent to boardName
//   - Select #task-count and set its textContent to:
//     taskList.length + " tasks"
//
// Call renderHeader(tasks) at the bottom.

function renderHeader(taskList) {
  const boardTitle = document.getElementById("board-title");
  boardTitle.textContent = boardName;

  const taskCount = document.getElementById("task-count");
  taskCount.textContent = taskList.length + " tasks";
}

renderHeader(tasks);

// ----------------------------------------------------------
// TASK 2 — createTaskCard  (returns a DOM element)
// ----------------------------------------------------------
// Declare a function called createTaskCard.
// Parameter: task (object)
//
// Inside, build and return a complete <li> element:
//
//   1. Create a <li> — add class "task-card"
//      Store the task id as a data attribute: li.dataset.id = task.id
//
//   2. Create a <p> for the title — add class "task-title"
//      Set its textContent to task.title
//
//   3. Create a <div> for meta — add class "task-meta"
//      Inside meta, create two <span> elements:
//        a) priority span — textContent: task.priority.toUpperCase()
//           add class: "priority-" + task.priority
//           (e.g. class="priority-high" for high priority)
//        b) assignee span — textContent: "👤 " + task.assignee
//
//   4. Append title and meta to the <li>
//
//   5. If task.status === "done" → add class "completed" to the <li>
//
//   6. Return the <li>
//
// Do NOT append it to the page here — just return it.
// Task 3 will handle placing it in the right column.

function createTaskCard(task) {
  const li = document.createElement("li");
  li.classList.add("task-card");
  li.dataset.id = task.id;

  const p = document.createElement("p");
  p.classList.add("task-title");
  p.textContent = task.title;

  const div = document.createElement("div");
  div.classList.add("task-meta");

  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = task.priority.toUpperCase();
  prioritySpan.classList.add("priority-" + task.priority);

  const assigneeSpan = document.createElement("span");
  assigneeSpan.textContent = "👤 " + task.assignee;

  div.append(prioritySpan, assigneeSpan);

  li.append(p);
  li.append(div);

  if (task.status === "done") {
    li.classList.add("completed");
  }
  return li;
}

// ----------------------------------------------------------
// TASK 3 — renderBoard
// ----------------------------------------------------------
// Declare a function called renderBoard.
// Parameter: taskList (array)
//
// Select the three task list elements:
//   #list-todo, #list-inprogress, #list-done
//
// Loop through taskList using forEach.
// For each task:
//   - Call createTaskCard(task) to get a card element
//   - Use an if/else if/else to append it to the right list:
//       status === "todo"       → append to todoList
//       status === "inprogress" → append to inprogressList
//       status === "done"       → append to doneList
//
// Call renderBoard(tasks) at the bottom.

function renderBoard(taskList) {
  // your code here
  const todoList = document.querySelector("#list-todo");
  const inprogressList = document.querySelector("#list-inprogress");
  const doneList = document.querySelector("#list-done");

  taskList.forEach((task) => {
    const element = createTaskCard(task);

    if (task.status === "todo") {
      todoList.append(element);
    } else if (task.status === "inprogress") {
      inprogressList.append(element);
    } else if (task.status === "done") {
      doneList.append(element);
    }
  });
}

renderBoard(tasks);

// {
//     id: 8,
//     title: "Update dependencies",
//     assignee: "Maya",
//     priority: "low",
//     status: "todo",
//   },
// ----------------------------------------------------------
// TASK 4 — updateCounts
// ----------------------------------------------------------
// Declare a function called updateCounts.
// Parameter: taskList
//
// Use filter to get completedTasks (status === "done").
// Use filter to get pendingTasks (status !== "done").
//
// Select #completed-count and set textContent:
//   "✅ " + completedTasks.length + " done"
//
// Select #pending-count and set textContent:
//   "⏳ " + pendingTasks.length + " pending"
//
// Call updateCounts(tasks) at the bottom.

function updateCounts(taskList) {
  // your code here
  const completedTasks = taskList.filter((task) => task.status === "done");
  const pendingTasks = taskList.filter((task) => task.status !== "done");

  const completedCount = document.getElementById("completed-count");
  completedCount.textContent = "✅ " + completedTasks.length + " done";

  const pendingCount = document.getElementById("pending-count");
  pendingCount.textContent = "⏳ " + pendingTasks.length + " pending";
}

updateCounts(tasks);

// ----------------------------------------------------------
// TASK 5 — addRemoveButtons
// ----------------------------------------------------------
// Declare a function called addRemoveButtons.
//
// Select all elements with class "task-card"
// using querySelectorAll.
//
// Loop through them using forEach.
// For each card:
//   1. Create a <button> — add class "remove-btn"
//   2. Set its textContent to "✕"
//   3. Append it to the card
//
// Note: we will wire up the click behavior in Event Listeners.
// For now just build and attach the buttons so they appear.

function addRemoveButtons() {
  const taskCard = document.querySelectorAll(".task-card");
  taskCard.forEach((task) => {
    const button = document.createElement("button");
    button.classList.add("remove-btn");
    button.textContent = "✕";
    task.append(button);
  });
}

// ----------------------------------------------------------
// TASK 6 — highlightHighPriority
// ----------------------------------------------------------
// Declare a function called highlightHighPriority.
//
// Select all elements with class "priority-high"
// using querySelectorAll.
//
// Loop through them using forEach.
// For each element, use element.style to set:
//   fontWeight: "800"
//
// This makes high-priority labels appear bolder.

function highlightHighPriority() {
  const priorityHigh = document.querySelectorAll(".priority-high");
  priorityHigh.forEach((e) => (e.style.fontWeight = "800"));
}

// ----------------------------------------------------------
// TASK 7 — addNewTask  (createElement full workflow)
// ----------------------------------------------------------
// Declare a function called addNewTask.
// Parameters: title, assignee, priority = "medium", status = "todo"
//
// Inside:
//   1. Create a new task object:
//      { id: Date.now(), title, assignee, priority, status }
//   2. Push the new task into the tasks array
//   3. Call createTaskCard(newTask) to build the card element
//   4. Append the card to the correct list based on status
//   5. Call updateCounts(tasks) to refresh the header stats
//   6. Call addRemoveButtons() so the new card gets a remove button
//   7. Call highlightHighPriority() so the new card gets bold styling
//      if it is high priority
//
// Call addNewTask("Write unit tests", "Carlos", "high") at the bottom.
// Watch a new card appear in the To Do column with a ✕ button.

function addNewTask(title, assignee, priority = "medium", status = "todo") {
  const newTask = { id: Date.now(), title, assignee, priority, status };
  tasks.push(newTask);
  const card = createTaskCard(newTask);
  let targetList;
  if (status === "todo") {
    targetList = document.getElementById("list-todo");
  } else if (status == "done") {
    targetList = document.getElementById("list-done");
  } else if (status === "inprogress") {
    targetList = document.getElementById("list-inprogress");
  }
  targetList.append(card);

  updateCounts(tasks);
  addRemoveButtons();
  highlightHighPriority();
}
addNewTask("Write unit tests", "Carlos", "high");

// ----------------------------------------------------------
// TASK 8 — Connect the dots: renderAll
// ----------------------------------------------------------
// Declare a function called renderAll.
// No parameters.
//
// Inside, call in order:
//   renderHeader(tasks)
//   renderBoard(tasks)
//   updateCounts(tasks)
//   addRemoveButtons()
//   highlightHighPriority()
//
// Call renderAll() at the bottom instead of calling
// each function individually.

function renderAll() {
  renderHeader(tasks);
  renderBoard(tasks);
  updateCounts(tasks);
  addRemoveButtons();
  highlightHighPriority();
}

renderAll();

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — markComplete
// ----------------------------------------------------------
// Declare a function called markComplete.
// Parameter: taskId (number)
//
// Inside:
//   1. Use find to locate the task with matching id in tasks array
//   2. If found, set task.status = "done"
//   3. Select the task card element using:
//      document.querySelector("[data-id='" + taskId + "']")
//   4. If the card element exists:
//      - Add class "completed" using classList
//      - Move it to #list-done using appendChild
//   5. Call updateCounts(tasks) to refresh the stats
//
// Call markComplete(1) to mark task 1 as done.
//
// Write a comment: what is dataset used for?

// ============================================================
// CALL YOUR FUNCTIONS HERE
// ============================================================
function markComplete(taskID) {
  const matchingTask = tasks.find((t) => t.id === taskID);
  if (matchingTask) {
    matchingTask.status = "done";
  }
  const taskCard = document.querySelector("[data-id='" + taskID + "']");
  if (taskCard) {
    taskCard.classList.add("completed");
    document.getElementById("list-done").appendChild(taskCard);
  }
  updateCounts(tasks);
}

markComplete(1);
