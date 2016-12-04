import { Navigator } from 'react-native';

import TabsContainer from './containers/tabsContainer';
import AddMomentContainer from './containers/addMomentContainer';

const routeMap = new Map([
    ['Main', {
      component: TabsContainer,
      sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
    }],
    ['AddMoment', {
      component: AddMomentContainer,
      sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
    }],

]);

export default routeMap;