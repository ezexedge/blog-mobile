import React ,{useState} from 'react';
import { View,Text,TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const Tab = ({name,text}) => (
    <TouchableOpacity>
    <>
    <FontAwesome5 name={name}  size={25} 
    
    style={{
        marginBottom:3,
        alignSelf:'center',
    }}
    />
        <Text>{text}</Text>
    </>
</TouchableOpacity>
)

const FooterTabs = () => {
    return ( 
        <View
        style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent:'space-between'
        }}
        >
       <Tab name="home" text="Home"  />
       <Tab text="Post"  name="plus-square"   />
       <Tab text="Links" name="list-ol" />
       <Tab text="Account" name="user" />
        </View>
     );
}
 
export default FooterTabs;