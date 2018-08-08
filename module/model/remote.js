export default class CourseRemote {
    async fetchTocs(courseId) {
        return [
            {
                id: 1,
                title: 'Redis',
                children: [
                    {
                        id: 2,
                        title: 'ping'
                    },
                    {
                        id: 3,
                        title: 'lpush'
                    }
                ]
            }
        ]
    }
}