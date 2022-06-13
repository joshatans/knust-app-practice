import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React,  {useLayoutEffect} from 'react'
import {Avatar, Card, Icon} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import {useTheme,useThemeUpdate} from '../Hooks/ThemeContex'



const HomeScreen = ({navigation}) => {

const DarkTheme = useTheme();
const toggledTheme = useThemeUpdate();

const themeStyles ={
  backgroundColor:DarkTheme ? '#121212' :'#fff',
}
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"AIM",
      headerStyle:{backgroundColor:'#8b0000'},
      headerTitleStyle:{color:"#fff"},
      headerTintColor:"black",
      headerLeft:()=>(
        <View>
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Icon name="menu" size={24} color='#fff'/>
          </TouchableOpacity>
        </View>
    ),
    headerRight:()=>(
      <View style={{
        flexDirection:'row',
        justifyContent:"space-around",
        width:60,
        marginRight:0.5
      }}>
        <TouchableOpacity onPress={()=>toggledTheme()}>
          <Avatar source={require('../assets/images/jobastech.jpg')} size="small"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Reference')}>
            <Icon name="dots-three-vertical" type='entypo' size={24} color='#fff'/>
          </TouchableOpacity>
      </View>
  ),
    
    })
  },[])
  return (
    <View>
      <ScrollView style={themeStyles}>
        <Card>
          <Card.Image source={require('../assets/images/jobastech.jpg')}/>
        </Card>
        <Card>
          <Text style={{
            fontSize:20,
            top:15
          }}>Quick Access</Text>
          <Icon name="dots-three-vertical" size={20} color="black" type="entypo" style={{left:170,bottom:2}}/>
          <Card.Divider/>
        </Card>
        <Card>
        <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          alignContent:'center',
          left:20,
          marginTop:40
        }}>
          <TouchableOpacity>
            <Avatar size='medium' rounded source={require('../assets/images/notification.png')}/>
          </TouchableOpacity>
          <Text style={{top:50,right:60}}>Notification</Text>
          <TouchableOpacity>
            <Avatar size='medium' rounded source={require('../assets/images/fees.png')}/>
          </TouchableOpacity>
          <Text style={{top:50,right:60}}>Fess</Text>
          <TouchableOpacity>
            <Avatar size='medium' rounded source={require('../assets/images/slip.png')}/>
          </TouchableOpacity>
          <Text style={{top:50,right:60}}>Slip</Text>
        </View>
        <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          alignContent:'center',
          left:20,
          marginTop:40
        }}>
          <TouchableOpacity>
            <Avatar size='medium' rounded source={require('../assets/images/profile.png')}/>
          </TouchableOpacity>
          <Text style={{top:50,right:60}}>Profile</Text>
          <TouchableOpacity>
            <Avatar size='medium' rounded source={require('../assets/images/notification.png')}/>
          </TouchableOpacity>
          <Text style={{top:50,right:60}}>Notification</Text>
          <TouchableOpacity>
            <Avatar size='medium' rounded source={require('../assets/images/result.png')}/>
          </TouchableOpacity>
          <Text style={{top:50,right:60}}>Result</Text>
        </View>
        </Card>
        <Card>
          <Text style={{fontSize:14,bottom:10,color:"grey"}}>Email</Text>
          <Text style={{fontSize:20,bottom:10}}>joshua_atansuyi@yahoo.com</Text>
          <Text style={{fontSize:14,top:10,color:"grey"}}>Phone Number</Text>
          <Text style={{fontSize:17,top:10}}>08027580601</Text>
        </Card>
        <Card>
          <Text style={{fontSize:25,bottom:10}}>News</Text>
          <Card.Divider/>
          <Text style={{
            fontSize:18,bottom:10
          }}>
            JOBASTECH GLOBAL ENT...Promoting Business through technology.
          </Text>
          <Text style={{fontSize:15,top:5}}>
            Jobastech Global Enterprises was incorprated in Year 2019, but started operating funlly on Thursday, 21st of 
            April,2022.
          </Text> 
          <Card.Divider/>
          <Text style={{fontSize:15,top:5}}>
            Jobastech Global Enterprises was incorprated in Year 2019, but started operating funlly on Thursday, 21st of 
            April,2022.
          </Text> 
          <Card.Divider/>
          <Text style={{fontSize:15,top:5}}>
            Jobastech Global Enterprises was incorprated in Year 2019, but started operating funlly on Thursday, 21st of 
            April,2022.
          </Text> 
          <Card.Divider/>
          
        </Card>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})