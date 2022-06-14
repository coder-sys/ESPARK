import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Particles from 'react-tsparticles';
import React from 'react'
export default  function Particle_Background() {
    return(
    <Particles  options={{
      
        fpsLimit:50,
        interactivity:{
            detect_on:"canvas",
            events:{
                resize:true
            },

        },
        particles:{
            color:{
                value:'#000'
            },
            number:{
                density:{
                    enable:true,
                    area:1080
                },
                limit:0,
                value:400,

            },
            opacity:{
                animation:{
                    enable:true,
                    minimumValue:0.05,
                    speed:3,
                    sync:true
                },
                random:{
                    enable:true,
                    minimumValue:0.05,
                },
                value:12,

            },
            shape:{
                type:'square'
            },
            size:{
                random:{
                    enable:true,
                    minimumValue:0.5
                },
                value:2.
            }
        
                
            
        }
    }}/>
    )
}
