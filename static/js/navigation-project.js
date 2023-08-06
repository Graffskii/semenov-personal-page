document.querySelector(".kard").addEventListener("click", function (evt) {
  if (evt.target.id == "proj1") {
    window.location = "check-project";
    localStorage.project = 'proj1';
  }
  if (evt.target.id == "proj2") {
    window.location = "check-project";
    localStorage.project = 'proj2';
  }
  if (evt.target.id == "proj3") {
    window.location = "check-project";
    localStorage.project = 'proj3';
  }
  if (evt.target.id == "proj4") {
    window.location = "check-project";
    localStorage.project = 'proj4';
  }
  if (evt.target.id == "proj5") {
    window.location = "check-project";
    localStorage.project = 'proj5';
  }
  if (evt.target.id == "proj6") {
    window.location = "check-project";
    localStorage.project = 'proj6';
  }

});
