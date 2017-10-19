import React from 'react';
import {Text} from 'react-native'
import Styles from '../css/Styles';


const Header = (props) => {
	const {headerStyle} = Styles;
	return <Text style={headerStyle}> {props.headerText} </Text>;
}
export default Header;
