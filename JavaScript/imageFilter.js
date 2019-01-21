var gallerySlides = new GallerySlideShow();


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


function openModal(selectedImage) {
  let selectedImageDataIndex = selectedImage.getAttribute('data-index')-1;
  gallerySlides.setNewIndex(selectedImageDataIndex);
  gallerySlides.displayModal();
}