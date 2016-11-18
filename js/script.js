// function sayHello () {
// 	var userImput = document.getElementById("userImput").value;
// 	console.log(userImput);
// 	var message = "<h2>Hello " + userImput + "!</h2>";

// 	document.getElementById("content").innerHTML = message;

// 	if (userImput === "banana") {
// 		var item = document.querySelector("h1").innerHTML;

// 		item = "You have gained access!";
// 		document.querySelector("h1").innerHTML = item;

// 	}
// }

// document.querySelector("body").addEventListener("mousemove", function (event){
// 	if (event.shiftKey === true) {
// 		console.log("x: " + event.clientX);
// 		console.log("y: " + event.clientY);
// 	}
// });

function showLogScreen() {
	document.getElementById("LogScreen").style.visibility = 'visible';
}

function hideLogScreen() {
	document.getElementById("LogScreen").style.visibility = 'hidden';
	document.getElementById("logError").style.visibility = 'hidden';
	document.getElementById("passwordInput").value = "";
}

function attemptLogin() {
	var userImput = document.getElementById("passwordInput").value;
	if (userImput === "banana") {
		document.getElementById("passwordInput").value = "";
		window.location.href = "HomePage.html";
	}
	else {
		document.getElementById("passwordInput").value = "";
		document.getElementById("logError").style.visibility = 'visible';
	}
}