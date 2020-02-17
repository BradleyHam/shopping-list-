let add = document.querySelector('.add');

let input = document.querySelector('#input')
let ul = document.querySelector('ul')
let who = document.querySelector(".who");
let storageArray = [];


function appendList(i) {
    let listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = i;
    let icon = document.createElement('i')
    icon.className = "fa fa-times icon"
    listItem.appendChild(icon)
    ul.appendChild(listItem);
    icon.addEventListener("click", (e) => {
        removeItem(e)
    })
}


function addItem() {


    let listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerText = input.value;
    let icon = document.createElement('i')
    icon.className = "fa fa-times icon"
    listItem.appendChild(icon)
    if (input.value != '') {
        ul.appendChild(listItem)
    }
    storageArray.push(input.value)

    //        update local storage 
    updateLocalStorage()


    input.value = '';
    icon.addEventListener("click", (e) => {
        removeItem(e)
    })

}

function updateLocalStorage() {


    localStorage.setItem('brads', JSON.stringify(storageArray))

}




function removeItem(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
}


function populateUi() {
    let storageListArray = JSON.parse(localStorage.getItem("brads"))
    storageListArray.forEach((i) => {
        storageArray.push(i)
        appendList(i)
        console.log(i)
    })
}




add.addEventListener('click', () => {
    addItem()
})

who.addEventListener('click', (e) => {
    if (e.target.classList.contains('brad')) {
        who.className = "who brad-active"
    } else if (e.target.classList.contains('emily')) {
        who.className = "who em-active"
    }
})

input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        addItem()
        // Trigger the button element with a click

    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded
    populateUi()
});