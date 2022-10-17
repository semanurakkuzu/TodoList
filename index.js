
let currentLi = document.querySelectorAll("#list li")
currentLi.forEach(li => {
    let button = document.createElement('button')
    button.className = "delete-btn"
    button.innerText = "x"
    li.append(button)

})

const newElement = () => {
    let inputText = document.querySelector("#task")
    let list = document.querySelector("#list")
    let li = document.createElement('li')

    if (inputText.value) {
        li.innerHTML = `${inputText.value}
        <button type="button" class="delete-btn">x</button>`
        list.append(li)

        let todoListItems = localStorage.getItem('todoList')

        if (todoListItems === null) {
            todoListItems = new Array()
        } else {
            todoListItems = JSON.parse(todoListItems)
        }
        
        todoListItems.push(inputText.value)

        localStorage.setItem('todoList',  JSON.stringify(todoListItems))

        let successAlert = document.querySelector('.success');
        let bsAlert = new bootstrap.Toast(successAlert);
        bsAlert.show();
    }
    else {
        let errorAlert = document.querySelector('.error');
        let bsAlert = new bootstrap.Toast(errorAlert);
        bsAlert.show();
    }

    deleteFunction()
    checkedFunction()
}

const deleteFunction = () => {
    let deleteButtons = document.querySelectorAll(".delete-btn")

    deleteButtons.forEach(deleteButton => {
        deleteButton.onclick = () => {
            deleteButton.parentNode.remove()
        }
    })
}

const checkedFunction = () => {
    let items = document.querySelectorAll("#list li")
    items.forEach(li => {
        li.onclick = () => {
            console.log(li)
            li.classList.toggle("checked")
        }
    })
}

deleteFunction()
checkedFunction()








