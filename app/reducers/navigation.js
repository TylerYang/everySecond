import { NAVIGATION } from '../actions';

let initialState = {
  initialRoute: {
    name: 'AddMoment'
  },
  selectedTab: 'moment'
};
const navigation = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION.CHANGE_TAB:
      return Object.assign({}, state, {
        selectedTab: action.tab
      });
    case NAVIGATION.POP:
      return Object.assign({}, state, {
        routeMethod: 'pop',
        routeName: action.routeName
      });
    case NAVIGATION.PUSH:
      return Object.assign({}, state, {
        routeMethod: 'push',
        routeName: action.routeName
      });
    default:
      return state;
  }
};

export default navigation;