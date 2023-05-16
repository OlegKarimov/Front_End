const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskListUl.addEventListener('click', (e) => {
    // console.log(e.target.tagName);
    // console.log(e);
    if (e.target.tagName === 'BUTTON'){
        // console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
});


function addTask() {
    const taskName = task.value.trim();
    if (taskName){
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span>
                | Dunn:
                <input type="checkbox" name="dunnCheck" id="dunnCheck" value="no"> | 
                <button>Delete</button>`;

        // li.style.textAlign = 'center';
        taskListUl.appendChild(li);
    }
    task.value = '';
}


taskListUl.dunnCheck.addEventListener('change',(e) => {
    console.log(e);

});