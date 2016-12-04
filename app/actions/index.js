/* Moment相关actions 跟 actionCreators */
export const MOMENT = {
  ADD_MOMENT: 'ADD_MOMENT',
  DELETE_MOMENT: 'DELETE_MOMENT',
}
// export const ADD_MOMENT = 'ADD_MOMENT';
//export const DELETE_MOMENT = 'DELETE_MOMENT';

export const addMoment = (path) => ({
  type: MOMENT.ADD_MOMENT,
  path: path 
});

export const deleteMoments = (ids) => ({
  type: MOMENT.DELETE_MOMENT,
  ids: ids
});

                            
/* Montage相关actions 跟 actionCreators*/
export const MONTAGE = {
  ADD_MONTAGE: 'ADD_MONTAGE',
  EDIT_MONTAGE: 'EDIT_MONTAGE', 
  DELETE_MONTAGE: 'DELETE_MONTAGE'
};
export const addMontage = (name, path) => ({
  type: MONTAGE.ADD_MONTAGE,
  path: path,
  name: name
});


/* Navigationi相关actions 跟 actionCreators*/
export const NAVIGATION = {
  PUSH: 'PUSH',
  POP: 'POP', 
  CHANGE_TAB: 'CHANGE_TAB'
};
export const push = (routeConfig) => ({
  type: NAVIGATION.PUSH,
  routeName: routeConfig.name
});

export const pop = (routeConfig) => ({
  type: NAVIGATION.POP,
  routeName: routeConfig.name
});

export const tabTo = (tabName) => ({
  type: NAVIGATION.CHANGE_TAB,
  tab: tabName
});
