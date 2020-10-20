class Filter {
    currentDirection;   // 0 - asc, 1 - desc
    currentFilterType;  // title, photo, userId
    constructor (curDir, curType) {
        this.currentDirection = curDir;
        this.currentFilterType = curType;
    }
}
var filter;

function filterAlbums(type) {
    if (filter.currentFilterType === type) {
        if (+filter.currentDirection === 0) {
            filter.currentDirection = 1;
        } else {
            filter.currentDirection = 0;
        }
    }
    filter.currentFilterType = type;
    albumsCollection.filterAlbums(filter);
    renderAlbums();
}