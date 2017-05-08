import {
    CONTACT_FORM_CHANGE_STATE,
    CONTACT_REQUEST_FAILED,
    CONTACT_REQUEST_SUCCESS,
    CLEAR_CONTACT_FORM
} from '../constant'

const INITIAL_STATE = {
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    errorMsg: '',
    spinner: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CONTACT_FORM_CHANGE_STATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CONTACT_REQUEST_FAILED:
            return { ...state, spinner: false, errorMsg: action.payload };
        case CONTACT_REQUEST_SUCCESS:
            return INITIAL_STATE;
        case CLEAR_CONTACT_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }

};