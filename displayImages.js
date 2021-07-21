function displayImages(imagesList, images) {
  imagesList.innerHTML = images.map(function (image, index) {
    return `
      <li>
        <figure>
          <img src=${image.url} alt="Image ${index + 1}">
          <figcaption>
            <p class = "name_img" data-name="${index}">${image.name}</p>
            <p>${(image.size / 1000).toFixed(1)} kB</p>
          </figcaption>
          <button id="removeButton" data-index="${index}">Remove</button>
        </figure>
      </li>
    `
  }).join('');
}