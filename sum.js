function sum(){
    var x=Number(document.getElementById('x').value);
    var y=Number(document.getElementById('y').value);
    document.getElementById('result').innerHTML=x+y;
    return false;
}
/*function message(){
    document.getElementById('go').innerHTML="MESSAGE";
    return false;
}*/
document.getElementById('go').addEventListener('click',sum);