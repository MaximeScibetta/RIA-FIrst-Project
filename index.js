import React from 'react';
import { View, AppRegistry, } from 'react-native';
import Header from './src/component/Header.js';
import AlbumList from './src/component/AlbumList.js';

const App = () => {
  return (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
    </View>
  );
}

AppRegistry.registerComponent( 'AlbumApp', () => App );