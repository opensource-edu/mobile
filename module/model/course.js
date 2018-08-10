export default class Course {
    constructor(id, title, author, tocs) {
        this.id = id
        this.title = title
        this.author = author
        this.tocs = tocs
        this.defaultVideo = null
    }

    defaultVideo() {
        if (!this.defaultVideo) {
            this.tocs[0].firstChild()
        }
    }

    static fromJSON(json) {
        return new Course(json.id, json.title, json.author, null)
    }
}