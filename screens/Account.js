import React,{useState,useContext,useEffect} from 'react';
import {  View, Text, TextInput,ScrollView,Image,TouchableOpacity } from 'react-native'
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios'
import CircleLogo from '../components/auth/CircleLogo'
//con esto scrollea cuando te aparece aparece el teclado
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {API} from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import * as ImagePicker from 'expo-image-picker';

const Account = ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [image,setImage] = useState({
      url: '',
      public_id:''
    })
    const [role,setRole] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [state,setState] = useContext(AuthContext)
    const [uploadImage,setUploadImage] = useState('')


    

    useEffect(()=>{

        if(state){
            const {name,email,image,role} = state.user

            setName(name)
            setEmail(email)
            setRole(role)
            setImage(image)
        }

    },[state])


    console.log('sssssdd',state)

    const handleSubmit = async() => {

        setLoading(true)

      
        try{

          const {data} = await axios.post('/update-password',{
            password: password
          })

          console.log('success updata')
          if(data.error){
            console.log('error',data.error)
            setLoading(false)
          }else{
            console.log('success updata')
            setPassword('')
            setLoading(false)
          }

      

        }catch(error){

            console.log('password update failed',error)
           setLoading(false)
        }
    }


    const handleUpload = async() => {

      let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
      console.log(permissionResult)
      if(permissionResult.granted === false){
        alert("camara acceso requerido")

        return
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4,3],
        base64:true
      })

      console.log('upload',pickerResult)

      if(pickerResult.cancelled === true){
        return
      }

      let base64Image = `data:image/jpg;base64,${pickerResult.base64}`
      setUploadImage(base64Image)



      let token = state && state.token ?  state.token : ""
      const {data} = await axios.post(`${API}/upload-image`,{
        image:  base64Image
    },{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })

    console.log('upload image => ', data)

    const as = JSON.parse(await AsyncStorage.getItem('@auth'))
    as.user = data
    await AsyncStorage.setItem('@auth',JSON.stringify(as))
    setState({...state,user:data})
    setImage(data.image)
    alert('Profile saved image')

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

          
            <CircleLogo
            


            >
              {image && image.url ? 
                 <Image source={{uri: image.url}}
                 style={{width: 200,height:200,marginVertical:20,borderRadius:100}}
                 />
              
              :
              (
               <TouchableOpacity onPress={()=>handleUpload()}>

                    <FontAwesome5 name='camera' size={25} color="orange"
                    />

               </TouchableOpacity>
              )
              }
            </CircleLogo>



              {image && image.url ? 
              (
                <TouchableOpacity onPress={()=>handleUpload()}>

                <FontAwesome5 name='camera' size={25} color="orange"
                style={{marginTop:10,marginBottom:10, alignSelf:"center"}}

                />

           </TouchableOpacity>
              )
             :
              <></>
              }

        <Text 
        
        style={{textAlign:"center",marginBottom:10}}

        >
          {name}
        </Text>
        <Text 
        
        style={{textAlign:"center",marginBottom:10}}

        >
          {email}
        </Text>

        <Text 
        
        style={{textAlign:"center",marginBottom:10}}

        >
          {role}
        </Text>

        <UserInput  name="password"  value={password} setValue={setPassword}  autoCompleteType="password" secureTextEntry={true}/>

        <SubmitButton
        
        title="Update password" handleSubmit={handleSubmit} loading={loading} />


        </View>
  
      </KeyboardAwareScrollView>
     );
}
 
export default Account;