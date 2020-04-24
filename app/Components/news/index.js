import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getNews} from '../../Store/actions/newsActions';
import Moment from 'moment';

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getNews());
  }

  renderArticle = news => (
    news.articles ?
    news.articles.map((item, i) => (
          <TouchableOpacity 
            onPress={() =>
              this.props.navigation.navigate('NewsArticle', {
            ...item
          })}
          key={i}
          >
            <View style={styles.cardContainer}>
              <View>
                <Image
                  style={{height: 150, justifyContent: 'space-around'}}
                  source={{uri: `${item.image}`}}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.contentCard}>
                <Text style={styles.titleCard}> {item.title} </Text>
                <View style={styles.bottonCard}>
                  <Text style={styles.bottonCardTeam}> {item.team} - </Text>
                  <Text style={styles.bottonCardText}>Posted at {Moment(item.date).format('d MMMM  ')} </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
    ))
    :null
  )

  render() {
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }
} // class

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  contentCard: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titleCard: {
    fontFamily: 'Roboto-Bold',
    color: '#232323',
    fontSize: 16,
    padding: 10,
  },
  bottonCard: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    padding: 10,
  },
  bottonCardTeam: {
    fontFamily: 'Roboto-Bold',
    color: '#828282',
    fontSize: 12,
  },
  bottonCardText: {
    fontFamily: 'Roboto-Light',
    color: '#828282',
    fontSize: 12,
  },
});

function mapStateToProps(state) {
  console.log(state);
  return {
    News: state.News,
  };
}

export default connect(mapStateToProps)(NewsComponent);
