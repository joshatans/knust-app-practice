import { StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header'



//import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

import { Input,Button,Avatar } from 'react-native-elements';
import {useTheme} from '../Hooks/ThemeContex'



const LoginScreen = ({navigation}) => {

  const DarkTheme = useTheme();

  const themeStyles ={
    backgroundColor:DarkTheme ? '#121212' :'#fff'
  }

  const[username,setUsername] = useState('');
  const[password,setpassword] = useState('');

  const Verify=()=>{
    if(username.length==0 || password==0){
      alert('Require filled missing');
    }else{
      navigation.replace('HomeScreen');
    }
  }
  return (
    <View style={themeStyles}>
      <Header/>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
        <Input style={{height:50,width:200}}
        type = "text"
        placeholder="Username"
        value={username}
        onChangeText = {(text)=>setUsername(text)}
        />
        <Input style={{height:50,width:200}}
        type = "text"
        placeholder="Password"
        value={password}
        onChangeText = {(text)=>setpassword(text)}
        />
        <Button  onPress={Verify} title="VERIFY" type="clear" containerStyle={{backgroundColor:'#8b0000',width:300,borderRadius:20}} />
      </View>
      <View style={{marginTop:15}}>
        <TouchableOpacity>
          <Text>forgot password</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row",justifyContent:'center',marginTop:200}}>
        <Avatar size="small" rounded source={require('../assets/images/profile.png')}/>
        <Avatar size="small" rounded source={require('../assets/images/notification.png')}/>
        <Avatar size="small" rounded source={require('../assets/images/fees.png')}/>
        <Avatar size="small" rounded source={require('../assets/images/slip.png')}/>
        <Avatar size="small" rounded source={require('../assets/images/result.png')}/>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})