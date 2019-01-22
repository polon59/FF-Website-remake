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

function closeModal(){
  gallerySlides.hideModal();
}

function openModal(selectedImage) {
  gallerySlides.setNewIndex(selectedImage);
  gallerySlides.displayModal();
}

function openCurrentImageInNewWindow(){
  gallerySlides.openImage();
}