import React, { Component } from 'react'
import {Platform, StyleSheet, Text, Image, View, FlatList, TouchableOpacity, WebView} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import CourseService from '../service/course'

export default class DetailPage extends Component {
    static navigationOptions = {
        title: 'Welcome',
    }

    constructor(props) {
        super(props)

        this.courseService = new CourseService()
        this.state = {
            indexSelected: 0,
            tocs: []
        }
    }

    async componentDidMount() {
        console.debug('componentDidMount did call')
        const tocs = await this.courseService.fetchTocDTOList(1)
        this.setState({
            ...this.state,
            tocs: tocs
        })
        
    }

    /**
     * @param {int} index
     */
    onIndexChnaged = (index) => {
        this.setState({
            ...this.state,
            indexSelected: index
        })
    }

    onTocClick = (toc) => {
        console.debug(toc)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View></View>
                <View style={{flex: 1}}>
                    <SegmentedControlTab
                        values={['介绍', '目录']}
                        selectedIndex={this.state.indexSelected}
                        onTabPress={this.onIndexChnaged}
                    />
                    {0 == this.state.indexSelected && <View style={{flex: 1}}>
                        <View style={styles.information}>
                            <Text style={styles.courseName}>Redis introduction</Text>
                        </View>
                        <WebView style={{flex: 1}} scalesPageToFit source={{html: "<h1>hello world</h1>"}}></WebView>
                    </View>
                    }
                    {1 == this.state.indexSelected && <View style={{flex: 1}}>
                        <FlatList 
                            style={{flex: 1}}
                            data={this.state.tocs}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) =>
                                <TouchableOpacity onPress={(item) => this.onTocClick(item)} style={styles.lesson}>   
                                    {0 == item.depth && <View>

                                        <Text style={{fontSize: 18}}>{item.title}</Text>
                                    </View>
                                    }
                                    {1 == item.depth && <View>
                                        <Text style={{fontSize: 12}}>{item.title}</Text>
                                    </View>
                                    }
                                </TouchableOpacity>
                            }
                        />
                    </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    information: {
        backgroundColor: '#FFF',
        padding: 20
    },

    courseName: {
        fontSize: 22,
        fontWeight: 'bold'
    },

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