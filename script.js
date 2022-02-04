$("#button").click(function () {
    let data = $("#date").val();
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=rTmkFr1KIdNNW7xUbldLmAQOn6Or695jGKIgUqyU&date=${data}`,
      type: "GET",
      success: function (apod) {
        $(".cx2").css("display", "flex");
        $("#foto").attr("src", apod.url);
        $("#titulo").text(apod.title);
        $("#texto").text(apod.explanation);
      },
    });
  });