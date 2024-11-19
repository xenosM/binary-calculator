var str ="";
var output = document.querySelector(".output");
function input(e){
    var input_value = e.target.value  
    str = str + input_value
    checkOperator();
    showOutput()
}
function showOutput(){
    output.innerText = str;
}
function backspace(){
    str = str.slice(0,-1)
    checkOperator(); 
    showOutput()
}   
function clr(){
    str = ""
    showOutput()
}
function checkOperator(){
    if(str.indexOf("+") != -1 || str.indexOf("-") != -1 || str.indexOf("*") != -1 || str.indexOf("/") != -1){
        document.querySelectorAll(".operator_btn").forEach((btn)=>{
            btn.disabled = true

        })
    } 
    else{
        document.querySelectorAll(".operator_btn").forEach((btn)=>{
            btn.disabled = false;
        })
    }
}
function calculate(){
    var x,y,biArr, result ;
    if(str.indexOf("+") != -1){
        biArr = str.split("+");
        x=parseInt(biArr[0],2) ;
        y = parseInt(biArr[1],2)
        result = x+y 
    }
    else if(str.indexOf("-") != -1){
        biArr = str.split("-");
        x=parseInt(biArr[0],2) ;
        y = parseInt(biArr[1],2)
        result = x-y 
    }
    else if(str.indexOf("*") != -1){
        biArr = str.split("*");
        x=parseInt(biArr[0],2) ;
        y = parseInt(biArr[1],2)
        result = x*y 
    }
    else if(str.indexOf("/") != -1){
        biArr = str.split("/");
        x=parseInt(biArr[0],2) ;
        y = parseInt(biArr[1],2)
        result = x/y
    }
    console.log(result)
    console.log(result.toString(2))
    if(result != undefined){
        str = result.toString(2);
        showOutput();
        checkOperator()
    }
}