import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Button} from 'react-native';
import styles from './Food.style';
import {Icon} from 'react-native-elements';
class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.icreaseNumber = this.icreaseNumber.bind(this);
  }

  icreaseNumber() {
    this.setState = {
      number: this.state.number + 1,
    };
  }

  render() {
    return (
      <View on style={styles.container}>
        <TouchableHighlight>
          <Text>Bàn số {this.props.tableName}</Text>
          <Icon
            size={33}
            name="plus"
            type="meterial"
            onPress={this.icreaseNumber()}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default Food;
