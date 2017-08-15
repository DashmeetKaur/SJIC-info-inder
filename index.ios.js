/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import RoundedButton from './RoundedButton'




const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#678ab7' } ]} />;


export default class tabtest extends PureComponent {
  state = {
    intromode: false,
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Thi' },

    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} dotStyle={{marginBottom: 100}} selectedDotStyle={{marginBottom:100}} />;
  }

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3' : ThirdRoute
  });

  render() {
    if(!this.state.intromode)
    {return (

      <View style={{flex:1}}>
        <IndicatorViewPager
          style={{flex:1}}
          indicator={this._renderDotIndicator()}
        >
          <View style={{backgroundColor:'cadetblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{}}>page one</Text>
          </View>
          <View style={{backgroundColor:'cornflowerblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>page two</Text>
          </View>
          <View style={{backgroundColor: '#F7EDD3', justifyContent: 'center', alignItems: 'center'}}>
            <Text>page three</Text>
            <View style={{marginTop: 25}}>
              <RoundedButton onPress={()=>this.setState({intromode:true})}>
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
  }
});

AppRegistry.registerComponent('tabtest', () => tabtest);
