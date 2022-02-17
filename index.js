const resultsEl = document.getElementById("results");
const homeBtn = document.getElementById("home-btn");
const displayResultsEl = document.getElementById("display-results");


function q1a1() {
	localStorage.setItem("q1", 1);
	console.log(localStorage);
}

function q1a2() {
	localStorage.setItem("q1", 2);
	console.log(localStorage);
}

function q1a3() {
	localStorage.setItem("q1", 3);
	console.log(localStorage);
}

function q1a4() {
	localStorage.setItem("q1", 4);
	console.log(localStorage);
}

function q2a1() {
	localStorage.setItem("q2", 1);
	console.log(localStorage);
}

function q2a2() {
	localStorage.setItem("q2", 2);
	console.log(localStorage);
}

function q2a3() {
	localStorage.setItem("q2", 3);
	console.log(localStorage);
}

function q2a4() {
	localStorage.setItem("q2", 4);
	console.log(localStorage);
}

function q3a1() {
	localStorage.setItem("q3", 1);
	console.log(localStorage);
}

function q3a2() {
	localStorage.setItem("q3", 2);
	console.log(localStorage);
}

function q3a3() {
	localStorage.setItem("q3", 3);
	console.log(localStorage);
}

function q3a4() {
	localStorage.setItem("q3", 4);
	console.log(localStorage);
}

function q4a1() {
	localStorage.setItem("q4", 1);
	console.log(localStorage);
}

function q4a2() {
	localStorage.setItem("q4", 2);
	console.log(localStorage);
}

function q4a3() {
	localStorage.setItem("q4", 3);
	console.log(localStorage);
}

function q4a4() {
	localStorage.setItem("q4", 4);
	console.log(localStorage);
}

function q5a1() {
	localStorage.setItem("q5", 1);
	console.log(localStorage);
}

function q5a2() {
	localStorage.setItem("q5", 2);
	console.log(localStorage);
}

function q5a3() {
	localStorage.setItem("q5", 3);
	console.log(localStorage);
}

function q5a4() {
	localStorage.setItem("q5", 4);
	console.log(localStorage);
}

function q6a1() {
	localStorage.setItem("q6", 1);
	console.log(localStorage);
}

function q6a2() {
	localStorage.setItem("q6", 2);
	console.log(localStorage);
}

function q6a3() {
	localStorage.setItem("q6", 3);
	console.log(localStorage);
}

function q6a4() {
	localStorage.setItem("q6", 4);
	console.log(localStorage);
}

function q7a1() {
	localStorage.setItem("q7", 1);
	console.log(localStorage);
}

function q7a2() {
	localStorage.setItem("q7", 2);
	console.log(localStorage);
}

function q7a3() {
	localStorage.setItem("q7", 3);
	console.log(localStorage);
}

function q7a4() {
	localStorage.setItem("q7", 4);
	console.log(localStorage);
}

function q8a1() {
	localStorage.setItem("q8", 1);
	console.log(localStorage);
}

function q8a2() {
	localStorage.setItem("q8", 2);
	console.log(localStorage);
}

function q8a3() {
	localStorage.setItem("q8", 3);
	console.log(localStorage);
}

function q8a4() {
	localStorage.setItem("q8", 4);
	console.log(localStorage);
}

function q9a1() {
	localStorage.setItem("q9", 1);
	console.log(localStorage);
}

function q9a2() {
	localStorage.setItem("q9", 2);
	console.log(localStorage);
}

function q9a3() {
	localStorage.setItem("q9", 3);
	console.log(localStorage);
}

function q9a4() {
	localStorage.setItem("q9", 4);
	console.log(localStorage);
}

function q10a1() {
	localStorage.setItem("q10", 1);
	console.log(localStorage);
}

function q10a2() {
	localStorage.setItem("q10", 2);
	console.log(localStorage);
}

function q10a3() {
	localStorage.setItem("q10", 3);
	console.log(localStorage);
}

function q10a4() {
	localStorage.setItem("q10", 4);
	console.log(localStorage);
}

console.log(localStorage);



resultsEl.addEventListener("click", function() {
	values = Object.values(localStorage);
	console.log(values);

	var oneCount = 0;
	var twoCount = 0;
	var threeCount = 0;
	var fourCount = 0;


	for (i = values.length - 10; i <= values.length - 1; i++) {
		if (values[i] == 1) {
			oneCount += 1;
		}
		if (values[i] == 2) {
			twoCount += 1;
		}
		if (values[i] == 3) {
			threeCount += 1;
		}
		if (values[i] == 4) {
			fourCount += 1;
		}
}
		var charNum = Math.max(oneCount, twoCount, threeCount, fourCount);

		if (oneCount == charNum) {
			displayResultsEl.innerHTML = "You are Hamlet!"
		} else if (twoCount == charNum) {
			displayResultsEl.innerHTML = "You are Claudius!"
		} else if (threeCount == charNum) {
			displayResultsEl.innerHTML = "You are Ophelia!"
		} else if (fourCount == charNum) {
			displayResultsEl.innerHTML = "You are Polonius!"
		}

});

homeBtn.addEventListener("click", function () {
	localStorage.clear()});

