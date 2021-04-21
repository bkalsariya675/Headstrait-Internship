import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    DELETE_ALL
} from '../actions/Types';

const initialState = {
    contacts : [],
    success: "",
    error: "",
}

const contactReducer =  (state = initialState, action) => {
    let newContacts = [...state.contacts];
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            }

        case DELETE_CONTACT:
            newContacts.splice(action.deleteIndex, 1);
            return {
                ...state,
                contacts: newContacts
            }

        case UPDATE_CONTACT:
            newContacts[action.editIndex] = action.payload
            return{
                ...state,
                contacts: newContacts
            }
        
        case DELETE_ALL:
            newContacts.splice(0,newContacts.length);
            return {
                ...state,
                contacts: newContacts
            }
        default:
            return state;
    }
}
export default contactReducer;