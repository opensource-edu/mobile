export default class Course {
    constructor(id, title, author) {
        this.id = id
        this.title = title
        this.author = author
    }

    static fromJSON(json) {
        return new Course(json.id, json.title, json.author)
    }
}