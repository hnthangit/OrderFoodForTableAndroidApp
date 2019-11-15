import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Table from '../components/table/Table';
import {TextInput} from 'react-native-paper';
class TableScreen extends Component {
  componentDidMount() {
    //Call api o day
  }

  componentDidUpdate() {
    //Xu li data sau khi xu li su kien o day
  }
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          {/* <Text>List Table</Text> */}
          <Text>TableScreen</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text
              .split(' ')
              .map(word => word && '🍕')
              .join(' ')}
          </Text>
          <Table />
          <Table tableName="1" />
          <Table tableName="2" />
          <Table tableName="3" />
          <Table tableName="4" />
          <Table tableName="5" />
          <Table tableName="6" />
          <Table tableName="7" />
          <Table tableName="8" />
          <Table tableName="9" />
          <Table tableName="10" />
          <Table tableName="11" />
        </ScrollView>
      </View>
    );
  }
}

export default TableScreen;
