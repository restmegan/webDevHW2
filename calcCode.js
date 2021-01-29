//this is the JS code for the calculator

(function() {
	"use strict";

	let firstNum = "";
	let secondNum = "";
	let operator = "";
	let followsOp = false;

	//I tried to have one function with a number input but it broke
	//the program
	function oneClicked () {
		var source = document.getElementById("textfield");
		if (followsOp) {
			source.value = "";
			followsOp = false;
		}
		source.value = source.value.concat("1");
	}
	function twoClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("2");
	}
	function threeClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("3");
	}
	function fourClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("4");
	}
	function fiveClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("5");
	}
	function sixClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("6");
	}
	function sevenClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("7");
	}
	function eightClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("8");
	}
	function nineClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("9");
	}
	function zeroClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat("0");
	}
	function dotClicked () {
		var src = document.getElementById("textfield");
		if (followsOp) {
			src.value = "";
			followsOp = false;
		}
		src.value = src.value.concat(".");
	}

	function clearClicked () {
		var src = document.getElementById("textfield");
		src.value = "";
		firstNum = "";
		secondNum = "";
		operator = "";
		followsOp = false;
	}
	function plusEqClicked() {
		var src = document.getElementById("textfield");
		followsOp = false;
		if(src.value.length > 0 && operator == "") {
			firstNum = src.value;
			operator = "+";
			src.value = src.value.concat("+");
		} else if (firstNum.length > 0) {
			secondNum = src.value.slice(src.value.indexOf(operator) + 1);
			let result = 0;
			if (operator == "+") {
				result = Number(firstNum) + Number(secondNum);
			} else if (operator == "-") {
				result = Number(firstNum) - Number(secondNum);
			} else if (operator == "*") {
				result = Number(firstNum) * Number(secondNum);
			} else if (operator == "/") {
				result = Number(firstNum) / Number(secondNum);
			}
			src.value = result;
			firstNum = result;
			operator = "";
			secondNum = "";
			followsOp = true;
		}
	}
	function minusClicked () {
		var src = document.getElementById("textfield");
		followsOp = false;
		if (src.value.length > 0 && operator == "") {
			firstNum = src.value;
			operator = "-";
			src.value = src.value.concat("-");
		}
		console.log(operator);
	}
	function timesClicked () {
		var src = document.getElementById("textfield");
		followsOp = false;
		if(src.value.length > 0 && operator == "") {
			firstNum = src.value;
			operator = "*";
			src.value = src.value.concat("*");
		}
	}
	function divideClicked () {
		var src = document.getElementById("textfield");
		followsOp = false;
		if(src.value.length > 0 && operator == "") {
			firstNum = src.value;
			operator = "/";
			src.value = src.value.concat("/");
		}
	}

	function setupButtons () {
		var oneBtn = document.getElementById('one');
		oneBtn.addEventListener("click", oneClicked, false);
		var twoBtn = document.getElementById('two');
		twoBtn.addEventListener("click", twoClicked, false);
		var threeBtn = document.getElementById("three");
		threeBtn.addEventListener("click", threeClicked, false);
		var fourBtn = document.getElementById("four");
		fourBtn.addEventListener("click", fourClicked, false);
		var fiveBtn = document.getElementById("five");
		fiveBtn.addEventListener("click", fiveClicked, false);
		var sixBtn = document.getElementById("six");
		sixBtn.addEventListener("click", sixClicked, false);
		var sevenBtn = document.getElementById("seven");
		sevenBtn.addEventListener("click", sevenClicked, false);
		var eightBtn = document.getElementById("eight");
		eightBtn.addEventListener("click", eightClicked, false);
		var nineBtn = document.getElementById("nine");
		nineBtn.addEventListener("click", nineClicked, false);
		var zeroBtn = document.getElementById("zero");
		zeroBtn.addEventListener("click", zeroClicked, false);
		var dotBtn = document.getElementById("point");
		dotBtn.addEventListener("click", dotClicked, false);
		var clearBtn = document.getElementById("clear");
		clearBtn.addEventListener("click", clearClicked, false);
		var plusEqBtn = document.getElementById("plusEquals");
		plusEqBtn.addEventListener("click", plusEqClicked, false);
		var minusBtn = document.getElementById("minus");
		minusBtn.addEventListener("click", minusClicked, false);
		var timesBtn = document.getElementById("times");
		timesBtn.addEventListener("click", timesClicked, false);
		var divideBtn = document.getElementById("divide");
		divideBtn.addEventListener("click", divideClicked, false);
	}

	window.addEventListener("load", setupButtons, false);
})();
