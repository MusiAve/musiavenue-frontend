import { Map, fromJS } from 'immutable';
import { INIT } from '../constants/reduxFormConstants';

const initialState = {
  userLogin: Map({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY4MzgyODY2MSwiZXhwIjoxNjgzOTE1MDYxfQ.PBdl6ttzhwpLZ2DPiEx77-A0IcLw2Co3yrb33z7NIGM',
    user: {
      firstName: 'Sandipan',
      lastName: 'Pod',
      role: 'admin'
    },
  }),
  isAuthenticated: true
};
const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    default:
      return state;
  }
}



