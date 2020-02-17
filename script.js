let add = document.querySelector('.add');

let input = document.querySelector('#input')
let ul = document.querySelector('ul')
let who = document.querySelector(".who");


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
    input.value = '';
    icon.addEventListener("click", (e) => {
        removeItem(e)
    })

    //        update local storage 


}

function removeItem(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
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