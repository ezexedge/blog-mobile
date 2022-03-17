import React from 'react';
import {  View, Text, TextInput } from 'react-native'

const UserInput = ({name,value,setValue,
autoCapitalize="none",
keyboardType="default",
secureTextEntry=false

}) => {
    return ( 
     
        
        <View style={{marginHorizontal:64}}>

                <Text
                style={{
                    color: 'grey'
                }}
                >{name}</Text>
                <TextInput
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={{
                    borderBottomWidth: 0.5,
                    height: 48,
                    borderBottomColor: '#8e93a1',
                    marginBottom: 30
                }}

                value={value}
                onChangeText={(text)=> setValue(text)}
                
                />

        </View>
     
     );
}
 
export default UserInput