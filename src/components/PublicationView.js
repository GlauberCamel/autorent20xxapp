import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, Divider} from 'react-native-elements';
import style from '../styles/style';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import MyHeader from './MyHeader';

class PublicationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: {},
    };
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentDidMount() {
    this.setState({announcement: this.props.route.params});
  }

  addToFavorites = () => {
    ToastAndroid.show('Filme adicionado aos favoritos', ToastAndroid.LONG);
  };

  info = (key, value, icon) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'flex-start',
          padding: 10,
        }}>
        <View
          style={{
            width: 50,
            flexDirection: 'column',
            alignContent: 'center',
            borderColor: '#000',
          }}>
          <Icon
            name={icon}
            size={30}
            color="#000"
            style={{alignSelf: 'center'}}
          />
        </View>
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            marginHorizontal: 10,
          }}>
          {key}:
        </Text>
        <Text>{value}</Text>
      </View>
    );
  };

  _renderItem = ({item, index}) => {
    return <Image style={style.imageCardAnnouncement} source={{uri: item}} />;
  };

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width) * 0.84;
    return (
      <ScrollView>
        <MyHeader />
        {this.state.announcement.id ? (
          <Card style={style.cardAnnouncement}>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              layout={'stack'}
              layoutCardOffset={'18'}
              data={this.state.announcement.images}
              renderItem={this._renderItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              slideStyle={{height: 'auto'}}
            />
            <View nativeID="info_general_movie" style={{paddingTop: 10}}>
              <Text style={style.text}>{this.state.announcement.name}</Text>
              <Text style={{textAlign: 'justify', padding: 10}}>
                {this.state.announcement.carDescription}
              </Text>
            </View>
            <View nativeID="info_review">
              <Divider />
              {this.info('Marca', this.state.announcement.brand, 'car')}
              <Divider />
              {this.info('Publicante', this.state.announcement.user, 'user')}
              <Divider />
              {this.info(
                'Qtd dias',
                `${this.state.announcement.days}`,
                'calendar',
              )}
              <Divider />
              {this.info(
                'Preço p/ Dia',
                `R$ ${this.state.announcement.price.toFixed(2)}`,
                'money',
              )}
              <Divider />
              {this.info(
                'Total',
                `R$ ${(
                  this.state.announcement.days * this.state.announcement.price
                ).toFixed(2)}`,
                'money',
              )}
            </View>
          </Card>
        ) : (
          <React.Fragment />
        )}
      </ScrollView>
    );
  }
}

PublicationView.propTypes = {
  announcement: PropTypes.any.isRequired,
};

export default PublicationView;
