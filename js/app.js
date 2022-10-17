let inputTask = document.querySelectorAll("#inputTask");
let btnTask = document.getElementById("btnTask");
let noTasks = document.getElementById("noTasks");
let allTasks = document.getElementById("allTasks");
let vaildMassage = document.getElementById("vaildMassage");
let closeMassage = document.getElementById("closeMassage");
let vms = document.getElementById("vms");

let spinner = document.querySelector(".spinner");

// dark-light mode -----
let i = document.querySelector('i');
let body = document.querySelector('body');
let card = document.getElementById('card');
let cardbody = document.getElementById('cardbody');
let navbar = document.getElementById('navbar');


i.onclick = function(){
 
  body.classList.toggle("dark")
  if(body.classList.contains("dark")){
    i.classList.remove('fa-solid')
    i.classList.add('fa-regular')
    card.style.background = "#f8f9fa"
    cardbody.style.background = "#f8f9fa"
    navbar.style.background = '#445EFB'

   
  }else{
    i.classList.add('fa-solid')
    i.classList.remove('fa-regular')
    card.style.background = "#001fa8"
    cardbody.style.background = "#001fa8"
    navbar.style.background = '#001fa8'
   
  }
}
// end : dark-light -----



// spinner----------

window.onload = function () {
  spinner.classList.add('hide');
  spinner.remove();
}

// spinner end -------------







let errors = [];
let closevaildMassage = () => {
  vaildMassage.classList.add("none");
};

let showNoTasks = () => {
  if (allTasks.childElementCount == 0) {
    noTasks.classList.remove("none");
  }
};

let addTask = (taskName , taskImage , taskDate) => {
  for(let i = 0 ; i < inputTask.length ; i++){
  let taskValue = inputTask[i].value;
  let valueLength = inputTask[i].value.length;

  if (taskValue.trim() == "" || valueLength < 3 || valueLength > 20) {
    if (taskValue.trim() == "") {
      errors.push("Please Enter Valid Data");
    } else if (valueLength < 3) {
      errors.push("Please Enter Data More Than 3 Character");
    } else if (valueLength > 20) {
      errors.push("Please Enter Data Less Than 20 Character");
    }
       
  } else if (taskValue.trim() != "" || valueLength > 3 || valueLength < 20){
     errors = [];

  }

  }
  if(errors.length == 0) {
    closevaildMassage();
    allTasks.innerHTML += `
        <div class='task alert alert-info'> ${taskName} : <img width='50' src='${taskImage}'>
        <i class="fa-solid fa-xmark delete"></i>
        <span class='float-right'>${taskDate}</span>
        </div>`;
    noTasks.classList.add("none");
    inputTask.value = "";
    allTasks.addEventListener("click", function (e) {
      if (e.target.classList.contains("task")) {
        e.target.classList.toggle("checked");
      }
    });
    
  }
  
};


let renderTask = () => {
  let allTasksData = {
    taskName : inputTask[0].value,
    taskImage : inputTask[1].value,
    taskDate : inputTask[2].value
  }
  addTask(allTasksData.taskName , allTasksData.taskImage , allTasksData.taskDate);

  inputTask[0].value = "";
  inputTask[1].value = "";
  inputTask[2].value = "";
}

btnTask.addEventListener("click", renderTask);
closeMassage.addEventListener("click", closevaildMassage);


document.addEventListener("click", function (t) {
  if (t.target.classList.contains("delete")) {
    t.target.parentElement.remove();
    showNoTasks();
  }
});
