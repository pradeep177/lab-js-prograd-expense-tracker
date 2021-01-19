
var balance = 0;
var incomeAmount = 0;
var expenseAmount = 0;
var button = document.getElementById("btn");

button.addEventListener('click',getValue);
function getValue(){
    localStorage.clear('value1');
    var amount = document.getElementById("amount").value;
    localStorage.setItem("value",amount);
    //var amount = JSON.parse(localStorage.getItem('value'));
    var text = document.getElementById("text").value;
    localStorage.setItem("item",text);
    //var text1 = JSON.parse(localStorage.getItem("value1"));
    var list = document.createElement('li');
    list.innerHTML =  "<pre>"+ "<strong>"+ text+"</strong>" + ' ' +"</pre>"+ amount ;
    document.getElementById("list").appendChild(list);
   // console.log(JSON.parse(localStorage.getItem("StudentDetails")))
    // document.getElementById("money-plus").textContent = amount;
    if(Math.sign(amount) === 1)
    {
        incomeAmount = parseInt(incomeAmount) + parseInt(amount);
        document.getElementById('money-plus').innerText="+$"+incomeAmount;
       //document.getElementById("money-plus").innerHTML = incomeAmount;
        localStorage.setItem('income',incomeAmount);
    }
    else
    {
        expenseAmount = parseInt(expenseAmount) + parseInt(amount);
        document.getElementById('money-minus').innerText="$"+expenseAmount;
        //document.getElementById("money-minus").innerHTML = expenseAmount;
        localStorage.setItem('expense',expenseAmount);
    }
    if(amount >=0)
    {
        balance = parseInt(balance) + parseInt(incomeAmount);
    }
    else
    {
        balance = parseInt(balance) + parseInt(expenseAmount);
    }
    document.getElementById("balance").innerHTML = "$"+ balance;
    localStorage.setItem('balance',balance);
    event.preventDefault()
}