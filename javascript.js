function compute()
{
    var principal=document.getElementbyID("princpal").value;
    if(principal<=0)
    {
        alert("enter a positive number");
        document.getElementbyID("principal").focus();
}
else{
    var rate=document.getelementID("rate").value;
    var years=document.getelementID("years").value;
    var interest=principal*years*rate/100;
    var years=new Data().getfull year()+parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit " + principal + ", <br> at an interest rate of " + rate +"% <br> You will receive an amount of " + interest + ",<br>in the year " + year;
}
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
