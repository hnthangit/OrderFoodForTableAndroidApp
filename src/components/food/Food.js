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
import Star from 'react-native-star-view';
import CardView from 'react-native-cardview';
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
      1: require('../../assets/images/canhca.jpg'),
      2: require('../../assets/images/comtrang.jpg'),
      3: require('../../assets/images/comchien.jpg'),
      4: require('../../assets/images/canhthitbo.jpg'),
      5: require('../../assets/images/bunbo.jpg'),
      6: require('../../assets/images/pho.jpg'),
    };
    return (
      <View style={styles.container}>
        <View style={styles.detail}>
          <View style={styles.detailInfo}>
            <Text style={styles.detailText}>{this.props.item.name} </Text>
            <Text style={styles.detailText}>{this.props.item.price} VNĐ</Text>
            <Star score={5} style={styles.starStyle} />
          </View>
          <View style={styles.detailImg}>
            <Image
              style={styles.detailImage}
              source={imageUri[this.props.item.id]}
            />
          </View>
          <CardView
            style={styles.detailQua}
            cardElevation={5}
            cardMaxElevation={2}
            cornerRadius={5}>
            <View>
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
              <Text style={{textAlign: 'center'}}>{this.state.number}</Text>
              <TouchableOpacity
                onPress={() => {
                  let number =
                    this.state.number === 0 ? 0 : this.state.number - 1;
                  this.decreaseNumber();
                  this.props.handleFood(
                    this.props.item.id,
                    this.props.item.name,
                    number,
                  );
                }}>
                <Icon size={33} name="minus" type="material-community" />
              </TouchableOpacity>
            </View>
          </CardView>
        </View>
      </View>
    );
  }
}

export default Food;
