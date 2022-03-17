import React from 'react';
import { View,Text } from 'react-native';

const Welcome = ({name}) => {
    return ( 
        <View>
            <Text>Hola {name}</Text>
        </View>
     );
}
 
export default Welcome;