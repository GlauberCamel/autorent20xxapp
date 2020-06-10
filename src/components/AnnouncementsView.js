import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import style from '../styles/style';
import axios from 'axios';
import {SearchBar} from 'react-native-elements';
import MyHeader from './MyHeader';

export default class AnnouncementsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalList: [],
      search: '',
      announcements: [],
    };
    this.list = this.list.bind(this);
    this.updateSearchField = this.updateSearchField.bind(this);
    this.showAnnouncement = this.showAnnouncement.bind(this);
    this.searchAnnouncement = this.searchAnnouncement.bind(this);
  }

  updateSearchField = (search) => {
    this.setState({search});
  };

  searchAnnouncement = (e) => {
    // Clonar evitar que a lista original seja reescrita.
    const cloneAnnouncements = [...this.state.originalList];
    if (this.state.search) {
      let filter = cloneAnnouncements.filter((announcement) => {
        if (
          announcement.name
            .toLowerCase()
            .includes(this.state.search.toLocaleLowerCase())
        ) {
          return announcement;
        }
      });
      this.setState({announcements: filter});
    } else {
      this.setState({announcements: cloneAnnouncements});
    }
  };

  async componentDidMount() {
    await axios
      .get('https://64da3ea8394c.ngrok.io/publication/findAll')
      .then((response) => {
        this.setState({announcements: response.data});
        this.setState({originalList: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showAnnouncement = (announcement) => {
    this.props.navigation.navigate('PublicationView', {...announcement});
  };

  list = ({item}) => {
    const screenWidth = Math.round(Dimensions.get('window').width) * 0.5;
    return (
      <TouchableHighlight onPress={() => this.showAnnouncement(item)}>
        <View style={style.listAnnouncements}>
          <Image
            style={{width: 150, height: 150, borderRadius: 10}}
            source={{uri: item.images[0]}}
          />
          <View style={style.listAnnouncementsCol}>
            <Text style={style.titleAnnouncement}>{item.name}</Text>
            <Text style={style.labelList}>Marca: {item.brand}</Text>
            <Text style={style.labelList}>Publicante: {item.user}</Text>
            <Text style={style.labelList}>Qtd dias: {item.days}</Text>
            <Text style={style.labelList}>
              Valor: R$ {(item.days * item.price).toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <ScrollView>
        <MyHeader />
        <SearchBar
          placeholder="Digite aqui..."
          onChangeText={this.updateSearchField}
          onSubmitEditing={this.searchAnnouncement}
          value={this.state.search}
        />
        <FlatList
          data={this.state.announcements}
          renderItem={this.list}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    );
  }
}
