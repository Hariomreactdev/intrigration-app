import { View, Text,TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function GetValue() {

const baseURL='http://192.168.1.4/astroseer/native.php';


  const[name,setName]=useState('')
  const[password,setPassword]=useState('')



    


const loginUser = async () => {
  try {
    const {data} = await Axios.post(baseURL, {
      name: name,
      password: password,
    });

    // if (data.status == 'success') {
    //   alert('User Login Successfully');
    // } else {
    //   alert('User Not Found');
    // }

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
  
  return (


    <View>
      <Text style={{backgroundColor:"red",height:300,width:400,textAlign:"center",fontSize:55,marginTop:40}}>hello world</Text>
      <View>
    <TextInput
    placeholder='LOG IN'
    style={{margin:30,backgroundColor:"yellow",height:50,borderRadius:10,padding:10}}
    onChangeText={(text)=>setName(text)}
   
    />
      </View>
      <View>
    <TextInput
    placeholder='Password'
    
    style={{margin:30,backgroundColor:"yellow",height:50,borderRadius:10,padding:10}}
    onChangeText={(text)=>setPassword(text)}
    />
      </View>
      <Button title='submit' onPress={() => {loginUser();}} />
    </View>
  )
}