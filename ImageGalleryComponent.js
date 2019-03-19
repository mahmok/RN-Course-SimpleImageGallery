import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class ImageGalleryComponent extends React.Component {

    constructor(props)
    {
        super(props);
    }





    render() 
    {
        return (
            <View key={"images-" + this.props.index} style={{flex: 1, flexDirection: 'row'}}>
                <Image style={{flex: 0.8, height: 200}} source={{uri: this.props.uri}} resizeMode="contain" />
                <Text style={{flex: 0.2, alignSelf: 'center', marginLeft: 5}}>{this.props.title}</Text>
            </View>
        );
    }
}

