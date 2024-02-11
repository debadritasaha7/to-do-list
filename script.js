const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function addTask(){
    if(inputBox.value==='')
    {
        alert("You must write something!");
    }
    else
    {
        let li=document.createElement("li");//creating a html element
        li.innerHTML=inputBox.value;//inner-html ->text inside the li
        listContainer.appendChild(li);//display li under listContainer
        let span=document.createElement("span");
        span.innerHTML="\u00d7";//\u00d7 is the code for cross icon
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

function displayDate() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1; // January is 0!
    var year = today.getFullYear();
    
    // Add leading zeros if necessary
    if (date < 10) {
        date = '0' + date;
    } 
    if (month < 10) {
        month = '0' + month;
    }
    
    // var fullDate = date + '-' + month + '-' + year;
    // document.getElementById('currentDate').innerHTML = fullDate;

    var fullDate = 'Date: ' + date + '-' + month + '-' + year;
    document.getElementById('currentDate').textContent = fullDate;
}