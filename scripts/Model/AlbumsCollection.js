class AlbumsCollection {
    albums = [];

    push(album) {
        if (!contains(this.albums, album)) {
            this.albums.push(album);
        }
    }
    filterAlbums(currentFilter) {
        this.albums.sort((prev, next) => {
            if (currentFilter.currentFilterType === 'title') {
                if (prev.title < next.title) return -1;
                else if (prev.title > next.title) return 1;
                else return 0;
            }
            else if (currentFilter.currentFilterType === 'photo') {
                if (prev.previewPhotoPathUrl < next.previewPhotoPathUrl) return -1;
                else if (prev.previewPhotoPathUrl > next.previewPhotoPathUrl) return 1;
                else return 0;
            }
            else if (currentFilter.currentFilterType === 'userId') {
                if (prev.userId < next.userId) return -1;
                else if (prev.userId > next.userId) return 1;
                else return 0;
            }
        });
        if (+currentFilter.currentDirection === 1) {
            this.albums.reverse();
        }

        localStorage.setItem('type', currentFilter.currentFilterType);
        localStorage.setItem('direction', +currentFilter.currentDirection);
    }
}

function contains(arr, elem) {
    let alreadyExists = false;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].id === elem.id) {
            alreadyExists = true;
            break;
        }
    }
    return alreadyExists;
}



var albumsCollection = new AlbumsCollection();
