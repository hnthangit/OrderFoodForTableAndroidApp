import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Food from '../components/food/Food';
class OrderFoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fooddata: [],
    };
  }
  //add axios
  // componentDidMount() {
  //   let foodapiurl = 'http://socialwithin.azurewebsites.net/api/show-post/all';

  //   fetch(foodapiurl)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(json => {
  //       this.setState({
  //         postdata: json,
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  handletouch() {
    //Viet ham xu li su kiem cham vao View o day
  }

  // renderFoodItem() {
  //   if (this.props.fooddata) {
  //     return this.props.fooddata.map(item => {
  //       return <Food key={item.foodId} item={item} />;
  //     });
  //   }
  // }
  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text>OrderFoodScreen</Text>
        {/* <Food fooddata={this.state.fooddata} /> */}
      </View>
    );
  }
}

export default OrderFoodScreen;
