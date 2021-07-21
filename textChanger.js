function textChange (event){
    img_name = event.target;
    if (img_name.className == 'name_img') {
        index_name = event.target.dataset.name;
    editStart(img_name);
    } else if(img_name.tagName == 'FONT') {
        img_name = img_name.parentNode;
        index_name = event.target.dataset.name;
        editStart(img_name);
    }
}

let new_name;
let index_name;
var img_name;

function editStart(img_name) {
    new_name = document.createElement('input');
    new_name.value = img_name.innerHTML;

    new_name.onkeydown = function(event) {
      if (event.key == 'Enter') {
        this.blur();
      }
    };
    new_name.onblur = function() {
      editEnd(img_name, new_name, index_name);
    };

    img_name.replaceWith(new_name);
    //new_name.focus();
  }

  function editEnd(old, new_n, index_name) {
    old.innerHTML = new_n.value;
    new_n.replaceWith(old);
    images[index_name].name = old.innerHTML;
    displayImages(imagesList, images);
    localStorage.setItem('images', JSON.stringify(images));
  }
