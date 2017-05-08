import React, {Component} from "react";
import {View} from "react-native";

import {Input} from "./Input";

class ContactForm extends Component{

    render() {

        const{
            onFirstName,
            firstName,
            onLastName,
            lastName,
            onAge,
            age
        } = this.props;

        return(
            <View>
                <Input
                    placeholder="First Name"
                    onChangeText={onFirstName}
                    value={firstName}
                />
                <Input
                    placeholder="Last Name"
                    onChangeText={onLastName}
                    value={lastName}
                />
                <Input
                    placeholder="Age"
                    keyboarType="numeric"
                    onChangeText={onAge}
                    value={age}
                />
            </View>
        )
    }
}

export { ContactForm }