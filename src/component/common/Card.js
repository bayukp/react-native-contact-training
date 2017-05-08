import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const {
        containerStyle
    } = Style;
    return(
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const Style = {

    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }

};

export { Card }