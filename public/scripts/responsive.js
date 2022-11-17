const drawerBtnElement = document.getElementById('drawer-btn');
const mobileDarwerElement = document.getElementById('mobile-drawer');

function toggleDrawer() {
  mobileDarwerElement.classList.toggle('open');
}

drawerBtnElement.addEventListener('click', toggleDrawer);

const numImagesAvailable = 988;
const numItemsToGenerate = 1;
const imageWidth = 480;
const imageHeight = 480;
const collectionID = 1027750;
const galleryContainer = document.querySelector('.photo-container');
function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
    .then((response) => {
      let galleryItem = document.createElement('span');
      galleryItem.classList.add('photo-item');
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
        `;
      galleryContainer.append(galleryItem);
  })}
  for(let i=0; i < numItemsToGenerate; i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
      renderGalleryItem(randomImageIndex);
}