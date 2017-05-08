import Axios from 'axios'
import { Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import {
    CONTACT_FORM_CHANGE_STATE,
    CONTACT_REQUEST_FAILED,
    CONTACT_REQUEST_SUCCESS,
    UPDATE_LIST_CONTACTS,
    CLEAR_CONTACT_FORM
} from '../constant'

if(Platform.OS === 'ios') {
    var API_MASTER          = 'http://127.0.0.1:3000/'; //local computer
}else {
    var API_MASTER          = 'http://10.0.2.2:3000/'; //android emulator need to be set to 10.0.2.2 to get pc localhost
}
const API_GET_ALL_CONTACT   = `${API_MASTER}contacts`; //method GET
const API_GET_CONTACT_ID    = `${API_MASTER}contacts/`; // + contact id - method GET
const API_CREATE_CONTACT    = `${API_MASTER}contacts`; // method POST
const API_UPDATE_CONTACT    = `${API_MASTER}contacts/`; // + contact id - method PUT
const API_DELETE_CONTACT    = `${API_MASTER}contacts/`; // + contact id - method DELETE


const contactRequestSuccess = (dispatch) => {
    dispatch({
        type: CONTACT_REQUEST_SUCCESS
    });
    Actions.contactList({type: 'reset'});
};

const contactRequestFailed = (dispatch, message) => {
    dispatch ({
        type: CONTACT_REQUEST_FAILED,
        payload: message
    });
};

export const updateStateForm = ({prop, value}) => {
    return{
        type: CONTACT_FORM_CHANGE_STATE,
        payload: {prop, value}
    }
};

export const clearContactForm = () => {
    return{
        type: CLEAR_CONTACT_FORM
    }
};

export const getAllContact = () => {
    return dispatch => {
        Axios.get(API_GET_ALL_CONTACT)
            .then(success => {
                console.log(success);
                dispatch({
                    type: UPDATE_LIST_CONTACTS,
                    payload: success.data
                })
            })
            .catch(error => {
                alert('An error occurred');
                console.log(error);
            })
    }
};

export const createContact = ({firstName, lastName, age}) => {

    return dispatch => {
        Axios.post(API_CREATE_CONTACT, {
            firstName,
            lastName,
            age
        })
            .then(success => contactRequestSuccess(dispatch))
            .catch(error => contactRequestFailed(dispatch, `Failed create contact ${firstName}`))
    }
};

export const updateContact = ({id, firstName, lastName, age}) => {

    return dispatch => {
        Axios.put(`${API_UPDATE_CONTACT}${id}`, {
            firstName,
            lastName,
            age
        })
            .then(success => contactRequestSuccess(dispatch))
            .catch(error => contactRequestFailed(dispatch, `Failed to update contact with id ${id}`))
    }

};

export const deleteContact = ({id}) => {
    return dispatch => {
        Axios.delete(`${API_DELETE_CONTACT}${id}`)
            .then(success => contactRequestSuccess(dispatch))
            .catch(error => contactRequestFailed(dispatch, `Failed delete contact`))
    }
};
