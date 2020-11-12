let entries = [];
const gool = 50;
const entriesWrapper = document.querySelector('#entries');
document.querySelector("#target").innerText = gool;
function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue);
    entriesWrapper.appendChild(listItem);
}

function reducer(total,currentValue){
    return total + currentValue;
}
function callTotal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerHTML = totalValue;
    document.getElementById("progressTotal").innerHTML = totalValue;
}

function callAverage(){
    const average = (entries.reduce(reducer) /entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function weeklyHigh(){
    const high = Math.max(...entries);
    document.getElementById("high").innerText = high;
    
}

function calcGoal(){
    const totalValue = entries. reduce(reducer).toFixed(1);
    const compltedPercent = totalValue / (gool / 100);
    const progressCircle = document.querySelector("#progressCircle");
    if(compltedPercent > 100) compltedPercent == 100;
    progressCircle.style.background =`conic-gradient(#70db70 ${compltedPercent}%, #2d3740 ${compltedPercent}% 100%) `;
}



function handleSubmit(event){
    event.preventDefault()
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    callTotal();
    callAverage();
    weeklyHigh();
    calcGoal();
}




const form = document.querySelector("form").addEventListener('submit',handleSubmit);