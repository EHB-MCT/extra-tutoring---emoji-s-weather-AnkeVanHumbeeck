"use strict";

let emojis = [];

// TODO: fetch your data
// TODO: use then to wait for the result
// TODO: load the json from the reponse
// TODO: in the final then function, process the data and add it to the HTML

fetch("https://emoji-api.com/emojis?access_key=915f43bd42432ee85fcc28066591198d5bd3d5e1")
	.then((response) => response.json())
	.then(function (data) {
		//document.querySelector('h1').innerHTML = data[199].character
		emojis = data;
		console.log(emojis);
		emojis.forEach((element) => {
			document.querySelector("#list").insertAdjacentHTML("afterbegin", element.character);
			console.log(element);
		});
	});
