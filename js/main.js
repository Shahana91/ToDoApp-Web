const inputbox = document.getElementById('input-box')
const button = document.getElementById('btn')

const listContainer = document.getElementById("list-container")
const toastContainer = document.getElementsByClassName("toastContainer")
console.log(toastContainer);
const p = document.getElementById('p')


button.addEventListener('click', () => {
    const todoTxt = inputbox.value
    if (todoTxt == "") {
        showToast("Enter a valid Text");
        inputbox.style.border = "1px solid red";
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = todoTxt
        console.log(li)
        listContainer.appendChild(li)
        showToast("You have added: " + todoTxt)

        let span = document.createElement("span")

        span.innerHTML = 'x'
        li.appendChild(span)

        saveData()
        inputbox.value = ""
        inputbox.style.border = "none";
    }
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName == "LI")            //the onw we clicked
    {
        e.target.classList.toggle('checked')
        saveData()
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
        showToast("Todo Deleted");
        
        saveData()
        inputbox.style.border = "none";

    }
}, false);



function showToast(msg) {
    const toast=document.createElement('div')
    toast.classList.add('toast')
    toast.textContent = msg
    toastContainer[0].appendChild(toast)

    setTimeout(() => {
        toast.remove();
    }, 3000)
}
 getData()

//to save data in the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

//to get the stored data
function getData() {
    listContainer.innerHTML = localStorage.getItem('data')
}

//clear data of local storage to delete the content
//toggle and remove has different functionality
//toggle----> change to the othr one that we suggested
//remove---->removes or deletes