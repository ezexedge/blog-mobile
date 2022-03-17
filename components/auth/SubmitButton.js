import React from 'react';
import {Text, TouchableOpacity } from 'react-native'
const SubmitButton = ({title,handleSubmit,loading}) => {
    return (  
        <TouchableOpacity
        
        onPress={handleSubmit}
        style={{
            backgroundColor:'#ff9900',
            height:50,
            marginBottom:20,
            justifyContent:'center',
            marginHorizontal:60,

            borderRadius:24
        }}

        >

<Text
style={{
    textAlign:'center'
}}
>
       {loading ? 'espere....' :title}

</Text>

        </TouchableOpacity>
    );
}
 
export default SubmitButton;