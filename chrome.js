let myLeads = []
let saveEl = document.getElementById("save-el")
let inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

let leadsfromlocalm = JSON.parse(localStorage.getItem("myLeads"))

saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify("myLeads"))
    renderLeads()
})

function renderLeads(){
    let ListItem = ""
    for( let i = 0; i<myLeads.length; i++){
        ListItem += `
        <li>
            <a target = '_blank' href ='${myLeads[i]}'>
            ${myLeads[i]}</a>
        </li>`
    }
    ulEL.innerHTML = ListItem 

}