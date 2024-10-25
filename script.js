if (!navigator.userAgent.includes("ArtisBrowser")) {
  window.location.href = "unauthorized_access/unauthoried_browser.html"
}
// disable right click
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // define the list of predefined users and their corresponding links
  var userLinks = {
    "arifulislam18340": "./course/course.html",
    "mdjafaruddinsomrat": "./course/course.html",
    "muhammmadali177": "./course/course.html",
    "atikulhoqueimran": "./course/course.html",
    "tanvi150160": "./course/course.html",
    "ahmedshafin74": "./course/course.html",
    "mnsakibalhasan2000": "./course/course.html",
    "abdullah.adnin.97": "./course/course.html",
    "moniraakter696787": "./course/course.html",
  };

  // define the list of predefined users with their authentication details
  var users = [
    { username: "arifulislam18340", password: "nodropout8645132aew"},
    { username: "mdjafaruddinsomrat", password: "nodropout45215wae"},
    { username: "muhammmadali177", password: "nodropout4512adw"},
    { username: "atikulhoqueimran", password: "nodropout456132sba"},
    { username: "tanvi150160", password: "nodropout485adsvx"},
    { username: "ahmedshafin74", password: "nodropout64521dvsw"},
    { username: "mnsakibalhasan2000", password: "nodropout846512wk"},
    { username: "abdullah.adnin.97", password: "nodropout98465gsa"},
    { username: "moniraakter696787", password: "nodropout854wea"},
  ];

  // check if the username and password match any of the predefined users
  var authenticatedUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  // check if the user's IP address matches their predefined IP address
  if (authenticatedUser) {
    // set the authenticated flag in session storage
    sessionStorage.setItem("authenticated", "true");

    // redirect the user to their corresponding page
    window.location.href = userLinks[username];
  } else {
    alert("Access denied");
  }
}
