import React from 'react';

import { View,Text } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs';

export default function  Links(){

    return (
        <View
        style={{
            flex:1
        }}
        >
            <Text>Linkss...</Text>
            <View style={{flex:1,justifyContent: 'flex-end'}}>
            <FooterTabs/>
            </View>
        </View>
    )
 
}