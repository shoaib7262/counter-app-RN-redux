import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { increamentValue,decreamentValue } from './redux/action'
const MyCounter = () => {
    const myState =useSelector(state=>state.counter)
    const dispatch = useDispatch();
  return (
    <View style={styles.mainView}>
      <Text>{myState}</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={()=>dispatch(decreamentValue())}><Text style={styles.decreamentbutton}> - </Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(increamentValue())}><Text style={styles.increamentbutton}> + </Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCounter

const styles = StyleSheet.create({
    mainView:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    },
    buttonView:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    increamentbutton:{
        color:"white",
        backgroundColor:"blue",
        borderRadius:5,
        paddingHorizontal:"10%",
        fontSize:20
    },
    decreamentbutton:{
        color:"white",
        backgroundColor:"blue",
        borderRadius:5,
        paddingHorizontal:"10%",
        fontSize:20
    }
})