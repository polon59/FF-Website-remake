
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

       console.log("show");

       let currentImageSrcAttr = this.currentCategoryImgList[this.currentIndex].getAttribute('src');

       $("#modal img").attr('src', currentImageSrcAttr);
       $("#modal").show();

        // console.log(imageBox.getAttribute('data-category'));
        // console.log(imageBox.getAttribute('data-index'));

    }

    setNewIndex(selectedImageDataIndex){
        this.currentIndex = selectedImageDataIndex;
    }

    updateIndex(value){
        this.currentIndex += value;
        if (this.currentIndex < 0) {
            this.currentIndex = this.currentCategoryImgList.length;
        }
        else if(this.currentIndex >= this.currentCategoryImgList.length){
            this.currentIndex = 0;
        }

        console.log(this.currentIndex);
        this.displayModal(this.currentIndex);
    }


    changeCurrentCategoryImgList(newCategory){
        this.currentCategoryList = document.getElementsByClassName(newCategory);

        console.log(`new category set to ${newCategory}`)
        this.currentCategoryImgList = [];

        for (let divElement of this.currentCategoryList) {
            this.currentCategoryImgList.push(divElement.getElementsByTagName('img')[0]);
            console.log("adding image of specified category to list");
        }
        console.log(this.currentCategoryImgList.length + " CURR LEN")

        
    }


    changeCategory(newCategory){
        this.changeCurrentCategoryImgList(newCategory);
        this.currentCategory = newCategory;
    }
}