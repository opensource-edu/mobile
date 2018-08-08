import React, { Component } from 'react'
import HomePageRemote from './remote'
import {Platform, StyleSheet, Text, Image, View, FlatList, TouchableOpacity} from 'react-native'

export default class HomePage extends Component {
    static navigationOptions = {
        title: 'Home',
        // header: null
    }

    constructor(props) {
        super(props)
        this.remote = new HomePageRemote()

        this.state = {
            courses: []
        }
    }

    async componentDidMount() {
        const courses = await this.remote.fetchCourses()
        this.setState({
            courses: courses
        })
    }

    onPressCourse(course) {
        this.props.navigation.navigate('Detail')
    }

    render() {

        return <View style={{flex: 1}}>
            <FlatList 
                style={{flex: 1}}
                data={this.state.courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={(item) => this.onPressCourse(item)} style={styles.lesson}>   
                        <View style={styles.courseContainer}>
                            <Image style={styles.courseCover} resizeMode="cover" source={{uri: item.cover}} />
                            <View style={{flex: 1, padding: 20}}>
                                <Text style={styles.lessonTitle}>{item.title}</Text>
                                <Text style={styles.lessonDescription}>{item.description}</Text>
                            </View>
                        </View>     
                        
                    </TouchableOpacity>
                }
            />
        </View>
    }
}

const styles = StyleSheet.create({
    courseContainer: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flex: 1,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 2}
    },

    courseCover: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flex: 1,
        width: null,
        height: 250,
        overflow: 'hidden'
    },

    lesson: {
        margin: 20,
        flex: 1
    },

    lessonTitle: {
        fontSize: 18,
        lineHeight: 24,
        color: '#000'
    },

    lessonDescription: {
        fontSize: 12,
        lineHeight: 20
    },
})