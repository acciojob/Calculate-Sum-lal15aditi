//your JS code here. If required.
let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');
let ans = document.getElementById('Sum');
function calculateSum() {
	let sum = Number(num1.value) + Number(num2.value);
	ans.innerText = sum;
}