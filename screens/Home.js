import React ,{useEffect,useState,useContext} from 'react';
import { View,Text } from 'react-native'
import {AuthContext} from '../context/auth'

const Home = () => {

const [state,setState] = useContext(AuthContext)

    return ( 
        <View>
            <Text>{JSON.stringify(state,null,4)}</Text>
        </View>
     );
}
 
export default Home;