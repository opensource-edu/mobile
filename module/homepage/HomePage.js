import React, { Component } from 'react'
import HomePageRemote from './remote'
import {Platform, StyleSheet, Text, Image, View, FlatList, TouchableOpacity} from 'react-native'

export default class HomePage extends Component {
    static navigationOptions = {
        title: 'Welcome',
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
                        <View style={{flex: 0.3}}>
                            <Image style={{flex: 1}} source={{uri: item.cover}} />
                        </View>     
                        <View style={{flex: 0.7}}>
                            <Text style={styles.lessonTitle}>{item.title}</Text>
                            <Text style={styles.lessonDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    }
}

const styles = StyleSheet.create({
    lesson: {
        margin: 20,
        flex: 1,
        flexDirection: 'row'
    },

    lessonTitle: {
        fontSize: 32,
        color: '#000'
    },

    lessonDescription: {
        fontSize: 18,
        lineHeight: 30
    },
})