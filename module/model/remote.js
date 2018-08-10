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
                        time_length: 60,
                        video: "https://ikeepon.oss-cn-hangzhou.aliyuncs.com/video/The%20Evolution%20of%20Applications.mp4"
                    },
                    {
                        id: 3,
                        title: 'Microservices',
                        time_length: 60,
                        video: "https://ikeepon.oss-cn-hangzhou.aliyuncs.com/video/Microservices.mp4"
                    }
                ]
            }
        ]
    }
}