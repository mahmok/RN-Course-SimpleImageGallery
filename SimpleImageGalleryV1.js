import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class SimpleImageGalleryV1 extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg"}} resizeMode="contain" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #1</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_39_-_COVER_A_FNL_WEB_1024x1024.jpg?v=1530034748"}} resizeMode="stretch" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #2</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://m.media-amazon.com/images/M/MV5BZWIxYjU4NmItZWE4NC00ZDI1LWIxYzgtMDMwZTQ0OTBhYTI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX477_CR0,0,477,268_AL_.jpg"}} resizeMode="contain" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #3</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://pmcvariety.files.wordpress.com/2017/10/rickandmorty.jpg?w=1000"}} resizeMode="contain" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #4</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/rickandmorty-drunk-tired-ship-700x337.jpg"}} resizeMode="contain" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #5</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://pixel.nymag.com/imgs/daily/vulture/2018/06/07/magazine/rick-and-morty/lede.w700.h700.jpg"}} resizeMode="cover" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #6</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/04/rick_and_morty_season_4_dan_harmon.jpg?itok=EznkG-uG"}} resizeMode="contain" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #7</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex: 0.8, height: 200}} source={{uri: "https://imgc.allpostersimages.com/img/print/u-g-F931HQ0.jpg?w=550&h=550&p=0"}} resizeMode="contain" />
          <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>Image #8</Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});
