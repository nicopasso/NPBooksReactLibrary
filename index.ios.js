/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Featured = require('./Components/Featured');
var Search = require('./Components/Search');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class NPBookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab == 'featured'}
          icon={{uri:'featured'}}
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab == 'search'}
          icon={{uri:'search'}}
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('NPBookSearch', () => NPBookSearch);
