import * as types from '../actions/actionTypeConstants';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
        //debugger;
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}