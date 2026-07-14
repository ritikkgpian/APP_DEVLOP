import {View,Text, TextInput, TouchableOpacity} from "react-native"
import { ScrollView } from "react-native"
import { useState } from "react";
import { Modal } from "react-native";
import { useDispatch} from "react-redux";
import { addToBookmark } from "../../features/bookMarkSlice";
import Toast from "react-native-toast-message";
export default function EVENTS(){
       
     const tabs=["General Championship","Inter IIT","Open IIT","Alumni Meet"]
      const eventsData=require("../../../EVENTS.json");

  
      const[query,setQuery]=useState("");
      const[category,setCategory]=useState("Open IIT");
      const[events,setEvents]=useState<any>(null);
      const[loading,setLoading]=useState(false);
      const[error,setError]=useState<string | null>(null);
      const dispatch=useDispatch();
     
   // to get the full content view 
   const[selectedItem,setSelectedItem]=useState<any>(null);

  const handleBrowserClick=  async ()=>{
        setLoading(true);
        setError(null);
        try{
            await new Promise((resolve)=>{
                setTimeout(resolve,5000);
            })
            setEvents(eventsData);
        }catch(err:any){
            setError(err?.message || "Failed to Load Events...")
        }finally{
            setLoading(false);
        }
  }
   const filteredEvents=events?.filter(
    (item:any)=>{
        const searchFilter=
        (item.title.toLowerCase() || item.shortContent.toLowerCase()).includes(
            query.toLowerCase()
        );
        const categoryFilter=item.category==category;
        return searchFilter && categoryFilter;


    }
   )












    return(
        <ScrollView style={{backgroundColor:"wheat",height:"100%"}} >
           <View style={{marginLeft:40,marginTop:20}} >
            <TextInput  onChangeText={(e)=>setQuery(e)}  placeholder="Search any event..."  placeholderTextColor="white" 
             style={{height:40,width:"80%",borderWidth:2, color:"white",fontFamily:"sans-serif",
                fontWeight:800,fontSize:20,backgroundColor:"rgb(35,25,70)",borderColor:"white",paddingLeft:20
             }}
            
            ></TextInput>
           </View>
             <View style={{flexDirection:"row",flexWrap:"wrap",gap:30,marginLeft:20,marginTop:24}}  >
                {
                    tabs.map(
                        (item,index)=>{
                         const isActive=item==category;
                            return(
                                <TouchableOpacity key={index} onPress={()=>setCategory(item)}   style={{width:150,borderWidth:3,backgroundColor: isActive ? "orange" : "red",height:50}} >
                                    <Text style={{fontFamily:"sans-serif",fontWeight:800,padding:5}} >{item}</Text>
                                </TouchableOpacity>
                            )
                        }
                    )
                }
             </View>
             <TouchableOpacity   onPress={handleBrowserClick}  style={{marginLeft:140,marginTop:25,width:80,borderWidth:2,backgroundColor:"green",height:30}} >
                <Text style={{fontFamily:"sans-serif",fontWeight:800,padding:2,color:"white",paddingLeft:7}} >Browse</Text>
             </TouchableOpacity>


               {
                loading && (
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"black",textAlign:"center",fontSize:20,marginTop:15}} >Fetching Events......</Text>
                )
             }
             {
                error && (
                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"red"}} >{error}</Text>
                )
                
                
             }
             



                          {!loading && events && (
                             <View style={{flexDirection:"row",flexWrap:"wrap"}} >
                                 {filteredEvents.length==0 ? (
                                 <Text  style={{fontFamily:"sans-serif",fontWeight:800}} >Sorry!! No such events found.</Text>
                                 ):(
                                  filteredEvents.map(
                                     (item:any,index:number)=>{
                                         return(
                                             
                                             <View   key={index} style={{height:240,width:250,borderWidth:2,borderColor:"black",backgroundColor:"white",flexDirection:"column",gap:17,marginLeft:20,marginTop:10}} >
                                                <Text style={{fontFamily:"sans-serif",fontWeight:800,textAlign:"center",color:"blue"}} >EVENT</Text>
                                                <Text style={{fontFamily:"sans-serif",fontWeight:700,marginLeft:5,color:"black"}}  >Title:{item.title}</Text>
                                                <Text  style={{fontFamily:"sans-serif",fontWeight:700,marginLeft:5,color:"black"}}   >Category:{item.category}</Text>
                                                <Text    style={{fontFamily:"sans-serif",fontWeight:700,marginLeft:5,color:"black"}}  >Details:{item.shortContent}</Text>
                                                
                                                <View style={{marginTop:5,marginLeft:20,flexDirection:"row",gap:40}} >
                                                 <TouchableOpacity   onPress={()=>setSelectedItem(item)} style={{width:60,borderWidth:2,backgroundColor:"yellow"}} >
                                                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"black",padding:2}} >View</Text>
                                                 </TouchableOpacity>
                                                
                                             
             
                                                 <TouchableOpacity 
                                                 onPress={()=>{dispatch(addToBookmark(item))
                                                    Toast.show({
                                                                                           type:"success",
                                                                                     
                                                                                       text2:"Added to  Bookmark successfully !",
                                                                                       position:"top",
                                                                                       visibilityTime:4000,
                                                                                       text2Style:{
                                                                                           color:"black",
                                                                                           fontFamily:"sans-serif",
                                                                                           fontSize:10,
                                                                                           fontWeight:800,
                                                   
                                                                                       },
                                                                                         })





                                                 }}
                                 style={{width:60,borderWidth:2,backgroundColor:"yellow"}} >
                                    <Text style={{fontFamily:"sans-serif",fontWeight:800,color:"black"}} >Save</Text>
                            </TouchableOpacity>
                         </View>                                            

             
                      </View>
                   )
                                     }
                 
        
                       )
                                 )}
                                
                                
             
             
                                </View>
                          )}
                             
                               <Modal  visible={selectedItem!=null} >
                                 {selectedItem && (
                                                     <View style={{height:800,width:350,flexDirection:"column",gap:10,marginTop:80,marginLeft:20,backgroundColor:"aqua",borderWidth:3,borderRadius:20}} >
                                                     <Text style={{fontFamily:"sans-serif",fontWeight:800,textAlign:"center",color:"blue"}} >EVENT</Text>
                                                <Text style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:5,color:"black"}}  >Title:{selectedItem.title}</Text>
                                                <Text  style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:5,color:"black"}}   >Category:{selectedItem.category}</Text>
                                                <Text    style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:5,color:"black"}}  >Regarding:{selectedItem.shortContent}</Text>
                                                  <Text style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:5,color:"black",textAlign:"center"}}   >Full Details</Text>
                                                  <Text style={{fontFamily:"sans-serif",fontWeight:800,marginLeft:5,color:"black"}}   >{selectedItem.fullContent}</Text>
                                                  <TouchableOpacity  key={selectedItem.index} onPress={()=>setSelectedItem(null)} style={{marginTop:30,marginLeft:100,borderWidth:2,width:80,backgroundColor:"red"}} >
                                                     <Text style={{fontFamily:"sans-serif",fontWeight:700,color:"white"}} >Go Back!!</Text>
                                                  </TouchableOpacity>
             
             
             
             
             
             
                                                     </View>
                                 )}
                                                 </Modal>
                                 








        </ScrollView>
    )
}