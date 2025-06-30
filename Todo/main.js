"use strict";
let mainDiv = document.querySelector(".container");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector("#btn2");
let input = document.querySelector("input");
let ul = document.querySelector(".list-container");
let p = document.querySelector("p");
let todo_div = document.querySelector("todo");
let p2 = document.querySelector(".text2");
let curentEditinLi = null;
let crossBtn = null;
function editTodo(li, editBtn, crosBtn) {
    console.log("targeted", editBtn);
    console.log('li', (curentEditinLi.firstChild?.nodeValue));
    if (curentEditinLi.firstChild?.nodeValue) {
        input.value = curentEditinLi.firstChild.nodeValue;
        curentEditinLi.firstChild.nodeValue = "";
        crosBtn.classList.add('hide');
        btn.classList.add('hide');
        btn2.classList.remove('hide');
    }
}
btn2.addEventListener('click', (e) => {
    curentEditinLi.firstChild.nodeValue = input.value;
    crossBtn.classList.remove('hide');
    btn.classList.remove('hide');
    btn2.classList.add('hide');
    input.value = "";
});
function addTodo() {
    let li = document.createElement("li");
    let crossIcon = document.createElement("span");
    let editIcon = document.createElement("span");
    let uniqueId = crypto.randomUUID();
    li.setAttribute("id", uniqueId);
    editIcon.setAttribute('class', "span2");
    if (input.value.trim() !== "") {
        p.classList.add("hide");
        li.innerText = input.value;
        crossIcon.innerHTML = "	\u{1F5D1}";
        editIcon.innerHTML = "\u270F\uFE0F";
        ul.appendChild(li);
        li.appendChild(crossIcon);
        li.appendChild(editIcon);
        // logic for deleting todo and checked todo if user click
        li.addEventListener("click", (e) => {
            if (e.target == li) {
                li.classList.toggle("checked");
            }
            else if (e.target == crossIcon && li.getAttribute("class") == 'checked') {
                crossIcon.parentElement?.remove();
                p2.classList.add("hide");
            }
            else if (e.target == crossIcon && li.getAttribute("class") !== 'checked') {
                p2.classList.remove("hide");
                s;
            }
            else if (e.target == editIcon) {
                curentEditinLi = li;
                crossBtn = crossIcon;
                editTodo(li, editIcon, crossIcon);
            }
        });
    }
    else {
        p.classList.remove("hide");
    }
    input.value = "";
}
// function saveData(){
//     sessionStorage.setItem("container" ,JSON.stringify())
// }
// function showData(){
//       mainDiv.innerHTML = sessionStorage.getItem("container")
// }
// showData()
// what ! do he ! tells TypeScript:
// “I know this value is not null or undefined, trust me — don’t show an error.”
