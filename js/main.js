// HAMBURGARMENY

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", hamburgerToggle);

function hamburgerToggle() {
  let myLinks = document.getElementById("myLinks");

  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}

// TO-DO

let toDoList = [];
let planForm = document.getElementById("planForm");
let planDeadline = document.getElementById("planDeadline");
let planInput = document.getElementById("planInput");
let createdPlans = document.getElementById("plansList");

class Plan {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

let dishes = new Plan("2021-11-10", "Plocka ur disken");
let cleaning = new Plan("2021-11-10", "Städa vardagsrummet");
let shopping = new Plan("2021-11-10", "Veckohandla");
let laundry = new Plan("2021-11-10", "Tvätta");

planForm.addEventListener("submit", addPlan);

function addPlan(e) {
  let newPlan = new Plan();
  newPlan.date = planDeadline.value;
  newPlan.description = planInput.value;
  toDoList.push(newPlan);

  planDeadline.value = 0;
  planInput.value = "";

  updateList();
  e.preventDefault();
}

function updateList() {
  createdPlans.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    let planSummary = document.createElement("li");

    let planDate = document.createElement("span");
    planDate.innerHTML += toDoList[i].date + "";

    let planItem = document.createElement("span");
    planItem.innerHTML += toDoList[i].description + "";

    let cb = document.createElement("input");
    cb.type = "checkbox";

    createdPlans.appendChild(planSummary);
    planSummary.appendChild(planDate);
    planSummary.appendChild(planItem);
    planSummary.appendChild(cb);
  }
}

toDoList.push(dishes, cleaning, shopping, laundry);

updateList();

// planForm.addEventListener("submit", addPlan);

// function addPlan(e) {
//   let planItem = document.createElement("li");
//   let newToDo = planInput.value;
//   planItem.innerText = newToDo;

//   let cb = document.createElement("input");
//   cb.type = "checkbox";
//   cb.onclick = function () {
//     moveTask(this);
//   };
//   planItem.appendChild(cb);

//   createdPlan.appendChild(planItem);
//   planInput.value = "";
//   e.preventDefault();

//   e.stopPropagation();
//   return false;
// }

// function moveTask(el) {
//   console.log(el);
//   var target = document.getElementById(
//     el.checked ? "completedPlans" : "plansList"
//   );
//   target.appendChild(el.parentNode);
// }
