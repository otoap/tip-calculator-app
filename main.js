"use strict"
let bill = document.getElementById("bill");
let buttons = document.getElementsByTagName("button");
let custom = document.getElementById("custom");
let numPpl = document.getElementById("people");
let reset = document.getElementsByClassName("reset")[0];
let tip = document.getElementsByClassName("tip-amount")[0];
let total = document.getElementsByClassName("total-per-person")[0];
let zeroBill = document.getElementsByClassName("zero-bill")[0];
let zeroPeople = document.getElementsByClassName("zero-people")[0];

let buttonsArr = Array.from(buttons);
buttonsArr.pop();




let billValue = 0;
let percent = 0;
let customNum = 0;
let people = 0;
let tipPerson = 0;
let totalPerson = 0;

bill.addEventListener("input", (event)=> {
    if(event.target.value <=0) {
        billValue = 0;
        bill.style.border = "2px #e17052 solid";
        zeroBill.style.display = "block";
        tip.innerHTML = "$0"
        total.innerHTML = "$0"
    }else {
        bill.style.border = "solid 2px #26c2ae";
        billValue = parseInt(event.target.value);
        zeroBill.style.display = "none";
        calculate();
    }
})

buttonsArr.forEach((button)=> {
    button.addEventListener("click", (event)=> {
        customNum = 0;
        percent = parseInt(event.target.innerText);
        calculate()
    })
})

custom.addEventListener("input", (event) => {
    if (event.target.value<0) {
        custom.style.border = "2px #e17052 solid";
    }else {
        custom.style.border = "solid 2px #26c2ae";
        percent = 0;
        customNum = parseInt(event.target.value);
        calculate()
    }
})

numPpl.addEventListener("input", (event)=> {
    if(event.target.value <= 0) {
        numPpl.style.border = "2px #e17052 solid";
        zeroPeople.style.display = "block";
        tip.innerHTML = "$0.00"
        total.innerHTML = "$0.00"
    }else{
        numPpl.style.border = "solid 2px #26c2ae";
        people = parseInt(event.target.value);
        zeroPeople.style.display = "none";
        calculate();
    }
})

reset.addEventListener("click", ()=> {
    billValue = 0;
    percent = 0;
    customNum = 0;
    people = 0;
    bill.value = "";
    custom.value = "";
    numPpl.value = "";
    tip.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
})



function calculate() {
    if(billValue >0 && (percent>0 || customNum >0) && people >0) {
        if(customNum==0) {
            tipPerson = billValue*percent/100/people;
            totalPerson = billValue/people + billValue*percent/100/people;
            tip.innerHTML = `$${tipPerson.toFixed(2)}`;
            total.innerHTML = `$${totalPerson.toFixed(2)}`;
        }else{
            tipPerson = billValue*customNum/100/people;
            totalPerson = billValue/people + billValue*customNum/100/people;
            tip.innerHTML = `$${tipPerson.toFixed(2)}`;
            total.innerHTML = `$${totalPerson.toFixed(2)}`;
        }
    }
}