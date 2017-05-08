import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback , TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Card, CardSection } from './common'


class ContactList extends Component{

    onEditContact() {
        const{ id, firstName, lastName, age } = this.props;
        Actions.editContact({ contact: { id, firstName, lastName, age }});
    };

    render() {

        const{ firstName, lastName, age } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.onEditContact.bind(this)}>
                <View>
                    <Card>
                        <CardSection>
                            <Text>{`Name : ${firstName} ${lastName}`}</Text>
                        </CardSection>
                        <CardSection>
                            <Text>{`Age : ${age}`}</Text>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        )
    }

};

export default ContactList