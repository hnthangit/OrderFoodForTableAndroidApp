import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Table from '../components/table/Table';
import axios from 'axios';

class TableScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }
  //pass them navigation cho child comp
  //generate dynamically stack nav
  componentDidMount() {
    let url = 'http://restaurantappapi.azurewebsites.net/api/Tables';
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          //console.log(response.data.success);
          this.setState({
            tableData: response.data,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    //Xu li data sau khi xu li su kien o day
  }

  handletouch() {
    //Viet ham xu li su kiem cham vao View o day
  }

  renderTableItem = () => {
    if (this.state.tableData) {
      return this.state.tableData.map(item => {
        return (
          <Table
            navigation={this.props.navigation}
            key={item.id}
            item={item}
            tableName={item.id}
          />
        );
      });
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TableScreen</Text>
        <ScrollView>{this.renderTableItem()}</ScrollView>
      </View>
    );
  }
}

export default TableScreen;
