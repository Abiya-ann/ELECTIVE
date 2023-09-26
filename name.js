function sum(){
    var x=Number(document.getElementById('x').value);
  
    if(x>=0 || x<=0){

        document.getElementById('result').innerHTML="invalid";
    
    return false;
}
/*else if (x=="[a-zA-Z]" && x>0){
    document.getElementById('result').innerHTML="invalid";
    return false;
}*/
else{
    document.getElementById('result').innerHTML="valid";
    return false;
}
}

document.getElementById('go').addEventListener('click',sum);
