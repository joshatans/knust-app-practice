import { StyleSheet, SafeAreaView,Image, Dimensions, View, Text } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

const{width,height} = Dimensions.get('window');

const HeaderRef = () => {
  return (
    <SafeAreaView style={{
        alignItems:'center',
        justifyContent:'center'
    }}>
        <View style={{
            width:width,
            height:height/4,
            backgroundColor:'#8b0000'
        }}>
            <Image
            source={require('../assets/images/jobastech.jpg')}
            style={{
                width:150,
                height:70,
                display:  'flex',
                marginTop:20,
                left:width/3
            }}
            />
            <View style={{alignItems:'center'}}>
                <Avatar rounded size="xlarge" source={require('../assets/images/userimage.png')}/>
            </View>
        
        </View>

    </SafeAreaView>
  )
}

export default HeaderRef