var gallerySlides = new GallerySlideShow();

function filterSeclection(categoryName) {
  if (categoryName == "all") {
    $(".image-box").show();
    gallerySlides.changeCategory("all");
  }else{
    $(".image-box").hide();
    $(`.${categoryName}`).show();
    gallerySlides.changeCategory(categoryName);
  }
}




function openModal(imageBox) {
  gallerySlides.displayModal(imageBox);
}