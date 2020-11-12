var clickMeFirst = "btn";

$("#btn").click(function () {
  clickMeFirst = "activate";
});

$("#link").click(function (e) {
  if (clickMeFirst == "activate") {
    return true;
  } else {
    e.preventDefault();
  }
});
