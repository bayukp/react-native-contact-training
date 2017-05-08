import React, { Component } from 'react'
import { View, Text, ListView, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'

import { getAllContact } from '../redux/actions'
import ContactItem from './Contact.item'

class ContactList extends Component{


    componentWillMount(){
        this.props.getAllContact();
        this.buildDataSource(this.props.contacts);
    }

    fetchContact(){
        setTimeout(() => {
            this.props.getAllContact();
            this.fetchContact();
        }, 5000);
    }

    componentWillReceiveProps(nextProp){
        this.buildDataSource(nextProp.contacts);
    }

    buildDataSource(contacts){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(contacts);
    }

    renderRow(contact){
       return <ContactItem {...contact} />
    };

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    render() {
        this.buildDataSource(this.props.contacts);
        return(
            <View style={{ flex: 1 }}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProp) => {

    return { ...state.contact }

};

export default connect(mapStateToProps, { getAllContact })(ContactList)