//shamelessly stolen from w3 then modified slightly
function openArticle(evt, article) {
	// Declare all variables
	var i, tabcontent, l0nks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}

	// Get all elements with class="navlinks" and remove the class "active"
	l0nks = document.getElementsByClassName("navlinks");
	for (i = 0; i < l0nks.length; i++) {
	l0nks[i].className = l0nks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(article).style.display = "block";
	evt.currentTarget.className += " active";
}
// get element with id="default" and click it
document.getElementById("default").click();