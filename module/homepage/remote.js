export default class HomePageRemote {
    /**
     * @return Promise<Object>
     */
    async fetchCourses() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id: 1,
                    title: "Kubernetes Tutorial | Kubernetes | Kubernetes tutorial for beginners",
                    description: "This video is part of the Udacity course \"Scalable Microservices with Kubernetes\". Watch the full course at https://www.udacity.com/course/ud615",
                    cover: "https://ikeepon.oss-cn-hangzhou.aliyuncs.com/video/01.png"
                },
                {
                    id: 2,
                    title: "Event-Driven Architecture for Microservices",
                    description: "These days building applications using microservice approach has become a defacto standard in many cases. Microservices are all about splitting large applications into smaller ones, which means that there must be some sort of communication between them. During this session Martins will go over how event-driven architecture can be applied for communication between various services, describe the pros and cons, and gives real world examples of how it can be used with PHP and other programming languages.",
                    cover: "https://ikeepon.oss-cn-hangzhou.aliyuncs.com/video/02.png"
                }
            ])
        })
    }
}