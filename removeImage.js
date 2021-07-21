function removeImage(event) {
    var index = event.target.dataset.index;
    if(index) {
      var qws = confirm('Do you really want to remove the picture?');
      if (qws === true){
      images.splice(index, 1);
      displayImages(imagesList, images);
      localStorage.setItem('images', JSON.stringify(images));
      } 
    }
  }