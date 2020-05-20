/*document.getElementById("container").onchange = function(){
    var bill = Number(document.getElementById("billTotal").value);
    if(isNaN(bill)){
        document.getElementById("billError").innerHTML = "Bill can contain numbers only!";
        document.getElementById("tipOutput").innerHTML = "";
        document.getElementById("splitOutput").innerHTML = "";
        document.getElementById("newBill").innerHTML = "$";
        document.getElementById("tipEach").innerHTML =  "$";
    }else{
    var tipPercent = document.getElementById("tipInput").value;
    var split = document.getElementById("splitInput").value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    document.getElementById("tipOutput").innerHTML = tipPercent + "%";
    document.getElementById("splitOutput").innerHTML = split;
    document.getElementById("newBill").innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML =  "$" + tipEach.toFixed(2);
    document.getElementById("billError").innerHTML = "";
    }

};*/
document.getElementById("billTotal").onkeyup = function(){
    var bill = Number(document.getElementById("billTotal").value);
    if(isNaN(bill)){
        document.getElementById("billError").innerHTML = "Bill can contain numbers only!";
        document.getElementById("tipOutput").innerHTML = "0%";
        document.getElementById("tipInput").value = 0;
        document.getElementById("splitOutput").innerHTML = "";
        document.getElementById("splitInput").value = 0;
        document.getElementById("newBill").innerHTML = "$";
        document.getElementById("tipEach").innerHTML =  "$";
    }else{
        document.getElementById("billError").innerHTML = "";
    }
};
document.getElementById("container").onchange = function(){
    var bill = Number(document.getElementById("billTotal").value);
    if(! isNaN(bill)){
    var tipPercent = document.getElementById("tipInput").value;
    var split = document.getElementById("splitInput").value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    document.getElementById("tipOutput").innerHTML = tipPercent + "%";
    document.getElementById("splitOutput").innerHTML = split;
    document.getElementById("newBill").innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML =  "$" + tipEach.toFixed(2);
    }

};
