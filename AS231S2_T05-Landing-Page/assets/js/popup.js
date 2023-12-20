document.getElementById("myButton").addEventListener("click", function() {
  document.getElementById("popupContainer").style.display = "flex";
});

document.getElementById("popupContainer").addEventListener("click", function() {
  document.getElementById("popupContainer").style.display = "none";
});