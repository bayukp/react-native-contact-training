import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {
    getAllContact,
    updateStateForm,
    createContact
} from '../redux/actions'

import { ContactForm, Button } from './common'

class AddContact extends Component{

    onButtonAddContact() {

        const{
            firstName,
            lastName,
            age
        } = this.props;


        if(firstName === ''){
            alert('Fill FirstName')
        }else if(lastName === ''){
            alert('Fill LastName')
        }else if(age === ''){
            alert('Fill Age')
        }else if(isNaN(age)){
            alert('Age must number')
        }else {
            this.props.getAllContact();
            this.props.updateStateForm({prop: 'spinner', value: true});
            this.props.createContact({firstName, lastName, age});
        }
    }

    render() {

        const{
            firstName,
            lastName,
            age,
            spinner,
            errorMsg
        } = this.props;

        return(
            <View>
                <ContactForm
                    { ...this.props }
                    onFirstName={value => this.props.updateStateForm({prop: 'firstName', value})}
                    onLastName={value => this.props.updateStateForm({prop: 'lastName', value})}
                    onAge={value => this.props.updateStateForm({prop: 'age', value})}
                />
                <Text style={Styles.errorStyle}>{errorMsg}</Text>
                <Button spinner={spinner} onPress={this.onButtonAddContact.bind(this)} >
                    Add
                </Button>
            </View>
        )
    }
}

const Styles={
    errorStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = (state, ownProp) => {
    return { ...state.contactForm }
};


export default connect(mapStateToProps, {
    getAllContact,
    updateStateForm,
    createContact
})(AddContact)