class GallerySlideShow{

    constructor(){
        this.currentCategory;
        this.currentCategoryIndex;
        this.currentIndex;
        this.currentCategoryList = new Array();
        this.currentCategoryImgList = new Array();
        this.setInitialCategory();
        $(".image-box").attr('onclick', 'openModal(this)');
    }

    setInitialCategory(){
        this.changeCategory("image-box");
    }

    displayModal(){
       let currentImageSrcAttr = this.currentCategoryImgList[this.currentIndex].getAttribute('src');
       $("#modal img").attr('src', currentImageSrcAttr);
       $("#modal").show();
    }

    hideModal(){
        $("#modal").hide();
    }

    setNewIndex(selectedImage){
        if (this.currentCategory == "image-box") {
            this.currentIndex = selectedImage.getAttribute('id')-1;
        } else {
            this.currentIndex = selectedImage.getAttribute('data-index')-1;
        }
    }

    updateIndex(value){
        this.currentIndex += value;
        if (this.currentIndex < 0) {
            this.currentIndex = this.currentCategoryImgList.length-1;
        }
        else if(this.currentIndex >= this.currentCategoryImgList.length){
            this.currentIndex = 0;
        }
        this.displayModal(this.currentIndex);
    }

    changeCurrentCategoryImgList(newCategory){
        this.currentCategoryList = document.getElementsByClassName(newCategory);
        this.currentCategoryImgList = [];

        for (let divElement of this.currentCategoryList) {
            this.currentCategoryImgList.push(divElement.getElementsByTagName('img')[0]);
        }
    }

    changeCategory(newCategory){
        this.changeCurrentCategoryImgList(newCategory);
        this.currentCategory = newCategory;
    }
}