import React, { Component } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { clearContactForm } from './redux/actions'

import ContactList from './component/ContactList.scene'
import AddContact from './component/AddContact.scene'
import EditContact from './component/EditContact.scene'

class RouterComponent extends Component{

    render() {
        return (
            <Router sceneStyle={{marginTop: 64, marginBottom: 5}}>

                <Scene
                    key="contactList"
                    title="Contact List"
                    component={ ContactList }
                    rightTitle="Add"
                    onRight={() => Actions.addContact() }
                />

                <Scene
                    key="addContact"
                    title="Add Contact"
                    component={ AddContact }
                />

                <Scene
                    key="editContact"
                    title="Edit Contact"
                    component={ EditContact }
                    onBack={ () => {
                        this.props.clearContactForm();
                        Actions.pop();
                    } }
                />

            </Router>
        );
    }

}


export default connect(null, { clearContactForm })(RouterComponent)