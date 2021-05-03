const formElement = document.querySelector(".form");

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

function appendToArray(item, array) {
  return [...array, item];
}

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function goToPage(href) {
  location.href = href;
}

formElement.onsubmit = function (event) {
  // Prevent the default form submit behaviour (sending data to a server and reloading page)
  event.preventDefault();

  const taskNameInput = document.querySelector(".textentry");
  const taskDateInput = document.querySelector(".radio-group__input:checked");

  if (!taskNameInput.value) {
    alert("Please enter task's name!");
    return;
  }

  if (!taskDateInput) {
    alert("Please choose a date");
    return;
  }

  const task = {
    name: taskNameInput.value,
    date: taskDateInput.value,
    completed: false,
  };

  const taskList = parseJSONFromLocalStorage("taskList", []);
  const newTaskList = appendToArray(task, taskList);
  stringifyJSONToLocalStorage("taskList", newTaskList);

  goToPage("tasks.html");
};
