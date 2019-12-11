import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import Bill from '../components/bill/Bill';
import styles from './screenstyle/BillHistoryScreen.style';
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
      <View style={styles.container}>
        <ScrollView>
          {this.renderBillItem()}
          <Text style={styles.text_end}>Bạn đã xem hết các hóa đơn</Text>
        </ScrollView>
      </View>
    );
  }
}

export default BillHistoryScreen;
