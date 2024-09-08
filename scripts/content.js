function getRandomInt(max) {
	return 1 + Math.floor(Math.random() * max);
}

const h1 = document.querySelector("h1");
if (!h1){
	console.log("There is no h1");
}
function addPopsicle(flavor){
	const img = document.createElement('img');
	const popURL = ("images/".concat(flavor)).concat("/pop");
	const randomInt = getRandomInt(10).toString();
	const result = popURL.concat(randomInt,".jpg");
	img.src = chrome.runtime.getURL(result);
	h1.insertAdjacentElement("afterend", img);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message.includes("myMSG")) {
        // Perform actions in response to the message from popup
		var flavor = request.message.slice(5);
		addPopsicle(flavor);
    }
});