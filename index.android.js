/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import RoundedButton from './RoundedButton'
import Video from 'react-native-video'





const FirstRoute = () => <ScrollView style={[ styles.container, { backgroundColor: '#f9f9f9'} ]}>
                                <Image source={require('./img/face1.jpg')} style={styles.reviewImage}/>
                                <Text style={styles.reviewBy}>Dmitry Fadeyev</Text>
                                <Text style={styles.reviewText}>Very Helpful. Easy to Spot store of your needs in your nearby areas.</Text>
                                <Image source={require('./img/face2.jpg')} style={styles.reviewImage}/>
                                <Text style={styles.reviewBy}>David Carson</Text>
                                <Text style={styles.reviewText}>It's handy when you are new to the area.</Text>
                                <Image source={require('./img/face3.jpg')} style={styles.reviewImage}/>
                                <Text style={styles.reviewBy}>Frank Chimero</Text>
                                <Text style={styles.reviewText}>Works in almost any part of any town of any country.</Text>
                                <Image source={require('./img/face4.jpg')} style={styles.reviewImage}/>
                                <Text style={styles.reviewBy}>Joel Fisher</Text>
                                <Text style={styles.reviewText}>Glad to have found this cool app. Never have to remember what to buy and from where to buy.</Text>
                                <Image source={require('./img/face5.jpg')} style={styles.reviewImage}/>
                                <Text style={styles.reviewBy}>E.H. Gombrich</Text>
                                <Text style={styles.reviewTextLast}>As the tag says, it is an easy spotter and helps to find information about anything you need.</Text>
                         </ScrollView>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#f9f9f9',display:'flex',flexDirection:'column' } ]}>
                                <View style={{flex:2,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <Image source={require('./img/iNFO-INDER.png')} style={{flex:1,resizeMode:'center'}}/>
                                    <Image source={require('./img/sjic.png')} style={{flex:1,resizeMode:'contain'}}/>
                                </View>
                                <View style={{flex:4}}>
                                    <Text style={{fontSize:15,margin:10,padding:10}}>iNFO-INDER is an interactive app which reminds you of the things you need to buy along with the best nearby available locations once you set the remainder.{"\n\n"}This app is made by Dashmeet Kaur under the guidance of Mr. Nikit Phakde and Swati Jain Incubation Center, Indore. {"\n"}&copy; DKC Inc. 2017 </Text>
                                </View>
                          </View>;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#f9f9f9',display:'flex',flexDirection:'column',alignItems:'center' } ]}>
                            <View style={{padding:10}}>
                                 <Image source={require('./img/iNFO-INDER.png')} style={{width:240,height:270,resizeMode:'center'}}/>
                            </View>
                            <View>
                                <Text style={{fontSize:20,padding:10}}>
                                    <Text style={{fontWeight:'bold',color:'#000000'}}>Developer's Contact Details: </Text> {"\n"}
                                    Phone: +91 8827843111  {"\n"}
                                    Email Id: dashmeetkaur11@gmail.com {"\n"}
                                    {"\t"}{"\t"}          : incubator2017mar@gmail.com
                                </Text>
                            </View>
                            </View>;


export default class tabtest extends PureComponent {
    state = {
        intromode: false,
        index: 0,
        routes: [
            {key: '1', title: 'Review'},
            {key: '2', title: 'About Us'},
            {key: '3', title: 'Contact Us'},

        ],
        videoPause: true,
    };

    _handleChangeTab = index => this.setState({index});

    _renderHeader = props => <TabBar {...props} />;
    vidRef: Video;

    _playVideo() {
        this.refs.vidRef.paused = this.state.videoPause ? false : true,
            this.refs.vidRef.rate = this.state.videoPause ? 1 : 0
        Alert.alert(this.refs.vidRef.state.paused.toString(),this.refs.vidRef.state.rate.toString())

    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} dotStyle={{marginBottom: 80, backgroundColor: '#7AA78E'}}
                                  selectedDotStyle={{marginBottom: 80, backgroundColor: '#14683D'}}/>;
    }

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
        '3': ThirdRoute
    });


    render() {
        if (!this.state.intromode) {
            return (

                <View style={{flex: 1}}>
                    <IndicatorViewPager
                        style={{flex: 1}}
                        indicator={this._renderDotIndicator()}
                    >
                        <View style={{backgroundColor: '#f9f9f9', justifyContent: 'center', alignItems: 'center'}}>
                            {/*<Text style={{}}>page one</Text>*/}
                            <Image source={require('./img/iNFO-INDER.png')} style={{
                                width: 300,
                                height: 250,
                                marginLeft: 0,
                                marginRight: 0,
                                resizeMode: 'center'
                            }}/>
                            <Text style={{color: '#14683D', fontSize: 20}}>Easy Spotter</Text>
                            <Text style={{color: '#14683D', fontSize: 15, top: 90, marginBottom: 0}}>Find anything you
                                need</Text>
                        </View>

                        <View style={{backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column'}}>
                            <Text style={{
                                flex: 1,
                                color: '#14683D',
                                fontSize: 40,
                                top: 10,
                                textAlign: 'center',
                                alignSelf: 'center'
                            }}>How it works?</Text>
                            <TouchableOpacity style={{flex: 3}} onPress={() => {
                                this.setState({videoPause: !this.state.videoPause}),this._playVideo.bind(this),Alert.alert(this.state.videoPause.toString())}}>
                                <Video ref="vidRef" source={require('./info_inder.mp4')}
                                       resizeMode={"contain"}
                                       playInBackground={false}
                                       muted={false}
                                       volume={1.0}
                                       /*paused={false}
                                       rate={1.0}*/
                                       style={{height: 400, width: 400}}/>
                            </TouchableOpacity>
                            <View style={{flex: 2}}/>
                        </View>

                        <View style={{
                            backgroundColor: '#f9f9f9',
                            display: 'flex',
                            alignItems: 'stretch',
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}>
                            <Text style={{flex: 1, color: '#14683D', textAlign: 'center', fontSize: 40, top: 10}}>Features</Text>

                            <View style={{flex: 1.5, flexDirection: 'row', padding: 4}}>
                                <View style={{flex: 1, top: 0, marginTop: 0}}>
                                    <Image source={require('./img/interactive.png')} style={{resizeMode: 'center'}}/>
                                </View>
                                <View style={{flex: 2, padding: 8, marginTop: 20}}>
                                    <Text style={{color: '#EEC128', fontSize: 20, fontWeight: 'bold'}}>User
                                        Friendly</Text>
                                    <Text style={{color: '#000000'}}>Setting up a remainder is easy</Text>
                                </View>
                            </View>

                            <View style={{flex: 1.5, flexDirection: 'row', padding: 4}}>
                                <View style={{flex: 2, padding: 8, marginTop: 10}}>
                                    <Text style={{color: '#EEC128', fontSize: 20, fontWeight: 'bold'}}>Precise
                                        Location</Text>
                                    <Text style={{color: '#000000'}}>Exact locations of the store are given with the
                                        help of major landmarks which assist you in finding the store</Text>
                                </View>
                                <View style={{flex: 1, top: 0, marginTop: 0}}>
                                    <Image source={require('./img/map.png')} style={{resizeMode: 'center'}}/>
                                </View>
                            </View>

                            <View style={{flex: 1.5, flexDirection: 'row', padding: 4}}>
                                <View style={{flex: 1, top: 0, marginTop: 0}}>
                                    <Image source={require('./img/verified.png')} style={{resizeMode: 'center'}}/>
                                </View>
                                <View style={{flex: 2, padding: 8, marginTop: 20}}>
                                    <Text style={{color: '#EEC128', fontSize: 20, fontWeight: 'bold'}}>Verified
                                        Stores</Text>
                                    <Text style={{color: '#000000'}}>Stores shown to you are already verified and have
                                        satisfied the iNFO-INDER's standards.</Text>
                                </View>
                            </View>

                            <View style={{flex: 1, padding: 4, marginTop: 30, bottom: 0}}>
                                <RoundedButton onPress={() => this.setState({intromode: true})}>
                                    Click to start
                                </RoundedButton>
                            </View>
                        </View>

                    </IndicatorViewPager>
                </View>)
        }
        else {
            return (
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider: {
        marginBottom: 30,
        height:300
    },
    sliderContainer: {
    },
    backgroundVideo: {
        top: 40,
        height: 400,
        width: Dimensions.get('window').width
    },
    reviewImage:{
        marginTop:20,
        marginBottom:5,
        alignSelf:'center'
    },
    reviewBy:{
        fontSize: 20,
        textAlign:'center'
    },
    reviewText:{
        marginTop:5,
        marginBottom:20,
        padding:10,
        textAlign:'center',
        borderBottomColor:'black',
        borderBottomWidth: 1
    },
    reviewTextLast:{
        marginTop:5,
        marginBottom:20,
        padding:10,
        textAlign:'center'
    }
});

AppRegistry.registerComponent('tabtest', () => tabtest);
