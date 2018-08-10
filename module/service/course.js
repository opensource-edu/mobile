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
        const dto = await this.courseRemote.fetchTocs(1)
        const tocs = Toc.fromJSON(dto)

        const courseRemoteObject = await this.courseRemote.fetchCourse(1)
        const course = Course.fromJSON(courseRemoteObject)

        course.tocs = tocs
       
        return course
    }
}