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

const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const taskDateInput = document.querySelector(".radio-group__input:checked");
  const taskNameInput = document.querySelector(".textentry");

  if (!taskNameInput.value) {
    alert("Please enter task's name!");
    return;
  }
  if (!taskDateInput) {
    alert("Please enter task's date!");
    return;
  }

  const task = {
    name: taskNameInput.value,
    date: taskDateInput.value,
  };

  // 1. const taskList = ???; localStorage.getItem, parse?

  const getTaskList = localStorage.getItem("taskList");
  const taskListParse = JSON.parse(getTaskList);

  // 2) taskListParse.?? (task): wie erweitere ich das array? Append item

  taskListParse.push(task);

  // 3) localStorage.setItem(???); setItem+stringify

  const taskListJSON = JSON.stringify(taskListParse);
  localStorage.setItem("taskList", taskListJSON);
};
