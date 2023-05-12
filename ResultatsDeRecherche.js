import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class ResultatsDeRecherche extends Component {
  _extracteurClef = (item, index) => index.toString();
  _rendreItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._itemAppuye}
    />
  );
  _itemAppuye = (index) => {
    console.log('Ligne appuyée : '+index);
  };
  render() {
    console.log(this.props.route.params);
      const { listings } = this.props.route.params;
    return (
      <FlatList
        data={listings}
        keyExtractor={this._extracteurClef}
        renderItem={this._rendreItem}
      />
    );
  }
}

const styles = StyleSheet.create({
    conteneurTexte: {
      flex: 1
    },
    separateur: {
      height: 1,
      backgroundColor: '#eedded'
    },
    nomOfficiel: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#58BEEC'
    },
    region: {
      fontSize: 20,
      color: '#656565'
    },
    conteneurLigne: {
      flexDirection: 'row',
      padding: 10
    },
  })

  class ListItem extends React.PureComponent {
    _itemAppuye = () => {
      this.props.onPressItem(this.props.index);
    }
    render() {
      const item = this.props.item;
      return (
        <TouchableHighlight
          onPress={this._itemAppuye}
          underlayColor='#eedddd'>
          <View>
            <View style={styles.conteneurLigne}>
             <View style={styles.conteneurTexte}>
                <Text style={styles.nomOfficiel}>{item.name.official} - {item.altSpellings[0]}</Text>
                <Text style={styles.region}>Nom de la region: {item.region}</Text>
                <Text style={styles.region}>Nom de la sous-region: {item.subregion}</Text>
                <Text style={styles.region}>Nom de la capitale : {item.capital}</Text>
                <Text style={styles.region}>Population : {item.population}</Text>
                <Text style={styles.region}>Fuseau horaire : {item.timezones}</Text>
                <Text style={styles.region}>Nationalite : {item.demonyms.fra.m} - {item.demonyms.fra.f}</Text>
                <Text style={styles.region}>Codes de quelques pays voisins : {item.borders[0]} - {item.borders[1]} - {item.borders[2]}</Text>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
      );
    }
  }