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
  document.getElementById(tabId + "_content").classList.add("show", "active");
}

// Add click event listeners to each nav link
document.getElementById("home").addEventListener("click", function () {
  handleTabClick("home");
});

document.getElementById("upload").addEventListener("click", function () {
  handleTabClick("upload");
});

document.getElementById("contact").addEventListener("click", function () {
  handleTabClick("contact");
});
handleTabClick("home");
