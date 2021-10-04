(function () {
  $(document).ready(function () {
    $("img").delay(3000).fadeIn(1000);
    $("#outline").css("stroke-dasharray", $("#outline")[0].getTotalLength());
    $("#outline").css("stroke-dashoffset", $("#outline")[0].getTotalLength());
    $("#outline").animate(
      {
        strokeDashoffset: 0,
      },
      3000
    );
    $("#face").css("stroke-dasharray", $("#face")[0].getTotalLength());
    $("#face").css("stroke-dashoffset", $("#face")[0].getTotalLength());
    $("#face").animate(
      {
        strokeDashoffset: 0,
      },
      9000
    );
    $("#cube_left").css(
      "stroke-dasharray",
      $("#cube_left")[0].getTotalLength()
    );
    $("#cube_left").css(
      "stroke-dashoffset",
      $("#cube_left")[0].getTotalLength()
    );
    $("#cube_left").animate(
      {
        strokeDashoffset: 0,
      },
      9000
    );
    $("#cube_right").css(
      "stroke-dasharray",
      $("#cube_right")[0].getTotalLength()
    );
    $("#cube_right").css(
      "stroke-dashoffset",
      $("#cube_right")[0].getTotalLength()
    );
    $("#cube_right").animate(
      {
        strokeDashoffset: 0,
      },
      9000
    );
    $("#body").css("stroke-dasharray", $("#body")[0].getTotalLength());
    $("#body").css("stroke-dashoffset", $("#body")[0].getTotalLength());
    return $("#body").animate(
      {
        strokeDashoffset: 0,
      },
      5000
    );
  });
}.call(this));
