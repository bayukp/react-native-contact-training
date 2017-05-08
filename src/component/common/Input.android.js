import React from 'react'
import { View, TextInput } from 'react-native'

const Input = ({onChangeText, value, secureTextEntry = false, placeholder, keyboardype = 'default'}) => {

    const{
        borderStyle,
        inputStyle
    } = Styles;

    return(
        <View style={borderStyle}>
            <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                keyboardType={keyboardype}
            />
        </View>
    );

};

const Styles = {
    borderStyle: {
        borderRadius: 5,
        borderColor: '#008AD5',
        borderWidth: 2,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    inputStyle: {
        color: 'black',
        height: 50, //android need this to set above 40 in order to get text shown
    }
};

export { Input }