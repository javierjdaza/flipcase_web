function changeColor(clickedElement) {
  // Remove the 'clicked-item' class from all nav links
  document.querySelectorAll(".active").forEach(function (element) {
    element.classList.remove("active");
  });

  // Add the 'clicked-item' class to the clicked nav link
  clickedElement.classList.add("active");
}

function handleTabClick(tabId) {
  // Remove 'active' class from all nav links
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.remove("active");
  });

  // Add 'active' class to the clicked nav link
  document.getElementById(tabId).classList.add("active");

  // Hide all tab contents
  document.querySelectorAll(".tab-pane").forEach(function (tabContent) {
    tabContent.classList.remove("show", "active");
  });

  // Show the corresponding tab content
  document
    .getElementById("content" + tabId.charAt(tabId.length - 1))
    .classList.add("show", "active");
}

// Add click event listeners to each nav link
document.getElementById("tab1").addEventListener("click", function () {
  handleTabClick("tab1");
});

document.getElementById("tab2").addEventListener("click", function () {
  handleTabClick("tab2");
});

document.getElementById("tab3").addEventListener("click", function () {
  handleTabClick("tab3");
});
handleTabClick("tab1");
