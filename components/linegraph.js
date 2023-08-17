import React from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'






function Linechart() {
    const data = {
        labels:["1st Sem","2nd Sem","3rd Sem","4th Sem","5th Sem","6th Sem","7th Sem","8th Sem"],
        datasets:[{
            data:[9.65,6,8.9,8.4,8.7,5,9],
            backgroundColor:'blue',
            borderColor:'#6a37ec',
            pointBorderColor:'black',
            pointBorderWidth:4,
            tension: 0.2,
            fontColor:'#000'
        }]

    }
  
    

    const options = {
        plugins:{
            legend:false,
        },
        scales:{
            
            x:{
                grid:{
                    display:false,
                  
                },
                ticks:{
                    color:'black',

                }
            },
            y:{
                min:0,
                max: 10,
                ticks:{
                    color:'black',
                    stepSize:1,
                    callback: (value) => value + ' sgpa'
                },
                grid:{
                    display:true,
                    color:'rgba(90, 34, 139,0.7)',
                    
                },
                
            },
            amimation:true
        } 
    }

  return ( 

      <Line data={data} options={options}/>
 
  )
}

export default Linechart
