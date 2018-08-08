import Toc from "../model/toc";
import CourseRemote from "../model/remote";
import TocDTOAssembler from "./dto/assembler/TocDTOAssembler";
import Course from "../model/course";

export default class CourseService {

    constructor() {
        this.courseRemote = new CourseRemote()
        this.tocAssembler = new TocDTOAssembler()
    }

    async fetchCourse(id) {
        const course = await this.courseRemote.fetchCourse(1)
        console.debug(course)
        return Course.fromJSON(course)
    }

    /**
     * 
     * @param {int} id 
     */
    async fetchTocDTOList(id) {
        const dto = await this.courseRemote.fetchTocs(1)
        const tocs = Toc.fromJSON(dto)
        return tocs
        
        // const dtoList = this.tocAssembler.toDTOList(tocs)
        // return dtoList
    }
}