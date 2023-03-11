const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    let todotext = input.value
    if(todo){
        todotext = todo.text
    }

    if(todotext) {
        const todoel = document.createElement('li')
        if(todo && todo.completed) {
            todoel.classList.add('completed')
        }
        todoel.innerHTML= todotext
        todoel.addEventListener('click', () => {
            todoel.classList.toggle('completed')
            updateLs()
        })
        todoel.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoel.remove()
            updateLs()
        })
        todosUl.appendChild(todoel)
        input.value=''
        updateLs()
    }
}

function updateLs(){
    todoel = document.querySelectorAll('li')
    const todos = []
    todoel.forEach(todoel => {
        todos.push({
            text : todoel.innerHTML,
            completed: todoel.classList.contains('completed')
        })
    })
    localStorage.setItem('todos',JSON.stringify(todos))
}