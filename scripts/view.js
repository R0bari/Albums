function renderAlbums() {
    let albumRow = document.querySelector(".row");
    let albums = document.querySelectorAll(".album-entity");
    if (albums.length > 0) {
        albums.forEach(album => albumRow.removeChild(album));
    }

    albumsCollection.albums.forEach(currentAlbum => {

        let viewButton = document.createElement("button");
        viewButton.className = "btn btn-sm btn-outline-secondary";
        viewButton.innerHTML = "View";
        let editButton = document.createElement("button");
        editButton.className = "btn btn-sm btn-outline-secondary";
        editButton.innerHTML = "Edit";

        let buttonGroup = document.createElement("div");
        buttonGroup.className = "btn-group";
        buttonGroup.appendChild(viewButton);
        buttonGroup.appendChild(editButton);
        let mutedText = document.createElement("small");
        mutedText.className = "text-muted";
        mutedText.innerHTML = "UserId: " + currentAlbum.userId;

        let justifyContentDiv = document.createElement("div");
        justifyContentDiv.className = "d-flex justify-content-between align-items-center";
        justifyContentDiv.appendChild(buttonGroup);
        justifyContentDiv.appendChild(mutedText);
        let albumCardBody = document.createElement("div");
        albumCardBody.className = "card-body";
        albumCardBody.appendChild(justifyContentDiv);

        let albumCardText = document.createElement("p");
        albumCardText.className = "card-text";
        albumCardText.innerHTML = currentAlbum.title;
        let albumImg = document.createElement("img");
        albumImg.className = "bd-placeholder-img card-img-top";
        albumImg.offsetWidth = "100%";
        albumImg.offsetHeight = "225px";
        albumImg.src = currentAlbum.previewPhotoPathUrl;

        let albumCard = document.createElement("div");
        albumCard.className = "card mb-4 shadow-sm";
        albumCard.appendChild(albumCardText);
        albumCard.appendChild(albumImg);
        albumCard.appendChild(albumCardBody);

        let albumCol = document.createElement("div");
        albumCol.className = "col-md-4 album-entity";
        albumCol.appendChild(albumCard);

        albumRow.appendChild(albumCol);
    });
}

function renderAlbumsFirst() {
    let direction = 0, type = "userId";
    if (localStorage.getItem('direction')) {
        direction = localStorage.getItem('direction');
    }
    if (localStorage.getItem('type')) {
        type = localStorage.getItem('type');
    }
    
    filter = new Filter(direction, type);
    albumsCollection.filterAlbums(filter);
    renderAlbums();
}


