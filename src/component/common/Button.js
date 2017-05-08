import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Spinner } from './Spinner'

class Button extends Component {

    renderButton() {

        const{
            children,
            onPress,
            spinner = false,
            spinnerSize = 'small'
        } = this.props;


        if(spinner){
            return <Spinner size={spinnerSize}/>
        }

        const {
            borderStyle,
            textStyle
        } = Styles;

        return (
            <TouchableOpacity onPress={onPress} style={borderStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View>
                {this.renderButton()}
            </View>
        )
    }

}

const Styles = {

    borderStyle: {
        backgroundColor: '#008AD5',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    textStyle: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
    }

};

export { Button }