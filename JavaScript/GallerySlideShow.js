
class GallerySlideShow{

    constructor(){
        $(".image-box").attr('onclick', 'openModal(this)')
        this.currentCategory;
        this.currentCategoryIndex;
        this.currentIndex;
        this.currentCategoryList = new Array();
        this.currentCategoryImgList = new Array();
    }


    displayModal(imageBox){
    //    let imageInModal = $("#modal").getElementsByTagName('img')[0];

    // set current image in modal to index from categorylist
       $("#modal").show();

        // console.log(imageBox.getAttribute('data-category'));
        // console.log(imageBox.getAttribute('data-index'));

    }





    changeCurrentCategoryImgList(newCategory){
        if (newCategory == "all") {
            this.currentCategoryList = document.getElementsByClassName("imageBox");
        } else {
            this.currentCategoryList = document.getElementsByClassName(newCategory);
        }

        console.log(`new category set to ${newCategory}`)


        for (let divElement of this.currentCategoryList) {
            this.currentCategoryImgList.push(divElement.getElementsByTagName('img')[0]);
            console.log("adding image of specified category to list");
        }

        
    }


    changeCategory(newCategory){
        this.changeCurrentCategoryImgList(newCategory);
        this.currentCategory = newCategory;
    }
}