/*
	🖥️ Full-Stack Developer 🎨 Graphic Designer 💸 Freelancer
	-----------------------------------------------------------
	👨‍💻 Author : Nitin Chakraborty.
	-------------------------------
	🔗 Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗 Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗 YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗 LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
	🔗 Twitter : https://www.twitter.com/NitinCB2001/
	--------------------------------------------------
	📧 eMail : nitin.chakraborty13@gmail.com
*/

const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(minimum, maximum) {
	minimum = Math.ceil(minimum);
	maximum = Math.floor(maximum);
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function getRandomKey() {
	return keys[getRandomNumber(0, keys.length - 1)];
}

function targetRandomKey() {
	const key = document.getElementById(getRandomKey());
	key.classList.add("selected");
	let start = Date.now();
}

function getTimestamp() {
	return Math.floor(Date.now() / 1000);
}

document.addEventListener("keyup", (event) => {
	const keyPressed = String.fromCharCode(event.keyCode);
	const keyElement = document.getElementById(keyPressed);
	const highlightedKey = document.querySelector(".selected");

	keyElement.classList.add("hit");
	keyElement.addEventListener("animationend", () => {
		keyElement.classList.remove("hit");
	});

	if (keyPressed === highlightedKey.innerHTML) {
		timestamps.unshift(getTimestamp());
		const elapsedTime = timestamps[0] - timestamps[1];
		console.log(`Typing Speed : ${60 / elapsedTime} Characters Per Minute!`);
		highlightedKey.classList.remove("selected");
		targetRandomKey();
	}
});

targetRandomKey();
