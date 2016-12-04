import { MOMENT } from '../actions';

const moment = (state, action) => {
  switch(action.type) {
    case MOMENT.ADD_MOMENT: 
      return {
        path: action.path
      };
    default: 
      return state;
  }
};

const moments = (state = [], action) => {
  switch(action.type) {
    case MOMENT.ADD_MOMENT:
      return [
        ...state,
        moment(undefined, action)
      ];
    case MOMENT.DELETE_MOMENTS:
      return state;
    default:
      return state;
  }
};
export default moments;