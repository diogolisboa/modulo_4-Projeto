const arrayTasks = [];
const arrayDone = [];

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');
const toDo = document.getElementById("toDo");
const done = document.getElementById("tasksDone");


addBtn.addEventListener("click", (event) => { 
    if (input.value != "") {
        arrayTasks.push(input.value); 
        toDo.innerHTML = "";
        /* tasks2 = tasks.map(function(x){ return x.toUpperCase(); }) */
        arrayTasks.map(item => {
            toDo.innerHTML += `<p > ${item} </p>`;
            
        });
        input.value = "";
        event.preventDefault(); 
        console.log(arrayTasks)
    }
});

document.addEventListener('click',(e) => {
    if (e.target && e.target.nodeName == "P") {
        let checked = arrayTasks.findIndex(item => item == e.target.textContent); 
        arrayDone.push(e.target.textContent);
        console.log(arrayDone)
        arrayTasks.splice(checked, 1);
        done.innerHTML = "";
        toDo.innerHTML = "";
        arrayTasks.map(item => {
            toDo.innerHTML += `<p> ${item} </p>`;
        });
        arrayDone.map(item => {
            done.innerHTML += `<p class='task-done'
            > ${item} </p>`;
        });
    }
});


