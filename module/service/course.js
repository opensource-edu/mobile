import Toc from "../model/toc";
import CourseRemote from "../model/remote";
import TocDTOAssembler from "./dto/assembler/TocDTOAssembler";

export default class CourseService {

    constructor() {
        this.courseRemote = new CourseRemote()
        this.tocAssembler = new TocDTOAssembler()
    }

    async fetchCourse(id) {

    }

    /**
     * 
     * @param {int} id 
     */
    async fetchTocDTOList(id) {
        const dto = await this.courseRemote.fetchTocs(1)
        const tocs = Toc.fromJSON(dto)

        
        const dtoList = this.tocAssembler.toDTOList(tocs)
        console.debug(dtoList)
        return dtoList
    }
}