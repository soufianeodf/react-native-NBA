import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Moment from 'moment';
import HTML from 'react-native-render-html';

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const params = this.props.route.params;

    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        <Image
          style={{height: 250}}
          source={{uri: params.image}}
          resizeMode="cover"
        />
        <View style={styles.articleContainer}>
          <View>
            <Text style={styles.articleTitle}>{params.title}</Text>
            <Text style={styles.articleData}>
              {params.team} - Posted at {Moment(params.date).format('d MMMM')}
            </Text>
          </View>
          <View style={styles.articleContent}>
            {/*<Text style={styles.articleText}>
            </Text>*/}
            <HTML html={params.content} />
          </View>
        </View>
      </ScrollView>
    );
  }
} // class

const styles = StyleSheet.create({
  articleContainer: {
    padding: 10,
  },
  articleTitle: {
    fontSize: 23,
    color: '#323232',
    fontFamily: 'Roboto-Bold',
  },
  articleData: {
    fontSize: 12,
    color: '#828282',
    fontFamily: 'Roboto-Light',
  },
  articleContent: {
    marginTop: 10,
  },
  // articleText: {
  //   fontSize: 14,
  //   color: '#828282',
  //   fontFamily: 'Roboto-Light',
  //   lineHeight: 20,
  // },
});

export default ArticleComponent;
