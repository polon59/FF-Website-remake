
class GallerySlideShow{

    constructor(){
        $(".image-box").attr('onclick', 'openModal(this)')
        this.currentCategory;
        this.currentCategoryIndex;
        this.currentIndex;
    }


    displayModal(imageBox){
        console.log(imageBox.getAttribute('data-category'));
        console.log(imageBox.getAttribute('data-index'));

    }
}