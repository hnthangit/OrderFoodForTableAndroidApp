import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Button, Block, Input, theme, Card} from 'galio-framework';
// import {Image} from 'react-native-elements';
import styles from './screenstyle/IndexScreen.style';

class IndexScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#f1f8e9'}}>
          <View style={styles.card}>
            <View style={styles.view_card}>
              <View style={{marginRight: 5}}>
                <Image
                  style={styles.image}
                  source={require('../assets/images/comtrang.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Cơm trắng</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/bunbo.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Bún bò Huế</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/cachep.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Cá chép chiên giòn</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/canhca.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Canh cá</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/galuoc.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Gà luộc</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/raumuongluoc.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Rau muống luộc</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/thitkhotrung.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Thịt kho trứng</Text>
              </View>
            </View>
            <View style={styles.view_card}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/images/tom.jpg')}
                />
              </View>
              <View>
                <Text style={styles.text}>Tôm chiên xù</Text>
              </View>
            </View>
            {/* <Text>abc</Text> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default IndexScreen;
