const inputBox = document.getElementById("input");
const list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You need to write Something!");
    }
    else{

        // Add an element in the list

        let l = document.createElement("li");
        l.innerHTML = inputBox.value;
        list.appendChild(l);

        // For the cross-Mark

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        l.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// To add and delete element in the list 

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  // name of the class
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//To save the data in the Browser Storage
//Won't loss the datas even the browser is refreshed

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

//To show the data in the Browser

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();