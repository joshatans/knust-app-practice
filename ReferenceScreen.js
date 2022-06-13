import {StyleSheet, View, Text, TextInput } from 'react-native'
import React,{useState} from 'react'


//importing HeaderRef Screen

import HeaderRef from '../components/HeaderRef'
//import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Input,Button,Avatar } from 'react-native-elements';

import {useTheme} from '../Hooks/ThemeContex';

const ReferenceScreen = ({navigation}) => {
  const[studentid,setstudentid] = useState('');

  const DarkTheme = useTheme();

  const themeStyles  = {
    backgroundColor:DarkTheme?'#121212':'#fff'
  }
  const Login = () =>{
    if(studentid.length==0){
      alert('Required filled is missing');
    }
    else{
      navigation.navigate("Login");
    }
  }
  return (
    <View style={themeStyles}>
      <HeaderRef/>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
        <Input style={{height:50,width:200}}
        type = "number"
        placeholder="Enter your student ID"
        value={studentid}
        keyboardType = "numeric"
        secureTextEntry
        onChangeText = {(text)=>setstudentid(text)}
        />
        <Button title="NEXT" onPress={Login} type="clear" containerStyle={{backgroundColor:'#8b0000',width:300,borderRadius:20}} />
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

export default ReferenceScreen