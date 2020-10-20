class Album {
    userId;
    id;
    title;
    previewPhotoPathUrl;
    
    constructor(json) {
        this.id = json.id;
        this.userId = json.id;
        this.title = json.title;
    }
}