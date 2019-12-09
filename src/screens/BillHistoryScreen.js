import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import Bill from '../components/bill/Bill';

class BillHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billData: [],
    };
  }
  //phai pass them navigation cho component
  //generate dynamically stack nav
  componentDidMount() {
    //Call api o day
    let url = 'http://restaurantappapi.azurewebsites.net/api/Bills';
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            billData: response.data,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  renderBillItem = () => {
    if (this.state.billData) {
      return this.state.billData.map(item => {
        if (item.flag === 1) {
          return (
            <Bill
              navigation={this.props.navigation}
              key={item.id}
              item={item}
            />
          );
        }
      });
    }
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Bill History Screen</Text>
        <ScrollView>
          <Text>List bill</Text>
          {this.renderBillItem()}
        </ScrollView>
      </View>
    );
  }
}

export default BillHistoryScreen;
