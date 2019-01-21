function filterSeclection(categoryName) {
  if (categoryName == "all") {
    $(".image-box").show();
  }else{
    $(".image-box").hide();
    $(`.${categoryName}`).show();
  }
}