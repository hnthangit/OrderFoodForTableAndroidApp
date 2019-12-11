import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';
import {StackActions, NavigationActions} from 'react-navigation';
import Food from '../components/food/Food';
import styles from '../screens/screenstyle/OrderFoodScreen.style';
import axios from 'axios';
import CardView from 'react-native-cardview';
import {Button} from 'react-native-elements';
class OrderFoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedFood: [],
      searchQuery: '',
      modalVisible: false,
      orderFood: [],
      userId: 0,
    };
    //this.addFood = this.addFood.bind(this);
  }
  componentDidMount() {
    let foodapiurl = 'http://restaurantappapi.azurewebsites.net/api/Foods';
    // let tablebillurl = ''
    // axios.all([
    //   axios.get(foodapiurl),
    //   axios.get('https://api.github.com/users/phantomjs')
    // ])
    let orderapiurl =
      'http://restaurantappapi.azurewebsites.net/api/Orders/GetOrdersByTableId?tableId=' +
      this.props.navigation.getParam('tableName', 0);
    axios
      .get(foodapiurl)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            data: response.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(orderapiurl)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            orderFood: response.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.getUserId();
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  addFood = (id, name, quantity) => {
    let foodArray = this.state.selectedFood.filter(item => {
      return item.id !== id;
    });
    if (quantity !== 0) {
      this.setState(prevState => ({
        selectedFood: [...foodArray, {id: id, name: name, quantity: quantity}],
      }));
    } else {
      this.setState(prevState => ({
        selectedFood: [...foodArray],
      }));
    }
  };

  resetFood = () => {
    this.setState({
      selectedFood: [],
      modalVisible: !this.state.modalVisible,
    });
  };

  orderFoodItem = () => {
    //Fix url

    let {selectedFood, orderFood} = this.state;
    selectedFood = selectedFood.map(item => {
      delete item.name;
      return {
        foodId: item.id,
        quantity: item.quantity,
      };
    });

    if (orderFood.length !== 0) {
      for (let i = 0; i < orderFood.length; i++) {
        for (let k = 0; k < selectedFood.length; k++) {
          if (orderFood[i].foodId === selectedFood[k].foodId) {
            selectedFood[k].quantity += orderFood[i].quantity;
          }
        }
      }
      this.requestOrderFood(selectedFood);
    } else {
      //this.requestUpdateTable();
      //this.requestCreateBillAndUpdateTable();
      this.requestCreateBill(selectedFood);
    }
  };

  requestCreateBill = selectedFood => {
    let urlCreateBill = 'http://restaurantappapi.azurewebsites.net/api/Bills';
    let billData = {
      flag: 0,
      creatorId: Number(this.state.userId),
      createTime: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '-'),
      tableId: this.props.navigation.getParam('tableName', 0),
      totalPayment: 0,
    };
    axios
      .post(urlCreateBill, billData)
      .then(response => {
        if (response.status === 201) {
          return this.requestUpdateTable(selectedFood);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  requestUpdateTable = selectedFood => {
    let urlUpdateTable =
      'http://restaurantappapi.azurewebsites.net/api/Tables/' +
      this.props.navigation.getParam('tableName', 0);
    let tableData = {
      id: this.props.navigation.getParam('tableName', 0),
      flag: 1,
    };
    axios
      .put(urlUpdateTable, tableData)
      .then(response => {
        if (response.status === 204) {
          this.requestOrderFood(selectedFood);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  requestOrderFood = selectedFood => {
    let url =
      'http://restaurantappapi.azurewebsites.net/api/Tables/' +
      this.props.navigation.getParam('tableName', 0) +
      '/UpdateOrders';
    axios
      .post(url, selectedFood)
      .then(response => {
        if (response.status === 200) {
          Alert.alert(
            'Thông báo',
            'Bạn đã đặt món thành công',
            [
              {
                text: 'Đồng ý',
                onPress: () => {
                  this.props.navigation.dispatch(
                    StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({
                          routeName: 'TableScreen',
                        }),
                      ],
                    }),
                  );
                },
              },
            ],
            {cancelable: false},
          );
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getUserId = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.setState({
          userId: value,
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  renderFoodItem = foodArray => {
    if (foodArray) {
      return foodArray.map(item => {
        return (
          <Food
            key={item.id}
            item={item}
            handleFood={this.addFood}
            selectedFood={this.state.selectedFood}
          />
        );
      });
    }
  };
  render() {
    // let foodArray;
    // this.state.search === ''
    //   ? (foodArray = this.state.data)
    //   : (foodArray = this.handleChange);
    const {data, searchQuery} = this.state;
    const searchQueryLowerCased = searchQuery.toLowerCase();
    const foodArray = data.filter(item => {
      return item.name.toLowerCase().includes(searchQueryLowerCased);
    });
    return (
      <View>
        <Modal
          onBackButtonPress={this.setModalVisible}
          isVisible={this.state.modalVisible}
          transparent={true}>
          <View style={styles.modal}>
            <Text style={styles.modal_text}>Các món đã gọi</Text>
            <ScrollView>
              {this.state.selectedFood.map(item => {
                return (
                  <CardView
                    style={styles.modal_food}
                    cardElevation={15}
                    cardMaxElevation={5}
                    cornerRadius={5}>
                    <Text
                      style={{paddingTop: 5, paddingLeft: 10}}
                      key={item.id}>
                      {item.name}: {item.quantity}
                    </Text>
                  </CardView>
                );
              })}
            </ScrollView>
            <View style={styles.touch_btn}>
              <TouchableOpacity style={styles.touch_btn_select_all}>
                <Button
                  buttonStyle={styles.btn_btn_style}
                  titleStyle={styles.btn_title_style}
                  onPress={this.resetFood}
                  title="Chọn lại hết"
                  type="clear"
                />
              </TouchableOpacity>
              <View style={styles.touch_btn_close_order}>
                <Button
                  buttonStyle={styles.btn_btn_style}
                  titleStyle={styles.btn_title_style}
                  onPress={this.setModalVisible}
                  type="outline"
                  title="Đóng"
                />
                <Button
                  buttonStyle={styles.btn_btn_style}
                  titleStyle={styles.btn_title_style}
                  onPress={this.orderFoodItem}
                  title="Gọi món"
                  type="clear"
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.search}>
          <TextInput
            style={styles.search_input}
            value={this.state.search}
            onChangeText={searchQuery => {
              this.setState({searchQuery});
              //this.handleChange(search);
            }}
          />
          <TouchableOpacity
            style={styles.search_btn}
            underlayColor="gray"
            onPress={this.setModalVisible}>
            <Text style={styles.search_text}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
        <View style={{overflow: 'visible', marginBottom: 100}}>
          <ScrollView>{this.renderFoodItem(foodArray)}</ScrollView>
        </View>
      </View>
    );
  }
}

export default OrderFoodScreen;
