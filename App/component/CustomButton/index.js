import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../Configs/Fonts';
import Theme from '../../Configs/Theme';
import { Sizes } from '../../Utilities/Sizes';



function CustomButton({
    label,
    onPress,
    containerStyle,
    social,
    socialIcon,
    labelStyle,
    light,
    border,
    gradient
}){
    if(social){
        return(
            <TouchableOpacity style={[Styles.container,containerStyle]}>
            {/* <TouchableOpacity> */}
            <View style={{
                flex:0.15, 
                justifyContent : 'center', 
                alignItems:'center'
            }}>
            <Image
            source={socialIcon}
            style={{height : 22, width : 22}}
            resizeMode="contain"
            />
            </View>
            
            <Text
            style={[Styles.labelStyle, labelStyle]}
            >
                {label}
            </Text>
            <View style={{flex:0.15}}/>
            {/* </TouchableOpacity> */}
            </TouchableOpacity>
        )
    }
    if(gradient){
        return(
            <LinearGradient
        colors={["#CA337E","#931CBC"]}
        style={[
            !light ? Styles.container : Styles.lightContainer,
            containerStyle,
            border?Styles.border:null,
            {backgroundColor : 'transparent'}
        ]}
        // onPress={()=>{onPress ? onPress() : ()=>{}}}
        >
        <TouchableOpacity 
        onPress={()=>{onPress ? onPress() : null}}
        style={[Styles.container,{backgroundColor : 'transparent', padding : 0}]}>
        <Text
            style={[
                !light ? Styles.labelStyle : Styles.lightLabel, 
                {flex : 1},
                labelStyle
            ]}
            >
                {label ? label : 'Button'}
            </Text>
        </TouchableOpacity>
        </LinearGradient>
        )
    }
    return(
        <TouchableOpacity
        style={[
            !light ? Styles.container : Styles.lightContainer,
            containerStyle,
            border?Styles.border:null
        ]}
        onPress={()=>{onPress ? onPress() : ()=>{}}}
        >
        <Text
            style={[
                !light ? Styles.labelStyle : Styles.lightLabel, 
                {flex : 1},
                labelStyle
            ]}
            >
                {label ? label : 'Button'}
            </Text>
            
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container : {
        // flex:1,
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignItems : 'center',
        // width : 100+'%',
        // padding : Sizes.HP(1),
        // paddingVertical : 30,
        backgroundColor : Theme.ButtonBg,
        borderRadius : 10
    },
    socialContainer:  {

    },
    labelStyle : {
        fontFamily : Fonts.Bold,
        textAlign : 'center',
        color : 'white',
        fontSize : 17
    },
    lightContainer : {
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignItems : 'center',
        // width : 100+'%',
        padding : Sizes.HP(0.02),
        // paddingVertical : 30,
        backgroundColor : 'white',
        borderRadius : 10
    },
    lightLabel : {
        fontFamily : Fonts.Bold,
        textAlign : 'center',
        color : 'black',
        fontSize : 17
    },
    border : {
        borderWidth : 0.5,
        borderColor : Theme.LightGrayColor,
        borderRadius : 3
    }
})

export default CustomButton;