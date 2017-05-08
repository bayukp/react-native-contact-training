import _ from 'lodash'
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { ContactForm, Button, Confirm } from './common'
import { updateStateForm, updateContact, deleteContact, getAllContact } from '../redux/actions'

class EditContact extends Component{

    state = {
        showModal: false
    };

    componentWillMount(){

        _.forEach(this.props.contact, (value, key) => {
            this.props.updateStateForm({
                prop: key,
                value
            });
        });


    }

    onUpdateContact(){
        const{
            id,
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
            this.props.updateContact({
                id,
                firstName,
                lastName,
                age
            })
        }
    }

    render() {

        const { id } = this.props;

        return (
            <View>
                <ContactForm
                    { ...this.props }
                    onFirstName={value => this.props.updateStateForm({
                        prop: 'firstName',
                        value
                    })}
                    onLastName={value => this.props.updateStateForm({
                        prop: 'lastName',
                        value
                    })}
                    onAge={value => this.props.updateStateForm({
                        prop: 'age',
                        value
                    })}
                />
                <Button onPress={this.onUpdateContact.bind(this)}>
                    Update
                </Button>
                <Button onPress={() => this.setState({ showModal: true })}>
                    Delete
                </Button>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => {
                        this.props.getAllContact();
                        this.setState({showModal: false});
                        this.props.deleteContact({
                            id
                        });
                    }}
                    onDecline={() => {this.setState({showModal: false})}}>
                    Are you sure you want to delete this?
                </Confirm>
            </View>
        )
    }

}

const mapStateToProps = (state, ownProp) => {
    return { ...state.contactForm }
};

export default connect(mapStateToProps, { updateStateForm, updateContact, deleteContact, getAllContact })(EditContact)