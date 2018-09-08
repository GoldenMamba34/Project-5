var listOfFoundImages = [];

$("#search").on("input", function() {
    listOfFoundImages = [];
    $("img").each(function(index, image) {
        var searchTerm = $("#search").val().toLowerCase();
        if (($(image).attr("title").toLowerCase().indexOf(searchTerm) > -1) || (($(image).attr("alt").toLowerCase().indexOf(searchTerm) > -1))) {
            listOfFoundImages.push(image);
            image.style.display = "inline-block";
        } 
        else {
         image.style.display = "none";
        }
   
    });
});

var lightbox = $('#images a').simpleLightbox({showCounter:false,captionsData:"alt"});
$('#images a').on('show.simplelightbox', function () {
    $("body").css("backgroundColor","black");
  });
  
  $('#images a').on('close.simplelightbox', function () {
    $("body").css("backgroundColor","white");
  });
  