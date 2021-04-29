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

const heatTeaElement = checkboxGroup("Tee kochen");
const drinkTeaElement = checkboxGroup("Tee trinken");

const taskGroupElement = document.querySelector(".checkbox-group");
taskGroupElement.append(heatTeaElement, drinkTeaElement);
