

//Creat an array of dog breeds
var dogs = ["dachsund","akita", "chihuahua", "pekingese", "collie", "beagle", "rottweiler", "malamute","husky","poodle","boxer","maltese","pomeranian","greyhound","havanese","papillon","corgi"]

	//Set the "remaining guess" number
	var remainGuess = 10;
	
	//Have the computer pick a breed randomly from the array
	var compPick = Math.floor(Math.random() *17) + 1;
	var compDog = dogs[compPick];
	console.log("Breed",compDog);

	//Create an array of letters out of the breed name
	var compDogArray = compDog.split("");
	console.log("Array of Breed name",compDogArray);
	
	//Determine the length of the breed name
	var dogLength = compDogArray.length;
	console.log(dogLength);

	//Write "_" as long as the length of breed name
	for(var i = 0; i < dogLength; i++) {
		compDogArray[i] = " _ ";
		document.getElementById("blanks").innerHTML += compDogArray[i];
	}
	
	var holdDogArray = compDog.split("");

	//Capture which letter key the user presses
	document.onkeyup = function(event) {
		console.log("Picked key", event.key)
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("userGuess",userGuess);
		//Print the letters the user types in
		document.getElementById("userGuess").innerHTML += " " + userGuess;

		//Decrease the remaining guesses number by one
		remainGuess--;
		if(remainGuess < 0) {
			remainGuess = 10;
		}
		document.getElementById("remaining").innerHTML = remainGuess;

		
		var str = "";
		//As long as the length of the breed name, go through the loop
		for(var i = 0; i < dogLength; i++) {
			console.log("i is",i);
			
			//If the user's key matches the letter
			if(userGuess === holdDogArray[i]) {
				
				//Add the letter to an array
				var nameArray = [];
				nameArray.push(userGuess);
				console.log("nameArray is",nameArray);
				
				//Create a place holder for the user key letter
				var divDog = document.createElement("div");
				
				//Add the user key letter to the place holder
				divDog.innerHTML = userGuess;
				console.log("div",divDog);

				//Append to the id "blanks"
				document.getElementById("blanks").appendChild(divDog);

				console.log("it's a match");
				
				
			}
			

			else if (str === "") {
				str += " _ ";
				console.log("No match, str contains",str)
			}
			
			//document.getElementById("blanks").innerHTML = str;
		
		}
			
	}

