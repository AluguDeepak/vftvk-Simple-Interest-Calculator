function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0)
    {
       alert("Enter positive value");
    }
    var rate=document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    document.getElementById("result").innerText=interest;
    const para = document.createElement("p");
    const node = document.createTextNode("If you deposit" +principal+ "at an interest rate of" +rate+ "You will receive an amount of" +interest);
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

