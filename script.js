//Declaring a variable that holds the form and another one for the div 'result'
var form = document.querySelector('form');
var result = document.querySelector('#result');

/*window.onload = function(){
	form.loanAmount.value = '#';
	form.rate.value = '%';
}*/

//Creating the function that calculates the interest
function calculateInterest(amount, rate, time){
	var I = (amount * rate * time)/100;
	result.innerHTML = 'The interest is '+I
	//console.log("The interest is "+I);

}

//Adding event for when the submit button gets clicked
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var amount = this.loanAmount.value;
	var rate = this.rate.value;
	var time = this.loanTerm.value;

	if (amount || rate || time === ''){
		window.alert('You must fill in all the boxes');
	} else {
		calculateInterest(amount, rate, time);
	}

});