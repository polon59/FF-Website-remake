function filterSeclection(categoryName) {
  if (categoryName == "all") {
    $(".image-box").show();
  }else{
    $(".image-box").hide();
    $(`.${categoryName}`).show();
  }
}


var gallerySlides = new GallerySlideShow();

function openModal(imageBox) {
  gallerySlides.displayModal(imageBox);
}