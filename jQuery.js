$(document).ready(function () {
  let name = $("#name");
  let email = $("#email");
  let phone = $("#phone");

  let required = new Array(name, email, phone);
  $("#submit").on("click", function (event) {
    for (let i = 0; i < required.length; i++) {
      if (required[i].val() == "") {
        $("p").text("Please Fill Out Required Fields");
        $("p").addClass("warning");
        required[i].prev().addClass("warning");
      }
        required[i].on("input", function () {
          if (!(required[i].val() == "")) {
            required[i].prev().removeClass("warning");
          }
        });
    }
    if (!$("label").hasClass("warning")) {
      $("form").remove();
      $("h2").text("Thanks for your feedback!");
    }
  });
});
