import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//ÁREA DE IMPORTAÇÀO DAS TELAS
import Preload from '../screens/Preload';
import Login from '../screens/Login';
import HomeDrawer from './HomeDrawer';

//ÁREA DE SEQUÊNCIA DE "CHAMADA" DAS TELAS
export default createAppContainer(createStackNavigator({
    Preload,
    Login,
    HomeDrawer
},{
    initialRouteName:'Preload',
    defaultNavigationOptions:{
        headerShown: false
    }
}));