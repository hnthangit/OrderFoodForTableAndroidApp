import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import Table from '../components/table/Table';
import TouchMenuIcon from '../components/touchmenuicon/TouchMenuIcon';
import axios from 'axios';

class TableScreen extends Component {
  componentDidMount() {
    //Call api o day
    // let url = 'https://hrms.softworldvietnam.com/api/v1/Auth/Login';
    // axios
    //   .post(url, {
    //     username: this.state.username,
    //     password: this.state.password,
    //   })
    //   .then(response => {
    //     if (response.status === 200) {
    //       //console.log(response.data.success);
    //       this.saveUser(JSON.stringify(response.data.success));
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  componentDidUpdate() {
    //Xu li data sau khi xu li su kien o day
  }

  handletouch() {
    //Viet ham xu li su kiem cham vao View o day
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TableScreen</Text>
        <ScrollView>
          <Table navigation={this.props.navigation} tableName="1" />
        </ScrollView>
      </View>
    );
  }
}

export default TableScreen;
