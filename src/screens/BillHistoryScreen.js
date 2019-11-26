import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

class BillHistoryScreen extends Component {
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
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Bill History Screen</Text>
        <ScrollView>
          <Text>List bill</Text>
        </ScrollView>
      </View>
    );
  }
}

export default BillHistoryScreen;
