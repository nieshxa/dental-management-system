function showTab() {
  var select = document.getElementById("tab-selector");
  var selectedTabId = select.options[select.selectedIndex].value;

  // Hide all tab content
  var tabContents = document.getElementsByClassName("tabContent");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Show the selected tab content
  document.getElementById(selectedTabId).style.display = "block";
}

// Set the first tab to be displayed by default
window.onload = function () {
  showTab();
};
