const display = document.getElementById("display");
//const displayDown = document.getElementById("display-down");
//let firstNumber = 0;
//let secundNumber = 0;
//let operation = "";
function appendToDisplay(value) {
  if (display.textContent[0] == "0"){
    display.textContent = "";
  }
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = 0;
 // displayDown.textContent = 0;
 // firstNumber = 0;
 // secundNumber = 0;
 // operation = "";
}
function equalsNumber(){
  const result = eval(display.textContent);
  display.textContent = result;
}

/*
function operationValue(value){
  operation = value;
  firstNumber = display.textContent;
  displayDown.textContent = firstNumber;
  display.textContent = "0";
}

function equalsNumber(){
  secundNumber = display.textContent;
  displayDown.textContent = displayDown.textContent + " " + operation + " " + secundNumber;
  if ("+"==operation){
    sum = parseInt(firstNumber) + parseInt(display.textContent);
    display.textContent = sum;
  } else if ("-"==operation){
    sum = parseInt(firstNumber) - parseInt(display.textContent);
    display.textContent = sum;
  } else if ("*"==operation){
    sum = parseInt(firstNumber) * parseInt(display.textContent);
    display.textContent = sum;
  } else if ("/"==operation){
    sum = parseInt(firstNumber) / parseInt(display.textContent);
    display.textContent = sum;
  }
}
/*
const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task");
const list = document.getElementById("task-list");

form.addEventListener("submit", () => {
  const text = input.value.trim();
  const text1 = document.createTextNode("Task");
  const div = document.createElement("div");
  const header = document.createElement("h1");
  const paragrph = document.createElement("p");
  const li = document.createElement("li");
  header.appendChild(text1);
  paragrph.appendChild(text);
  div.className = "card";
  header.className = "card-title";
  paragrph.className = "card-description";
  div.appendChild(header);
  div.appendChild(paragrph);
  li.appendChild(div);
  list.appendChild(li);
  document.body.appendChild(list);
})

/*

---------------------------------

<h1>To-Do List</h1>
    <form id="add-task-form">
      <input type="text" id="new-task" placeholder="Add a new task..." />
      <button type="submit">Add</button>
    </form>
    <ul id="task-list"></ul>
Remzo Gusinac7:20 PM
.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 5px;
}

.task .text {
    flex: 1;
    margin-right: 10px;
    text-decoration: none;
    color: #333;
}
Nikola Stanojevic7:27 PM
const form = document.getElementById("add-task-form")
const input = document.getElementById("new-task")
const list = document.getElementById("list-task")

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const text = input.value.trim();
    if(text !== ""){
        addTask (text);
        input.value = "";
    }
});

const addTask = (text) => {
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = `
    <a href="#" class="text
const addTask = (text) => {
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = `
    <a href="#" class="text">$(text) </a>
    `;
    list.appendChild(task);
}
Remzo Gusinac7:28 PM
${text}
Remzo Gusinac7:37 PM
.task .delete-button {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
}

.task .delete-button:hover {
    background-color: #ff6659;
}
Remzo Gusinac7:49 PM
const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task");
const list = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    addTask(text);
    input.value = "";
  }
});

const addTask = (text) => {
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `
    <a href="#" class="text">${text}</a>
const addTask = (text) => {
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `
    <a href="#" class="text">${text}</a>
    <button class="delete-button">Delete</button>
  `;
  const deleteBtn = task.querySelector(".delete-button");
  deleteBtn.addEventListener("click", () => {
    task.remove();
  });
  list.appendChild(task);
};

------------------------------------

const btn = document.getElementById("addTask");
const div = document.createElement("div");
const header = document.createElement("h1");
const paragrph = document.createElement("p");
const text = document.createTextNode("Novi tekst");
const text1 = document.createTextNode("Novi tekst");

btn.addEventListener("click", () =>{
  header.appendChild(text1);
  paragrph.appendChild(text);
  div.className = "card";
  header.className = "card-title";
  paragrph.className = "card-description";
  div.appendChild(header);
  div.appendChild(paragrph);
  document.body.appendChild(div);
})



const sidebar = document.getElementById("sidebar");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () =>{
    sidebar.style.display = "block";
    btn.style.display = none;
})

span.addEventListener("click", () =>{
  sidebar.style.display = "none";
})

/*

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
Remzo Gusinac8:26 PM
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const vrednost = document.getElementById("vrednost");
//let brojac = 0;

/*
plus.addEventListener("click", () => {
  brojac = parseInt(vrednost.textContent);
  brojac++;
  vrednost.textContent = brojac;
  vrednost.color = "green";

})
minus.addEventListener("click", () => {
  brojac = parseInt(vrednost.textContent);
  brojac--;
  vrednost.textContent = brojac;
  if (brojac < 0) {
    vrednost.style.color = "red";
  } else if (brojac > 0){
    vrednost.style.color = "blue";
  } else {
    vrednost.style.color = "black";
  }
})
reset.addEventListener("click", () => {
  brojac = parseInt(vrednost.textContent);
  brojac = 0;
  vrednost.textContent = brojac;
  vrednost.style.color = "black";
})



/*plus.addEventListener("click", brojac("plus"));
minus.addEventListener("click", brojac("minus"));
reset.addEventListener("click", brojac("reset"));

function brojac(brojac) {

  if (operacija == "plus") {
    brojac = parseInt(vrednost.textContent);
    brojac++;
    vrednost.textContent = brojac;
  } else if (operacija == "minus") {
    brojac = parseInt(vrednost.textContent);
    brojac--;
    vrednost.textContent = brojac;
  } else {
    brojac = parseInt(vrednost.textContent);
    brojac = 0;
    vrednost.textContent = brojac;
  }
}
*/
/*
const fruits = document.getElementsByTagName("li");
for (let i = 0; fruits.length > i; i++) {
  fruits[i].style.color = "red";
}

//fruits.forEach(function (fruit) {
//  fruits[fruit].style.color = "orange";
//  console.log(company);
//});

function klik(boja) {
  naslov.style.color = boja;
}

const correctEmail = "milan@gmail.com";
const correctPassword = "password";
function validation() {
  const email = document.forms["myForms"]["email"];
  const password = document.forms["myForms"]["password"];
  const confirmPassword = document.forms["myForms"]["confirmPassword"];
  console.log(password.value);
  console.log(confirmPassword.value);
  if (password.value !== confirmPassword.value) {
    alert("Pogresan password");
    return false;
  } else {
    alert("Password je ok");
    return true;
  }
}
*/
