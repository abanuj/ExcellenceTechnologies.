import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  FlatList
} from 'react-native';

export default class App extends React.Component {
  state = {
    items: [],
    item: ''
  }

  changeTextHandler = text => {
    this.setState({
      item: text
    })
  }
  submitHandler = e => {
    const arr = [this.state.item, ...this.state.items];
    this.setState({
      items: arr,
      item: ''
    })
    this.saveHandler(arr);
  }

  saveHandler = (arr) => {
    AsyncStorage.setItem('items', JSON.stringify(arr))

    AsyncStorage.getItem('items')
      .then(itemsJSON => {
        if (itemsJSON) {
          this.setState({
            items: JSON.parse(itemsJSON)
          })
        }
      })
  }
  renderItem = ({ item }) => (
    <>
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
      <View style={styles.ropeContainer}>
        <View style={styles.rope}>
          <View style={styles.chainDesign}></View>
          <View style={styles.chainDesign}></View>
          <View style={styles.chainDesign}></View>
        </View>
        <View style={styles.rope}>
          <View style={styles.chainDesign}></View>
          <View style={styles.chainDesign}></View>
          <View style={styles.chainDesign}></View>
        </View>
      </View>

    </>
  );


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}  >
          <Text style={styles.title}>Your To List</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={this.submitHandler}
          placeholder='Add New Task'
          returnKeyType="done"
          onChangeText={this.changeTextHandler}
          value={this.state.item}
        />
        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  },
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  item: {
    backgroundColor: '#6784a8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 16,
  },
  title2: {
    fontSize: 32,
  },
  ropeContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  rope: {
    width: 20,
    height: 60,
  },
  chainDesign: {
    width: 20,
    height: 20,
    borderWidth: 4,
    borderColor: '#8b9096',
    borderRadius: 10
  }
});