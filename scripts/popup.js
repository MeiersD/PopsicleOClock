function myFunction(flavor){
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var activeTab = tabs[0];
		var myMSG = "myMSG" + flavor;
		chrome.tabs.sendMessage(activeTab.id, { message: myMSG});
	});
}

const element1 = document.getElementById("Strawberry");
const element2 = document.getElementById("Chocolate");
const element3 = document.getElementById("Lemon");
const element4 = document.getElementById("Neopolitan");

element1.addEventListener("click", function(){
	myFunction("Strawberry");
});
element2.addEventListener("click", function(){
	myFunction("Chocolate");
});
element3.addEventListener("click", function(){
	myFunction("Lemon");
});
element4.addEventListener("click", function(){
	myFunction("Neopolitan");
});