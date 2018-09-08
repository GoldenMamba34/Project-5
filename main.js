var listOfFoundImages = [];

$("#search").on("input", function() {
    listOfFoundImages = [];
    $("img").each(function(index, image) {
        var searchTerm = $("#search").val().toLowerCase();
        if ($(image).attr("title").toLowerCase().indexOf(searchTerm) > -1) {
            listOfFoundImages.push(image);
            image.style.display = "inline-block";
        } 
        else {
         image.style.display = "none";
        }
   
    });

});