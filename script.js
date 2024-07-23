let buttonTexts = ["Click!", "ow", "hey!"];

function buttonClicked(button) {
	// console.log(event);
	button.innerHTML = randomButtonText();
}

function randomButtonText() {
	const index = Math.floor( Math.random() * buttonTexts.length );
	return buttonTexts[index];
}

document.onclick = (event) => {
	// https://stackoverflow.com/a/69751725/22146374
	const selection = getSelection();
	if (selection.rangeCount) {
		const range = selection.getRangeAt(0);
		const targetedNode = range.startContainer;
		const clickedLetter = targetedNode.textContent.substr(range.startOffset, 1);
		// console.log(clickedLetter);
		if (clickedLetter == "r") {
			r();
		}
	}
}

function r() {
	let title = document.querySelector("title");
	let texts = document.querySelectorAll("p");
	let button = document.querySelector("button");
	title.innerHTML = convertToRs(title.innerHTML);
	button.innerHTML = convertToRs(button.innerHTML);

	for (let text of texts) {
		text.innerHTML = convertToRs(text.innerHTML);
	}

	buttonTexts = ["rrrrrr", "rr", "rrrr"];
}

function convertToRs(value) {
	let result = "";

	for (let i = 0; i < value.length; i++) {
		if (value[i] == " ") {
			result += " ";
			continue;
		}
		
		result += "r";
	}

	return result;
}