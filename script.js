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
    // "BlastoiseBattler": "./course/course.html",
    "opuarifur": "./course/course.html",
    // "nahidaislam2070": "./course/course.html",
    // "mnsakibalhasan2000": "./course/course.html",
    // "adnin97": "./course/course.html",
    "moniraakter696787": "./course/course.html",
    // "GyaradosGladiator": "./course/course.html",
    // "JigglypuffJester": "./course/course.html",
    // "LaprasLover": "./course/course.html",
    // "LucarioLancer": "./course/course.html",
    // "MewMagician": "./course/course.html",
    // "MewtwoMaster": "./course/course.html",
    // "PikachuPilot": "./course/course.html",
    // "RaichuRanger": "./course/course.html",
    // "SnivySneaker": "./course/course.html",
    // "SnorlaxSnoozer": "./course/course.html",
    // "SquirtleSurfer": "./course/course.html",
    // "TyphlosionTornado": "./course/course.html",
    // "UmbreonUnderdog": "./course/course.html",
    // "VaporeonVanguard": "./course/course.html"
  };

  // define the list of predefined users with their authentication details
  var users = [
    // { username: "BlastoiseBattler", password: "ShellSmash33"},
    { username: "opuarifur", password: "nodropout456532ds"},
    // { username: "nahidaislam2070", password: "nodropout48655ds"},
    // { username: "mnsakibalhasan2000", password: "nodropout46a32sdc"},
    // { username: "adnin97", password: "nodropout845ads"},
    { username: "moniraakter696787", password: "nodropout854afds"},
    // { username: "GyaradosGladiator", password: "HydroPump77"},
    // { username: "JigglypuffJester", password: "SingAlong44"},
    // { username: "LaprasLover", password: "SurfsUp11"},
    // { username: "LucarioLancer", password: "AuraSphere55"},
    // { username: "MewMagician", password: "AuraSphere25"},
    // { username: "MewtwoMaster", password: "PsychicPower55"},
    // { username: "PikachuPilot", password: "Thunderbolt25"},
    // { username: "RaichuRanger", password: "ThunderShock22"},
    // { username: "SnivySneaker", password: "LeafTornado11"},
    // { username: "SnorlaxSnoozer", password: "DreamEater66"},
    // { username: "SquirtleSurfer", password: "WaterGun11"},
    // { username: "TyphlosionTornado", password: "FlameWheel77"},
    // { username: "UmbreonUnderdog", password: "DarkPulse99"},
    // { username: "VaporeonVanguard", password: "AquaRing44"}
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
