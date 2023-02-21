import { View, Text,Image, TextInput, Button ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import BackgroundImg from '../assets/Img/theme1.jpg';
import GetValue from '../GetValue';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, StackActions} from '@react-navigation/native';
export default function Home() {



  const navigation = useNavigation();
  //
  const handleLogout = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();

      navigation.dispatch(StackActions.replace('Login'));
    } catch (err) {
      console.log(err);
    }
  };
  // const[inputText,setInputText]=useState('')
  // const[storeData,setStoreData]=useState([])
  // useEffect(()=>{
  //   async function result(){
  //     await getDataValue();
  //   }
  //   result();
  // },[])

  // const addData=async()=>{
  //   try{
  //   storeData.push(inputText);
  //   const output=JSON.stringify(storeData)
  //   // console.log(output);

  //     await AsyncStorage.setItem("ourData",output)
  //     setInputText('');
  //     // alert("data enter");
  //     // await getDataValue();
  //   }catch(err){
  //     console.log(err)
  //   }
    
  // }
  // const getDataValue=async()=>{
  //   try{
  //    const Data= await AsyncStorage.getItem("ourData")
  //   const output= JSON.parse(Data)
  //     setStoreData(output);
  //     console.log(Data);
  //     alert("data enter");
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  return (
    <View style={{flex:2,backgroundColor:'#c5fcbb',height:300,width:400}}>
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>

      <TouchableOpacity
        style={{
          marginVertical: 10,
          padding: 8,
          backgroundColor: 'red',
          width: '80%',
          borderRadius: 20,
          alignItems: 'center',
        }}
        onPress={() => handleLogout()}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
     
     {/* <TextInput
     style={{backgroundColor:"white",marginTop:40,padding:10,paddingRight:20,paddingLeft:20,borderRadius:30,margin:30}}
     value={inputText}
     onChangeText={(value)=>setInputText(value)}
     />
     <Button title='add Data' onPress={addData} />
      <Text style={{fontSize:40,color:"green",textAlign:"center"}}>array List</Text>
      {
        storeData.map((item,index)=>{
            console.log(item)
            return(
              <Text>{item}</Text>
            )
        })
      }
      */}
    </View>
  )
}