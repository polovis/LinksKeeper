export class Link {
    public url;
    public description;
    public category;
    public createDate;

    constructor(url, description, category) {
        this.url = url;
        this.description = description;
        this.category = category;
    }
}