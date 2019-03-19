import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ImageGalleryComponent from './ImageGalleryComponent';

export default class SimpleImageGalleryV3 extends React.Component {

    constructor(props)
    {
        super(props);
        this.images = [
            {
                uri: "https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg",
                title: "Image #1"
            },
            {
                uri: "https://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_39_-_COVER_A_FNL_WEB_1024x1024.jpg?v=1530034748",
                title: "Image #2"
            },
            {
                uri: "https://m.media-amazon.com/images/M/MV5BZWIxYjU4NmItZWE4NC00ZDI1LWIxYzgtMDMwZTQ0OTBhYTI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX477_CR0,0,477,268_AL_.jpg",
                title: "Image #3"
            },
            {
                uri: "https://pmcvariety.files.wordpress.com/2017/10/rickandmorty.jpg?w=1000",
                title: "Image #4"
            },
            {
                uri: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/rickandmorty-drunk-tired-ship-700x337.jpg",
                title: "Image #5"
            },
            {
                uri: "https://pixel.nymag.com/imgs/daily/vulture/2018/06/07/magazine/rick-and-morty/lede.w700.h700.jpg",
                title: "Image #6"
            },
            {
                uri: "https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/04/rick_and_morty_season_4_dan_harmon.jpg?itok=EznkG-uG",
                title: "Image #7"
            },
            {
                uri: "https://imgc.allpostersimages.com/img/print/u-g-F931HQ0.jpg?w=550&h=550&p=0",
                title: "Image #8"
            }
        ];
    }


    renderImagesWithTitles()
    {
        let imagesComponents = [];
        for(let i = 0; i < this.images.length; i++)
        {
            imagesComponents.push(
                <ImageGalleryComponent uri={this.images[i].uri} title={this.images[i].title} key={i} />
            );
        }
        return imagesComponents;
    }


    render() {
        return (
        <ScrollView style={styles.container}>
            {this.renderImagesWithTitles()}            
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
