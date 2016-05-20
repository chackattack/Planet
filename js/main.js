//Array of planets

var orbits = [
	{
		planet: "earth",
		info: "It's the life of the solar system.",
		image: "img/earth.png"
	},
	{
		planet: "mars",
		info: "Where did all the water go?",
		image: "img/mars.png"
	},
	{
		planet: "neptune",
		info: "It's invisible to the naked eye.",
		image: "img/naptune.png"
	},
	{
		planet: "uranus",
		info: "This blue planet is out of whack.",
		image: "img/uranus.png"
	},
	{
		planet: "jupiter",
		info: "It's the giant of the solar system.",
		image: "img/jupiter.png"
	},
	{
		planet: "mercury",
		info: "It's the sun's nearest neighbor.",
		image: "img/mercury.png"
	},
	{
		planet: "saturn",
		info: "It's the lord of the rings.",
		image: "img/saturn.png"
	},
	{
		planet: "venus",
		info: "Is it Earth's sister planet?",
		image: "img/venus.png"
	},
	{
		planet: "pluto",
		info: "I have some bad news for you...",
		image: "img/pluto.png"
	}
]

function galaxy() {
	//call input and make lower case
	var planetA = document.getElementById("planet").value.toLowerCase()
	console.log(planetA)

	for(i = 0; i < orbits.length; i++) {
		console.log(i)
		if(planetA == orbits[i].planet) {
			document.getElementById("yourPlanet").innerHTML = orbits[i].planet
			document.getElementById("icon").src = orbits[i].image
			document.getElementById("planetInfo").innerHTML = orbits[i].info
			console.log("if statement ran")
			break
		} document.getElementById("yourPlanet").innerHTML = "That's not a planet. Please go back to 2nd grade and learn the planets."
	}

}
























