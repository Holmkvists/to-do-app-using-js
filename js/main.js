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
let completedPlans = document.getElementById("completedList");

class Plan {
  constructor(date, description) {
    this.date = date;
    this.description = description;
    this.isCompleted = false;
  }
}

let dishes = new Plan("2021-11-10", "Plocka ur disken");
let cleaning = new Plan("2021-11-11", "Städa vardagsrummet");
let shopping = new Plan("2021-11-14", "Veckohandla");
let laundry = new Plan("2021-11-15", "Tvätta");

planForm.addEventListener("submit", addPlan);

function addPlan(e) {
  let newPlan = new Plan();
  newPlan.date = planDeadline.value;
  newPlan.description = planInput.value;
  toDoList.push(newPlan);
  console.log(toDoList);

  planDeadline.value = "";
  planInput.value = "";

  updateList();
  e.preventDefault();
}

function updateList() {
  createdPlans.innerHTML = "";
  completedPlans.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    let toDo = toDoList[i];

    let planSummary = document.createElement("li");

    let planDate = document.createElement("span");
    planDate.innerHTML += toDo.date + "";

    let planItem = document.createElement("span");
    planItem.innerHTML += toDo.description + "";

    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset["index"] = i;
    cb.checked = toDo.isCompleted;
    cb.onclick = movePlan;

    if (toDo.isCompleted) completedPlans.appendChild(planSummary);
    else createdPlans.appendChild(planSummary);

    planSummary.appendChild(planDate);
    planSummary.appendChild(planItem);
    planSummary.appendChild(cb);
  }
}

toDoList.push(dishes, cleaning, shopping, laundry);
updateList();
console.log(toDoList);

function movePlan() {
  let index = parseInt(this.dataset["index"], 10);
  let toDo = toDoList[index];
  toDo.isCompleted = !toDo.isCompleted;
  updateList();
}
