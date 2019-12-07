import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './Food.style';
import {Icon} from 'react-native-elements';
class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    //Dùng arrow function thay cho bind
    //this.icreaseNumber = this.icreaseNumber.bind(this);
  }

  icreaseNumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  decreaseNumber = () => {
    this.setState({
      number: this.state.number === 0 ? 0 : this.state.number - 1,
    });
  };
  componentDidMount() {
    const foodArray = this.props.selectedFood;
    foodArray.map(item => {
      if (this.props.item.id === item.id) {
        this.setState({
          number: item.quantity,
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedFood.length === 0) {
      this.setState({
        number: 0,
      });
    }
  }

  render() {
    let imageUri = {
      1: require('../../assets/image/canhca.jpg'),
      2: require('../../assets/image/comtrang.jpg'),
      3: require('../../assets/image/comchien.jpg'),
      4: require('../../assets/image/canhthitbo.jpg'),
      5: require('../../assets/image/bunbo.jpg'),
      6: require('../../assets/image/pho.jpg'),
    };
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={imageUri[this.props.item.id]} />
        <Text>{this.props.item.name} </Text>
        <Text>{this.props.item.price}</Text>
        <TouchableOpacity
          onPress={() => {
            let number = this.state.number === 0 ? 0 : this.state.number - 1;
            this.decreaseNumber();
            this.props.handleFood(
              this.props.item.id,
              this.props.item.name,
              number,
            );
          }}>
          <Icon size={33} name="minus" type="material-community" />
        </TouchableOpacity>
        <Text>Số lượng: {this.state.number}</Text>
        <TouchableOpacity
          onPress={() => {
            let number = this.state.number + 1;
            this.icreaseNumber();
            this.props.handleFood(
              this.props.item.id,
              this.props.item.name,
              number,
            );
          }}>
          <Icon size={33} name="plus" type="material-community" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Food;
