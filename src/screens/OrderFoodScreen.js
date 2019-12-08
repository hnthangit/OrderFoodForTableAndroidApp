import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from 'react-native';
import Food from '../components/food/Food';
import {SearchBar, colors} from 'react-native-elements';
import styles from '../components/OrderFood/OrderFood.style';
import {Button, TextInput} from 'react-native-paper';
import {BoxShadow} from 'react-native-shadow';
import CardView from 'react-native-cardview';
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
    const {search} = this.state;
    const shadowOpt = {
      width: 160,
      height: 170,
      color: '#000',
      border: 2,
      radius: 3,
      opacity: 0.2,
      x: 0,
      y: 3,
      style: {marginVertical: 5},
    };
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            // style={styles.searchBarInput}
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
            round
            showLoading
            placeholder="Tên món ăn"
            icon={{type: 'font-awesome', name: 'search'}}
            cancelIcon={{type: 'font-awesome', name: 'cancelIcon'}}
            leftIconContainerStyle
            inputStyle={{backgroundColor: 'white'}}
            placeholderTextColor="red"
            // platform="ios"
            // cancelButtonTitle="Cancel"
            containerStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'rgba(27,31,35,.05)',
              borderRadius: 20,
            }}
            cancelButtonProps={{
              color: 'red', //color of text: Cancel
            }}
            searchIcon={{type: 'font-awesome', name: 'search'}}
          />
        </View>
        <View style={styles.detail}>
          {/* <View
            style={styles.detailImg}
            cardElevation={5}
            cardMaxElevation={2}
            cornerRadius={5}>
          > */}
          <View
            style={styles.detailInfo}
            cardElevation={5}
            cardMaxElevation={2}
            cornerRadius={5}>
            <Text style={styles.detailText}>Cơm chiên</Text>
          </View>
          <CardView style={styles.detailImg}>
            {/* <Text>Image</Text> */}
            <Image source={require('../assets/images/splash.jpg')} />
            {/* </CardView> */}
          </CardView>
          <CardView style={styles.detailQua}>
            <Text style={styles.detailText}>+ 1 -</Text>
          </CardView>
          {/* <View>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5}>
              <Text>Elevation 0</Text>
            </CardView>
          </View> */}
        </View>
      </View>
    );
  }
}

export default OrderFoodScreen;
