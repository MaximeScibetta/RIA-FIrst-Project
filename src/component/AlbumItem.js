import React from 'react';
import {View, Text, Image, Button} from 'react-native'

const AlbumItem = (props) => {
    return (
        <View>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: props.album.image}}
            />
            <Text>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
            <Button href={props.album.url} title='Buy' />
        </View>
    );
};

export default AlbumItem;