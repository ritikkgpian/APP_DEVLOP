import React from "react";
import {Tabs} from "expo-router"
import {FontAwesome} from "@expo/vector-icons"
export default function TabRoot(){
    return(
        <Tabs screenOptions={{headerShown:false,
            tabBarStyle:{
               height:60,
               backgroundColor:"orange",
              

            },
            tabBarLabelStyle:{
                fontFamily:"sans-serif",
                color:"black",
                fontSize:15,
                fontWeight:"800",
            }
        }}  >
            <Tabs.Screen name="index" options={{
                title:"HOME",tabBarIcon: ({ color,size }) => <FontAwesome size={28} name="home" color={color} />
            }}>
                 </Tabs.Screen>

            <Tabs.Screen name="NOTICES" options={{title:"NOTICES",
              
              tabBarIcon: ({ color, size }) => <FontAwesome name="bullhorn" size={size} color={color} />
            }} >

            </Tabs.Screen>
            <Tabs.Screen name="EVENTS" options={{title:"EVENTS",
                tabBarIcon: ({ color, size }) => <FontAwesome name="calendar" size={size} color={color} />
            }} >

            </Tabs.Screen>
            <Tabs.Screen name="SAVE" options={{title:"SAVE",
                tabBarIcon: ({ color, size }) => <FontAwesome name="bookmark" size={size} color={color} />
            }} >

            </Tabs.Screen>

           
        </Tabs>
    )
}
