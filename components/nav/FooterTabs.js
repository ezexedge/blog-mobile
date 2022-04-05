import React ,{useState} from 'react';
import { View,Text,TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation,useRoute } from '@react-navigation/native';
import {Divider} from 'react-native-elements'

const Tab = ({name,text,handlePress,screenName,routeName}) => {

    const activeScreenColor = screenName === routeName && 'orange'


    return (
        <TouchableOpacity>
        <>
        <FontAwesome5 name={name}  size={25} 
        
        style={{
            marginBottom:3,
            alignSelf:'center',
        }}
    
        onPress={handlePress}
        color={activeScreenColor}
        />
            <Text>{text}</Text>
        </>
    </TouchableOpacity>
    )
}

const FooterTabs = () => {

    const navigation = useNavigation()
    const route = useRoute()

    console.log('routeee--->',route)

    const handlePress = () => {
        alert('presss')
    }

    return ( 
        <>
        <Divider width={1}/>
        <View
        style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent:'space-between'
        }}
        >
       <Tab name="home" text="Home" 
       
       handlePress={()=> navigation.navigate('Home')}
       screenName="Home"
       routeName={route.name}

       />
       <Tab text="Post"  name="plus-square"  handlePress={handlePress} 
          handlePress={()=> navigation.navigate('Post')}
          screenName="Post"
          routeName={route.name}
       />
       <Tab text="Links" name="list-ol" handlePress={handlePress} 
          screenName="Links"
          routeName={route.name}
       
       handlePress={()=> navigation.navigate('Links')}

       />
       <Tab text="Account" name="user" handlePress={handlePress} 
   screenName="Account"
   routeName={route.name}
              handlePress={()=> navigation.navigate('Account')}

       
       />
        </View>
        </>
     );
}
 
export default FooterTabs;