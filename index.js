let inputEL =document.getElementById("inputbox");
let btnEL = document.querySelectorAll("button");

let string ="";
let arr =Array.from(btnEL);
arr.forEach(button=>{
 button.addEventListener("click",(e)=>{
    if(e.target.innerHTML == "="){
        string = eval(string);
        inputEL.value =string;
    }
    else if(e.target.innerHTML=="AC"){
        string ="";
        inputEL.value = string;
    }
    else if(e.target.innerHTML =="DEL"){
        string = string.substring(0,string.length-1);
        inputEL.value = string;
    }
    else{
        string+=e.target.innerHTML;
    inputEL.value = string;

    }
    
 })
})