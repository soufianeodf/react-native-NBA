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
          <TouchableOpacity key={i}>
            <View style={styles.cardContainer}>
              <View>
                <Image
                  style={{height: 150, justifyContent: 'space-around'}}
                  source={{uri: `${item.image}`}}
                  resizeMode="cover"
                />
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
});

function mapStateToProps(state) {
  console.log(state);
  return {
    News: state.News,
  };
}

export default connect(mapStateToProps)(NewsComponent);
