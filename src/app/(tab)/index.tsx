import { Image } from "expo-image"

import {View,Text, TouchableOpacity,Modal, TextInput} from "react-native"
import { useState } from "react"
export default function HOME(){
    const[visible,setVisible]=useState(false);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");
  

    const handleSign=()=>{
        if(password.length<6){
            alert("Password must be at least 6 characters long.");
            return;

        }
        if(password!=confirm){
            alert("Confirm password is not matched...")
            return;
        }
        if(!email.trim() || !password.trim() || !confirm.trim()){
            alert("Please! fill all the required details.")
            return;
        }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert( "Please enter a valid email address.");
      return;
    }
    alert("Form submitted Successfully!!");
    setEmail("");
    setPassword("");
    setConfirm("");
    }


    return(
        <View>
            <View  style={{height:70,width:"100%",backgroundColor:"rgb(35,25,70)",flexDirection:"row"}} >
              <View style={{marginTop:20,marginLeft:5,flexDirection:"row",gap:30}} >
               <Text style={{fontFamily:"sans-serif",fontWeight:"800",color:"yellow",marginTop:10}} >Campus Connect</Text>
               <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklBPFx7y9yv7u4uaOLbzxycJpqj4LOSgr925f0TiE0_96UcUSZaBARzh2&s=10"}} style={{height:40,width:50,marginTop:0}} ></Image>
               

              </View>
              <View style={{marginTop:22,marginLeft:110}}>
                <TouchableOpacity   onPress={()=>setVisible(true)} style={{width:80,borderWidth:1,borderColor:"white",borderRadius:10,padding:6}} >
                  <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"white",}} >Sign-In</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View  style={{width:"100%",height:270}} >
                <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6es6_71cTP5kE6jDevBANBE_nhg4HJKn1prfWymbZprGytYxEzSJfQ2Xf&s=10"}} style={{width:"100%",height:"100%"}} ></Image>
            </View>
            <View style={{width:"100%",height:200,backgroundColor:"black"}} >
                 <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"orange",textAlign:"center",marginTop:10,fontSize:20}} >Welcome to Campus-Connect !!</Text>
                 <Text  style={{fontFamily:"sans-serif",fontWeight:800,color:"orange",marginTop:30,fontSize:18,marginLeft:30}}  >Your central hub for campus news, events, and updates</Text>
                 <Text  style={{fontFamily:"sans-serif",fontWeight:800,color:"orange",marginTop:30,fontSize:18,marginLeft:70}}  > 🚨Stay Updated</Text>
            </View>
            <View style={{width:"100%",height:320}} >
               <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX615oAB6rN2trp_dLQe9uB91h4CbiLjweos3Q7viy6yD92GfVORRkJ4eK&s=10"}}style={{height:"100%",width:"100%"}} ></Image>
            </View>

            <Modal  
                 visible={visible}
                 animationType="fade"
               
            
            >
                <View style={{height:400,width:"90%",backgroundColor:"rgb(35,25,70)",marginTop:250,marginLeft:30,flexDirection:"column",borderWidth:2,borderRadius:20 }} >
                <View style={{flexDirection:"column",gap:10}} >
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"orange",textAlign:"center"}} >Welcome Back!!</Text>
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"orange",marginLeft:80}}  >Sign in to continue the progress</Text>
                </View>
                <View style={{flexDirection:"row",gap:15,marginTop:20,marginLeft:25}} >
                    <Text  style={{fontFamily:"sans-serif",fontWeight:800,color:"white"}} >Enter your Email:</Text>
                    <TextInput  onChangeText={(e)=>setEmail(e)}  value={email} placeholder="enter your email.." placeholderTextColor="white" autoCorrect={false}   style={{width:150,borderWidth:1,color:"white",borderColor:"white"}}
                    >
                        
                    </TextInput>

                </View>
                <View style={{flexDirection:"row",gap:15,marginTop:20,marginLeft:25}} >
                    <Text   style={{fontFamily:"sans-serif",fontWeight:800,color:"white"}}  >Enter your password:</Text>
                    <TextInput onChangeText={(e)=>setPassword(e)}  value={password}
                       style={{width:150,borderWidth:1,color:"white",borderColor:"white"}}
                    placeholder="enter password" secureTextEntry={true} placeholderTextColor="white" >
                   
                    </TextInput>
                </View>

                <View style={{flexDirection:"row",gap:15,marginTop:20,marginLeft:25}} >
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"white"}}  >
                        Confirm Password:
                    </Text>
                    <TextInput  value={confirm}  onChangeText={(e)=>setConfirm(e)}  placeholder="confirm password..." secureTextEntry={true} placeholderTextColor="white" style={{borderWidth:2,borderColor:"white",color:"white"}} >

                    </TextInput>
                </View>
                <TouchableOpacity  onPress={handleSign} style={{width:100,marginLeft:120,backgroundColor:"green",borderWidth:2,height:30,marginTop:30}} >
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"black",paddingLeft:10,paddingTop:3}} >Sign-In</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"row",gap:10,marginTop:20,marginLeft:20}} >
                <View   >
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"yellow",marginTop:5}} >Don't have an account?</Text>
                </View>
                  <TouchableOpacity style={{width:140,backgroundColor:"red",borderWidth:2,height:30}} >
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"white",paddingLeft:10,paddingTop:3}} >Register here!!</Text>
                </TouchableOpacity>
               </View>

               <TouchableOpacity onPress={()=>setVisible(false)}  style={{width:90,backgroundColor:"orange",borderWidth:2,height:30,marginTop:20,marginLeft:120}} >
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"black",paddingLeft:10,paddingTop:3}} >Go back!!</Text>
                </TouchableOpacity>

                </View>
            </Modal>
        </View>
    )
}