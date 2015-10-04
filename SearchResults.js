'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

class SearchResults extends Component {
  constructor(props) {
    super(props);

    //a listview only needs one argument (to be a dataSource): a function to distinguish elements
    //after which data from props is copied over into it
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView

        //this is pretty zen
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

module.exports = SearchResults;
