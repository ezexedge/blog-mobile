import React,{useState} from 'react';
import {  View, Text, TextInput,ScrollView } from 'react-native'
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios'
import CircleLogo from '../components/auth/CircleLogo'
//con esto scrollea cuando te aparece aparece el teclado
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Signin = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)


    const handleSubmit = async() => {

        setLoading(true)

        if(!name || !email || !password){
            alert('tenes que llenar todos los campos')
            setLoading(false)

            return
        }
        try{

            const {data} = await axios.post("http://localhost:8000/api/signin",{
                email,
                password
            })

            console.log('/signin succes',data)
            alert('signup success')

        }catch(error){

            console.log('error signup',error)

        }
    }

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
        
        title="Registrar" handleSubmit={handleSubmit} loading={loading} />

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