import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    DELETE_ALL
} from './Types';

export const createContact = (contact) => {
    return {
        type : ADD_CONTACT,
        payload : contact
    }
}

export const deleteContact = (index) => {
    return {
        type: DELETE_CONTACT,
        deleteIndex : index
    }
}

export const editContact = (payload, index) => {
    return{
        type: UPDATE_CONTACT,
        payload: payload,
        editIndex: index
    }
}

export const deleteAllContact = () => {
    return {
        type: DELETE_ALL
    }
}