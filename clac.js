let  outputscreen=document.getElementById("output-screen");
function display(n){
    outputscreen.value+=n;
}
function Calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch{
        alert("invalid");
    }
}
function Clear(){
    outputscreen.value =""; 
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}