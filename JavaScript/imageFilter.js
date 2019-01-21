var gallerySlides = new GallerySlideShow();
gallerySlides.changeCategory("image-box");


function filterSeclection(categoryName) {
    $(".image-box").hide();
    $(`.${categoryName}`).show();
    gallerySlides.changeCategory(categoryName);
}

function displayPrevPhoto(){
  gallerySlides.updateIndex(-1);
}

function displayNextPhoto(){
  gallerySlides.updateIndex(1);
}


function openModal(imageBox) {
  let currentIndex = imageBox.getAttribute('data-index')-1;
  gallerySlides.displayModal(currentIndex);
}