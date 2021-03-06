/**
 * 课程大纲
 * 
 * Toc 是英文 table of contents 的缩写
 */
class Toc {
    constructor(id, title, videoURL, timeLength, index, parent) {
        this.id = id
        this.title = title
        this.videoURL = videoURL
        this.timeLength = timeLength
        this.index = index
        this.children = []
        this.parent = parent
        this.depth = !parent ? 0 : parent.depth + 1
    }

    /**
     * 
     * @param {Toc} toc 
     */
    addChild(toc) {
        this.children.push(toc)
    }

    setChildren(children) {
        this.children = children
    }

    /**
     * @return {Toc}
     */
    firstChild() {
        return this.children[0]
    }

    /**
     * 从JSON装配Toc对象
     * 
     * @param {Array<Object>} objects 
     * @param {Toc} parent 
     */
    static fromJSON(objects, parent) {
        const tocs = []
        var index = 1
        for (var object of objects) {
            const toc = new Toc(object.id, object.title, object.video, object.time_length, index, parent)
            tocs.push(toc)
            if (object.children && object.children.length > 0) {
                toc.setChildren(Toc.fromJSON(object.children, index, toc))
            }
            index += 1
        }
        return tocs
    }
}

export default Toc