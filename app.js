// Dom Elements
const titt = document.querySelector("#titt") 
const auth = document.querySelector("#auth"); 
const yea = document.querySelector("#yea"); 
const btnBook = document.querySelector("button"); 
const bookAuth = document.querySelector("#bookAuth"); 
const res = document.querySelector("#res");

// main js 
btnBook.addEventListener("click",e => {
    e.preventDefault() 

    if(titt.value == '' && auth.value == '' && yea.value == '' )
    alert("please , fill in the input")
    else{   
    var tableRow = bookAuth.appendChild(document.createElement("tr")) 
    var td = tableRow.appendChild(document.createElement("td")) 
    td.innerHTML = titt.value 
    var td2 = tableRow.appendChild(document.createElement("td")) 
    td2.innerHTML = auth.value 
    var td3 = tableRow.appendChild(document.createElement("td")) 
    td3.innerHTML = yea.value 
    
     titt.value = ""
     auth.value = ""
     yea.value = ""

     res.setAttribute("style","display:block")
     res.addEventListener("click",() => {
        tableRow.remove("td") 
        res.style = 'display-none' 
     })
    }
}) 
