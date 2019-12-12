import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Button, Block, Input, theme, Card} from 'galio-framework';
// import {Image} from 'react-native-elements';
import styles from './screenstyle/IndexScreen.style';

class IndexScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Text>Đây là trang chủ</Text> */}
          <View>
            <Card
              // flex
              borderless
              style={styles.card}
              title="Restaurant App"
              // caption="139 minutes ago"
              location="123 Nguyễn Huệ, Huế City"
              avatar="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/45046244_1161256877359163_3375469404140601344_n.jpg?_nc_cat=103&_nc_ohc=aHb1WDRNoR8AQnRfcHo_tOws2uFMAhdfmxKm4ewmj4S_aAKaco7c2ksWQ&_nc_ht=scontent.fhan2-4.fna&oh=4cf4a41675e98854fbb8c2186507ee27&oe=5E71EDF7"
              imageStyle={styles.cardImageRadius}
              imageBlockStyle={{padding: theme.SIZES.BASE / 2}}
              image="https://img.freepik.com/free-vector/hnad-drawn-fast-food-background_52683-16127.jpg?size=626&ext=jpg"
            />
          </View>
          
          <View style={{width: 600, height: 200}}>
            <View>
              <Image
                style={{width: 600, height: 200}}
                source={require('../assets/images/foodnew.jpg')}
              />
              <Text
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  fontSize: 30,
                  color: 'rgba(255,234,0 ,1)',
                  backgroundColor: 'rgba(219, 212, 191,0.5)',
                  fontWeight: 'bold',
                }}>
                Thức ăn ngon
              </Text>
            </View>
          </View>
          <View style={{width: 600, height: 200}}>
            <View>
              <Image
                style={{width: 600, height: 200}}
                source={require('../assets/images/rauqua.jpg')}
              />
              <Text
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  fontSize: 30,
                  color: 'rgba(255,234,0 ,1)',
                  backgroundColor: 'rgba(219, 212, 191,0.5)',
                  fontWeight: 'bold',
                }}>
                Thức ăn ngon
              </Text>
            </View>
          </View>
          <View style={{width: 600, height: 200}}>
            <View>
              <Image
                style={{width: 600, height: 200}}
                source={require('../assets/images/cakebt.png')}
              />
              <Text
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  fontSize: 30,
                  color: 'rgba(255,234,0 ,1)',
                  backgroundColor: 'rgba(219, 212, 191,0.5)',
                  fontWeight: 'bold',
                }}>
                Thức ăn ngon
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default IndexScreen;
