import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-type="employee" data-empid="${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "employee") {
    let counter = 0;
    for (const order of orders) {
      if (parseInt(itemClicked.dataset.empid) === order.employeeId) {
        counter++;
      }
    }
    window.alert(`${itemClicked.innerHTML} has sold ${counter} items`);
    return counter;
  }
});
