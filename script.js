//your code here
//your code here
let addTodo = document.getElementById("addTodoBtn");
let input = document.getElementById("newTodoInput");
let errorMsg = document.getElementById("error")
let ol = document.getElementById("todoList");
addTodo.addEventListener("click", addList);

function addList(){
    let val = input.value;
    console.log(typeof val);
    
    if(val === ""){   
        errorMsg.style.display = "block";
        return;
    }
    else{
        errorMsg.style.display = "none";
        let li = document.createElement("li");
        li.innerText = val;
        ol.appendChild(li);
        input.value = "";
    }
}


