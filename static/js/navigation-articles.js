document.querySelector(".continue-btn").addEventListener("click", function (evt) {
  if (evt.target.id == "artcl1") {
    window.location = "read-article";
    localStorage.article = 'artcl1';
  }
  if (evt.target.id == "artcl2") {
    window.location = "read-article";
    localStorage.article = 'artcl2';
  }
  if (evt.target.id == "artcl3") {
    window.location = "read-article";
    localStorage.article = 'artcl3';
  }
});
