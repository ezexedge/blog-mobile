import React,{useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Text } from 'react-native';
import Signup from '../../screens/Signup';
import Signin from '../../screens/Signin'
import Home from '../../screens/Home'
import { AuthContext } from '../../context/auth';
import HeaderTabs from './HeaderTabs';
import Account from '../../screens/Account';
import Post from '../../screens/Post';
import Links from '../../screens/Links';

const Stack = createNativeStackNavigator()


export default function ScreensNav() {


    const [state,setState] = useContext(AuthContext)

    const authenticated = state && state.token !== "" && state.user !== null

return(
      <Stack.Navigator initialRouteName="Account" 

      >

          {authenticated  ?  (
              <>
                  <Stack.Screen name="Home" component={Home}
                        options={{
                            title:"Es un ejemplo",
                            headerRight: () => <HeaderTabs/>
                        }}
                        />

<Stack.Screen name="Links" component={Links}
                      
                        />

<Stack.Screen name="Post" component={Post}
                      
                        />



<Stack.Screen name="Account" component={Account}
                          options={{
                            headerBackTitle:'volver atras'
                             }} 
                        />


              </>
                    

                        )  : (
              <>
                        <Stack.Screen name="Signin" component={Signin}
                        options={{headerShown: false}}
                        />

                    <Stack.Screen name="Signup" component={Signup}
                                            options={{headerShown: false}}

                    />
              </>
          )}

    

      </Stack.Navigator>
)
}