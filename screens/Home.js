import React ,{useEffect,useState,useContext} from 'react';
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthContext} from '../context/auth'
import FooterTabs from '../components/nav/FooterTabs';

//SAFEAREAVIEW :
//lo que hace es no superponer el contenido con la pantalla
//sino que lo mueve y te muestra todo el contenido


const Home = ({navigation}) => {

const [state,setState] = useContext(AuthContext)

    return ( 
        <View
        style={{
            flex:1,
            justifyContent: 'space-between'
        }}
        >
            <Text>{JSON.stringify(state,null,4)}</Text>
            <FooterTabs/>
        </View>
     );
}
 
export default Home;