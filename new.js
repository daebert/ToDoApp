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

const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const taskDateInput = document.querySelector(".radio-group__input:checked");
  const taskNameInput = document.querySelector(".textentry");
  console.log(taskNameInput.value, taskDateInput.value);
};
