import React from 'react';
import { View } from 'react-native'

const CardSection = (props) => {
    const{
        flexDirection = 'row'
    } = props.style || {};

    return(
        <View style={{...Style.containerStyle, ...props.style, flexDirection }}>
            {props.children}
        </View>
    );
}

const Style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection }