import TocDTO from "../TocDTO";

export default class TocDTOAssembler {
    toDTOList(tocs) {
        const dtoList = []
        const loop = function(tocs) {
            for (var toc of tocs) {
                dtoList.push(new TocDTO(toc.id, toc.title, toc.depth))

                if (toc.children && toc.children.length >0) {
                    loop(toc.children)
                }
            }
        }
        loop(tocs)
        return dtoList
    }
}