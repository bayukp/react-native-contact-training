import {UPDATE_LIST_CONTACTS} from '../constant'

const INITIAL_STATE = {
    contacts: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type){
        case UPDATE_LIST_CONTACTS:
            action.payload.sort(compare);
            return {
                contacts: action.payload
            };
        default:
            return state;
    }
}

function compare(a,b) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
        return -1;
    else if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
        return 1;
    else{
        if (a.lastName.toLowerCase() < b.lastName.toLowerCase())
            return -1;
        else if (a.lastName.toLowerCase() > b.lastName.toLowerCase())
            return 1;
    }
    return 0;
}