import * as types from './actionTypeConstants';

export function createCourse(course) {
    //debugger;
    return { type: types.CREATE_COURSE, course };
}