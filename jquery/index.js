
    $("h1").text("Bye");
    $("h1").addClass("big-title margin-50");

    $("button").html("<em>Hey</em>");
    $("a").attr("href", "https://www.yahoo.com");

    $("h1").click(function() {
        $("h1").css("color", "purple");
    });

    
    //$("button").click(function() {
      //  $("h1").css("color", "purple");
    //});

  //  $(document).keypress(function(event) {
    //    console.log(event.key);
    //});

    $(document).keypress(function(event) {
        $("h1").text(event.key);
    });