/**
 * 课程大纲
 * 
 * Toc 是英文 table of contents 的缩写
 */
class Toc {
    constructor(id, title, parent) {
        this.id = id
        this.title = title
        this.children = []
        this.parent = parent
        this.depth = !parent ? 0 : parent.depth + 1
        console.debug(this.depth)
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
     * 从JSON装配Toc对象
     * 
     * @param {Array<Object>} objects 
     * @param {Toc} parent 
     */
    static fromJSON(objects, parent) {
        const tocs = []
        for (var object of objects) {
            const toc = new Toc(object.id, object.title, parent)
            tocs.push(toc)
            if (object.children && object.children.length > 0) {
                toc.setChildren(Toc.fromJSON(object.children, toc))
            }
        }
        return tocs
    }
}

export default Toc