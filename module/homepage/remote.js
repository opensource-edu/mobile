export default class HomePageRemote {
    /**
     * @return Promise<Object>
     */
    async fetchCourses() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id: 1,
                    title: "React Native Training",
                    description: "I use this book to train my team, help them to know how to build React-native app in the right way. ",
                    cover: "https://via.placeholder.com/350x350"
                }
            ])
        })
    }
}