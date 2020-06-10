import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
  text: {
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2c3e50',
    color: '#2c3e50',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'justify',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  cardAnnouncement: {
    width: '100%',
  },
  imageCardAnnouncement: {
    width: screenWidth,
    height: 300,
    alignSelf: 'center',
  },
  bodyCard: {
    flex: 1,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  listAnnouncements: {
    paddingHorizontal: 15,
    color: '#2c3e50',
    height: 200,
    backgroundColor: '#FFF',
    borderWidth: 0.25,
    borderColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listAnnouncementsCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 10,
  },
  titleAnnouncement: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  labelList: {
    fontSize: 13,
    color: '#2c3e50',
    width: screenWidth * 0.6,
  },
});
