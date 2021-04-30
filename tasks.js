function checkboxGroup(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";

  span.className = "checkbox-group__label--line-through";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

// Get array with task objects rom localStorage
const taskList = parseJSONFromLocalStorage("taskList", []);

// Create taskElements array consisting of HTML elements based on the amount of objects
const taskElements = taskList.map(function (task) {
  return checkboxGroup(task.name);
});

// get parent element of tasks
const taskGroupElement = document.querySelector(".checkbox-group");

// Append all elements in taskElement to task group
taskGroupElement.append(...taskElements);

// function dateChoice() {
//   if (document.querySelector(".radio-group__input:checked").value === null) {
//     return;
//   } else {
//     console.log(document.querySelector(".radio-group__input:checked").value);
//   }
// }

function createTaskList(date) {
  const filteredTaskList = taskList.filter(function (task) {
    return task.date === date;
  });
  // Create taskElements array consisting of HTML elements based on the amount of objects
  const taskElements = filteredTaskList.map(function (task) {
    return checkboxGroup(task.name);
  });

  // get parent element of tasks
  const taskGroupElement = document.querySelector(".checkbox-group");

  taskGroupElement.innerHTML = "";

  // Append all elements in taskElement to task group
  taskGroupElement.append(...taskElements);
}

// taskList.map(function (task) {
//  if (checkboxGroup(task.date) === radioButtonDate)};

const radioButtons = document.querySelectorAll(".radio-group__input");
radioButtons.forEach(
  (radioButton = (radioButton) =>
    (radioButton.onchange = (e) => createTaskList(radioButton.value)))
);

//
// });

// // const taskDate = taskList.map(function (task) {
// //   return checkboxGroup(task.date);
// // });

// // createTaskList
