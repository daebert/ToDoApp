// // Variable
// const submitbutton = document.querySelector(".submit");

// // Events
// submitbutton.addEventListener("click", showTask);

// // // Functions
// // function showTask() {
// //   alert("Show Task");
// // }

// const taskNameInput = document.querySelector(".textentry");
// const formSubmitInput = document.querySelector(".submit");

// function handleclick() {
//   const taskDateInput = document.querySelector(".radio-group__input:checked");
//   console.log(taskNameInput.value, taskDateInput.value);
// }

// formSubmitInput.onclick = handleclick;

// // formSubmitInput.onclick = function () {
// //   alert(taskNameInput.value);
// // };

// const formElement = document.querySelector(".form");

// formElement.onsubmit = function (event) {
//   event.preventDefault();
//   const taskDateInput = document.querySelector(".radio-group__input:checked");
//   const taskNameInput = document.querySelector(".textentry");

//   console.log(taskNameInput.value, taskDateInput.value);
// };

// const formElement = document.querySelector(".form");

// formElement.onsubmit = function (event) {
//   event.preventDefault();
//   const taskDateInput = document.querySelector(".radio-group__input:checked");
//   const taskNameInput = document.querySelector(".textentry");

//   if (!taskNameInput.value) {
//     alert("Please enter task's name!");
//     return;
//   }
//   if (!taskDateInput) {
//     alert("Please enter task's date!");
//     return;
//   }

//   const task = {
//     name: taskNameInput.value,
//     date: taskDateInput.value,
//   };

//   // 1. const taskList = ???; localStorage.getItem, parse?

//   const getTaskList = localStorage.getItem("taskList");
//   const taskListParse = JSON.parse(getTaskList);

//   // 2) taskListParse.?? (task): wie erweitere ich das array? Append item

//   taskListParse.push(task);

//   // 3) localStorage.setItem(???); setItem+stringify

//   const taskListJSON = JSON.stringify(taskListParse);
//   localStorage.setItem("taskList", taskListJSON);
// };

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
  };

  const taskList = parseJSONFromLocalStorage("taskList", []);
  const newTaskList = appendToArray(task, taskList);
  stringifyJSONToLocalStorage("taskList", newTaskList);

  goToPage("tasks.html");
};
