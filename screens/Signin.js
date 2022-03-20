import React,{useState,useContext} from 'react';
import {  View, Text, TextInput,ScrollView } from 'react-native'
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios'
import CircleLogo from '../components/auth/CircleLogo'
//con esto scrollea cuando te aparece aparece el teclado
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {API} from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';


const Signin = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [state,setState] = useContext(AuthContext)


    const handleSubmit = async() => {

        setLoading(true)

        if( !email || !password){
            alert('tenes que llenar todos los campos')
            setLoading(false)

            return
        }
        try{

            const {data} = await axios.post(`${API}/signin`,{
                email,
                password
            })

            if(data && data.error){
              alert(data.error)
              setLoading(false)
            }else{

              setState(data)
              await AsyncStorage.setItem('@auth',JSON.stringify(data))

              navigation.navigate("Home")
            }

      

        }catch(error){

            console.log('error signup',error)

        }
    }


    const loadFromAsyncStorage = async() => {
      let data = await AsyncStorage.getItem('@auth')
      console.log('aca el localstorage',data)
    }


    loadFromAsyncStorage()

    return ( 
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
            <View
            style={{marginVertical:100}}
            >
            <CircleLogo/>
        <Text 
        
        style={{textAlign:"center",marginBottom:50}}

        >
          Sign in
        </Text>
        
        <UserInput name="email" value={email} setValue={setEmail} autoCompleteType="email" keyboardType="email-address" />
        <UserInput  name="password" value={password} setValue={setPassword}  autoCompleteType="password" secureTextEntry={true}/>

        <SubmitButton
        
        title="Iniciar sesion" handleSubmit={handleSubmit} loading={loading} />

<Text 
        style={{textAlign:'center'}}
        >
          Not yet register? <Text  style={{color: "#ff2222"}}
          onPress={()=> navigation.navigate('Signup')}      
          >Sign up</Text>
        </Text>


        <Text 
        style={{textAlign:'center',color:'orange',margin:10}}
        >
          Forgot password?
        </Text>
        </View>
  
      </KeyboardAwareScrollView>
     );
}
 
export default Signin;