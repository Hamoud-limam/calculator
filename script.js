

let nums = {
    num1 : document.getElementById("num1"),
    num2 : document.getElementById("num2"),
    num3 : document.getElementById("num3"),
    num4 : document.getElementById("num4"),
    num5 : document.getElementById("num5"),
    num6 : document.getElementById("num6"),
    num7 : document.getElementById("num7"),
    num8 : document.getElementById("num8"),
    num9 : document.getElementById("num9"),
    num0 : document.getElementById("num0")
}

let operations = {
    divise : document.getElementById("divise"),
    multiplication : document.getElementById("multiplication"),
    munis : document.getElementById("munis"),
    addition : document.getElementById("addition"),
    pourcentage : document.getElementById("pourcentage")
}

let input = document.querySelector(".view")
let AC = document.getElementById("AC");
let C = document.getElementById("C") ;
let equal = document.getElementById("equal") ;



let inputvalue="";

for(let key in nums){
    nums[key].onclick= ()=>{
     inputvalue +=nums[key].value
     input.value=inputvalue
     console.log((inputvalue))
     }
 }
 
 for(let key in operations){
    operations[key].onclick= ()=>{
     inputvalue +=operations[key].value
     input.value=inputvalue
     }
 }

AC.onclick= ()=>{
    inputvalue="";
   input.value=0;
}


equal.onclick = () => {
    try {
        let result = math.evaluate(inputvalue);
        input.value = result;
        inputvalue = result;
    } catch (error) {
        input.value = "Error";
        inputvalue = "";
    }
};