function sayHello () {
	var userImput = document.getElementById("userImput").value;
	console.log(userImput);
	var message = "<h2>Hello " + userImput + "!</h2>";

	document.getElementById("content").innerHTML = message;

	if (userImput === "banana") {
		var item = document.getElementsByTagName("h1").textContent;
		item = "You have gained access!";
		document.getElementsByTagName("h1").textContent = item;

	}
}