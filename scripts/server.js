previewPhotos = [];

function loadMainPage() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(jsonAlbums => {
            formAlbumsCollection(jsonAlbums);
        })
        .then(() => loadPreviewPhotos());
    console.log(albumsCollection);

    function formAlbumsCollection(json) {
        json.forEach(element => albumsCollection.push(new Album(element)) );
    }
}

function loadPreviewPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos/')
        .then(response => response.json())
        .then(jsonPhotos => {
            addPreviewPhotosToAlbums(jsonPhotos);
        })
        .then(() => renderAlbumsFirst());

    function addPreviewPhotosToAlbums(photos) {
        albumsCollection.albums.forEach(album => {
            const randomPhoto = photos[getRandomInt(0,99)];
            if (!album.previewPhotoPathUrl) {
                album.previewPhotoPathUrl = randomPhoto.url;
            }
        })
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


loadMainPage();