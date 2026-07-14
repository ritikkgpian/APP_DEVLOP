import {View,Text, TouchableOpacity} from "react-native"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromBookmark } from "@/features/bookMarkSlice";
import Toast from "react-native-toast-message";

export default function SAVE(){
    const dispatch=useDispatch();
    const displayItems=useSelector((state:any)=>state.bookmark.savedItems)
    return(
        <View  style={{height:"100%",backgroundColor:"wheat",flexDirection:"row",flexWrap:"wrap",gap:15}} >
            {
                displayItems.map(
                    (value:any)=>{
                        return(


                         <View style={{marginTop:15,height:200,width:300,borderWidth:2,borderColor:"black",borderRadius:15,flexDirection:"column",gap:8,marginLeft:10,backgroundColor:"blue"}}  >
                            
                             <Text style={{fontFamily:"sans-serif",fontWeight:800,textAlign:"center",color:"white"}}  >Title:{value.title}</Text>
                             <Text style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:30,color:"white"}}  >Category:{value.category}</Text>
                             <Text  style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:30,color:"white"}} >Regarding:{value.shortContent}</Text>
                             <TouchableOpacity  onPress={()=>{dispatch(removeFromBookmark(value))
                                Toast.show({
                                    type:"success",
                                  
                                    text2:"Removed from Bookmark successfully !",
                                    position:"top",
                                    visibilityTime:4000,
                                    text2Style:{
                                        color:"black",
                                        fontFamily:"sans-serif",
                                        fontSize:15,
                                        fontWeight:800,

                                    },
                                  
                                });
                             }}
                                  
                             style={{width:90,backgroundColor:"red",borderWidth:2,borderColor:"black",marginLeft:100,marginTop:20,height:28}} >
                                <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"white",paddingLeft:5}} >REMOVE</Text>
                             </TouchableOpacity>
                         </View>
                        )
                    }
                )
            }
        </View>
    )
}