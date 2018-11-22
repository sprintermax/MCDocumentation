document.getElementById("DefaultOpen").click();
function opendoc(evt, docName) {
	var minecraftclick = new Audio("../../assets/sounds/minecraftclick.wav");
	var i, documentation, doctab;
	documentation = document.getElementsByClassName("documentation");
	for (i = 0; i < documentation.length; i++) {
		documentation[i].style.display = "none";
	}
	doctab = document.getElementsByClassName("doctab");
	for (i = 0; i < doctab.length; i++) {
		doctab[i].className = doctab[i].className.replace(" active", "");
	}
	document.getElementById(docName).style.display = "block";
	evt.currentTarget.className += " active";
	minecraftclick.currentTime=0;
	minecraftclick.play();
}
