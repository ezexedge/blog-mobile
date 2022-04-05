import React from 'react';

import { View,Text } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs';

export default function  Post(){

    return (
        <View
        style={{
            flex:1
        }}
        >
            <Text>Post...</Text>
            <View style={{flex:1,justifyContent: 'flex-end'}}>
            <FooterTabs/>
            </View>
        </View>
    )
 
}