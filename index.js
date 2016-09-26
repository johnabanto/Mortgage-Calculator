$(document).ready(function(){ // Code stating that jQuery will be used.

var cycle = [
    ['Monthly', 12],
    ['Bi-Monthly', 6],
]; // array created to populate drop down list.

cycle.forEach(function(value) {
    $('#cycle').append($('<option></option>').text(value[0]).val(value[1]));
}); // take the selected option from the drop down list and select the value associated with the array.

// button to calculate payment
$('#button').click(function() {
    var loanBalance = $("#loan").val();
    var interestRate = $("#interest").val();
    var loanTerm = $("#term").val();
    var period = $("select option:selected").val();

// monthly interest rate       
var monthlyInterestRate = (interestRate / 100) / period;        

// number of payments
var numberOfPayments = loanTerm * period;

// compounded interest rate
var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

// interest quotient
var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

// final calculation
var monthlyPayment = loanBalance * interestQuotient;

        $("#result").text("Your monthly mortgage will be $" + Math.round(monthlyPayment) +".");
    }); // The variable result is activated and written with the above statement and the variable monthlyPayment is displayed.
});