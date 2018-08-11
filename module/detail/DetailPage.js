import React, { Component } from 'react'
import {Platform, StyleSheet, Text, Image, View, FlatList, TouchableOpacity, WebView, Dimensions, ScrollView} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import CourseService from '../service/course'
import Video from 'react-native-video'
// import {BoxShadow} from 'react-native-shadow'

export default class DetailPage extends Component {
    static navigationOptions = {
        title: '课程',
    }

    constructor(props) {
        super(props)

        console.debug("DetailPage.constructor")

        this.courseService = new CourseService()
        this.state = {
            indexSelected: 1,
            videoURL: "https://ikeepon.oss-cn-hangzhou.aliyuncs.com/video/Microservices.mp4",
            course: {
                title: "",
                author: "",
                tocs: [],
                defaultVideo() {
                    return ""
                }
            }
        }
    }

    async componentDidMount() {
        console.debug('componentDidMount did call')
        const course = await this.courseService.fetchCourse(1)
        this.setState({
            ...this.state,
            course: course
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

    onTocClick(toc) {
        this.setState({
            videoURL: toc.videoURL
        })
    }

    render() {
        {/* TODO: 安卓的阴影效果
        const shadowOpt = {
            color:"#000",
            border:2,
            radius:3,
            opacity:0.2,
            x:0,
            y:3,
            style:{marginVertical:5, flex: 1}
        */}

        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View>
                    
                        <Video
                            source={{uri: this.state.videoURL}}
                            ref={(ref) => {
                                this.player = ref
                            }}
                            // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                            // onEnd={this.onEnd}                      // Callback when playback finishes
                            // onError={this.videoError}               // Callback when video cannot be loaded
                            style={styles.video}
                        />
            
                    </View>
                    
                    <View style={{flex: 1, backgroundColor: '#FFF'}}>
                        <View style={{height: 30, marginLeft: 20, marginRight: 20, marginTop: 50, marginBottom: 50}}>
                            <Text style={{fontSize: 20, fontWeight: "bold", lineHeight: 30}}>{this.state.course.title}</Text>
                            <Text style={{fontSize: 12, color: "#999"}}>{this.state.course.author}</Text>
                        </View>
                        <View style={{marginLeft: 60, marginRight: 60}}>
                            <SegmentedControlTab
                                values={['介绍', '目录', '评论']}
                                selectedIndex={this.state.indexSelected}
                                onTabPress={this.onIndexChnaged}
                                style={styles.segmentedControlTab}
                            />
                        </View>
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
                                data={this.state.course.tocs}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({item}) =>
                                    <View style={styles.chapterListItem}>
                                        <View style={styles.chapterContainer}>
                                        {/*<BoxShadow setting={shadowOpt}>*/}
                                            <Text style={styles.chapterTitle}>{item.title}</Text>
                                            
                                            <FlatList 
                                                style={{flex: 1}}
                                                data={item.children}
                                                keyExtractor={(item) => item.id.toString()}
                                                renderItem={({item}) =>

                                                
                                                <TouchableOpacity onPress={() => this.onTocClick(item)} style={styles.sectionListItem}>
                                                    <Text style={styles.sectionIndex}>{item.index}</Text>
                                                    <View style={{paddingBottom: 10}}>
                                                        <Text style={styles.sectionTitle}>{item.title}</Text>
                                                        <Text style={styles.sectionTimeLength}>{item.timeLength} minutes</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                }
                                            />
                                        {/*</BoxShadow>*/}
                                        </View>

                                        {/*1 == item.depth && <View>
                                            <Text style={{fontSize: 12}}>{item.title}</Text>
                                        </View>
                                        */}
                                    </View>
                                }
                            />
                        </View>
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    segmentedControlTab: {
        marginTop: 10,
        marginBottom: 20,
        // flex: 0.8,
        width: 100
    },

    information: {
        backgroundColor: '#FFF',
        padding: 20
    },

    courseName: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    chapterListItem: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        flexDirection: 'row'
    },

    chapterContainer: {
        padding: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flex: 1,
        backgroundColor: '#FFF',
        shadowOpacity: 0.05,
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 2,
        shadowOffset: { width: 2, height: 2}
    },

    chapterTitle: {
        flex: 1, 
        justifyContent: "center", 
        textAlign: "center", 
        fontSize: 15, 
        fontWeight: "bold"
    },

    sectionListItem: {
        height: 61, 
        flex: 1, 
        flexDirection: "row",
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1
    },

    sectionIndex: {
        color: '#007AFF', 
        fontSize: 13, 
        width: 20, 
        lineHeight: 61, 
        fontWeight: "bold"
    },

    sectionTitle: {
        flex: 1, 
        fontSize: 15, 
        lineHeight: 40, 
        fontWeight: "bold"
    },

    timeLength: {
        fontSize: 13,
        lineHeight: 13,
        color: "#828282",
        fontWeight: "bold"
    },

    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5265
    }
})