import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Table from '../components/table/Table';
class TableScreen extends Component {
  componentDidMount() {
    //Call api o day
  }

  componentDidUpdate() {
    //Xu li data sau khi xu li su kien o day
  }

  handletouch() {
    //Viet ham xu li su kiem cham vao View o day
  }
  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TableScreen</Text>
        <ScrollView>
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
          <Table tableName="1" />
        </ScrollView>
      </View>
    );
  }
}

export default TableScreen;
