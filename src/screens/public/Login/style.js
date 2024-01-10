import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        paddingTop: 120,
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150,
    },
    textEntrar:{
        fontSize:23,
        color:"#000000"
    },
    textForgot:{
        width:'90%',
        alignItems:'flex-end',
        fontSize:16,

    },
    textButton:{
        borderColor:"#000000",  
        borderRadius: 30, 
        backgroundColor:"#1CA69E",
        width:"100%", 
        marginTop:40,
        height:40,
        alignItems:"center",
    },
})

export default styles;