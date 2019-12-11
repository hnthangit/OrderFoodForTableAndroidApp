import React, {Component} from 'react';
import {Text, Image, View, ScrollView, Linking} from 'react-native';
import styles from './screenstyle/AuthorInfoScreen.style';
import {Icon} from 'react-native-elements';

class TableInfoScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.author}>
            <View style={styles.left}>
              <Image
                style={styles.left_img}
                source={require('../assets/images/avtthang.jpg')}
              />
            </View>
            <View style={styles.info}>
              <View style={styles.info_text}>
                <Text style={styles.info_text_name}>Hoàng Ngọc Thắng</Text>
                <Text>Sở thích: yêu màu tím, thích màu hồng</Text>
                <Text>Sống nội tâm nhưng là người hòa đồng</Text>
                <Text>Yêu hòa bình nhưng thích cà khịa</Text>
                <Text>Thích gái nhưng ko thích trai</Text>
              </View>
            </View>
            <View style={styles.button_more}>
              <Icon size={33} name="dots-vertical" type="material-community" />
            </View>
          </View>
          <View style={styles.author}>
            <View style={styles.left}>
              <Image
                style={styles.left_img}
                source={require('../assets/images/avthung.jpg')}
              />
            </View>
            <View style={styles.info}>
              <View style={styles.info_text}>
                <Text style={styles.info_text_name}>Đỗ Doãn Phước Hưng</Text>
                <Text>Skype: phuochung008</Text>
                {/* <Text>Sống nội tâm nhưng là người hòa đồng</Text>
              <Text>Yêu hòa bình nhưng thích cà khịa</Text>
              <Text>Thích gái nhưng ko thích trai</Text> */}
              </View>
            </View>
            <View style={styles.button_more}>
              <Icon size={33} name="dots-vertical" type="material-community" />
            </View>
          </View>
          <View style={styles.author}>
            <View style={styles.left}>
              <Image
                style={styles.left_img}
                source={require('../assets/images/avtminh.jpg')}
              />
            </View>
            <View style={styles.info}>
              <View style={styles.info_text}>
                <Text style={styles.info_text_name}>Võ Ngọc Quang Minh</Text>
                <Text>Skype: minhvo050298_1</Text>
                <Text>Email: vnqminh0502@gmail.com</Text>
                <Text>https://github.com/MinhOmega</Text>
                {/* <Linking>https://github.com/MinhOmega</Linking> */}
              </View>
            </View>
            <View style={styles.button_more}>
              <Icon size={33} name="dots-vertical" type="material-community" />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default TableInfoScreen;
