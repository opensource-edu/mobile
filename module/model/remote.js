export default class CourseRemote {
    async fetchCourse(id) {
        return new Promise((resolve, reject) => {
            resolve({
                id: 1,
                title: 'Kubernetes Tutorial',
                author: 'Eduard.w',
                time_length: 100
            })
        })
    }

    async fetchTocs(courseId) {
        return [
            {
                id: 1,
                title: 'Kubernetes Tutorial',
                children: [
                    {
                        id: 2,
                        title: 'The Evolution of Applications Udacity',
                        time_length: 60
                    },
                    {
                        id: 3,
                        title: 'Microservices',
                        time_length: 60
                    }
                ]
            },
            {
                id: 4,
                title: 'Kubernetes Tutorial',
                children: [
                    {
                        id: 5,
                        title: 'The Evolution of Applications Udacity',
                        time_length: 60
                    },
                    {
                        id: 6,
                        title: 'Microservices',
                        time_length: 60
                    }
                ]
            }
        ]
    }
}