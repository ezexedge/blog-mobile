import React,{useState,useContext} from 'react';
import {  View, Text, TextInput,ScrollView } from 'react-native'
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios'
import CircleLogo from '../components/auth/CircleLogo'
//con esto scrollea cuando te aparece aparece el teclado
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {API} from '../config'
import { AuthContext } from '../context/auth';

const Signup = ({navigation}) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [state,setState] = useContext(AuthContext)


    const handleSubmit = async() => {

        setLoading(true)

        if(!name || !email || !password){
            alert('tenes que llenar todos los campos')
            setLoading(false)

            return
        }
        try{

            const {data} = await axios.post(`${API}/signup`,{
                name,
                email,
                password
            })

            if(data && data.error){
                alert(data.error)
                setLoading(false)
            }else{

                setState(data)
                setLoading(false)
                console.log('/signin succes',data)
                alert('signup success')
                navigation.navigate("Home")
            }

          

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
          Sign Up
        </Text>
        
        <UserInput name="name" value={name} setValue={setName} autoCapitalize={true} autoCorrect={false} />
        <UserInput name="email" value={email} setValue={setEmail} autoCompleteType="email" keyboardType="email-address" />
        <UserInput  name="password" value={password} setValue={setPassword}  autoCompleteType="password" secureTextEntry={true}/>

        <SubmitButton
        
        title="Registrar" handleSubmit={handleSubmit} loading={loading} />

<Text 
        style={{textAlign:'center'}}
        >
          Already Joined? <Text 
          onPress={()=> navigation.navigate("Signin")}
          
          style={{color: "#ff2222"}} >Sign In</Text>
        </Text>
        </View>
  
      </KeyboardAwareScrollView>
     );
}
 
export default Signup;