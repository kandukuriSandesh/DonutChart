import React from 'react';
import Chart from 'react-apexcharts'
import PieChart from '../components/PieChart';

const DonutComponent = () => {
  const options =
      {
        series:[38,62],
        labels:['Sales','Purchases'],
        colors:['#90EE90','#00008B'],
         title:{
         text:`Financials`,
         style: {
            fontSize:  '24px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#263238'
          }
        } ,
        plotOptions: {
            pie: {
              expandOnClick: false,
              donut:{
                labels:{
                    show:true,
                    fontSize:"20px",
                    formatter: function (val) {
                        return `5`
                      }
                },
                value:{
                    show:true,
                    formatter: function (val) {
                        return `5`
                      }
                }
              }
            }
          },
          legend:{
            show:true,
            horizontalAlign: 'left',
            position:"top",
            fontSize: '20px',
            offsetX: 0,
      offsetY: 0,
            markers: {
                width: 10,
                height:10,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: 'white',
                radius: 12,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 5,
                vertical: 5
            },
          }
      }
  

  const series = [38,62]

  return(
    <>
    <div style={{display:"flex"}} >
    <div style={{width:"500px",display:"inline-block"} } >
        <Chart 
        options={options} 
        series={series} 
        type='donut' 
        width="100%"  />
        
    </div>
    <div className='vertical-line' ></div>
    <div style={{width:"500px",display:"inline-block"} } >
        <Chart 
        options={options} 
        series={series} 
        type='donut' 
        width="100%"  />
        
    </div>
    </div>
    <PieChart
    firstChunck={58}
    secondChunck={42}
    />
    </>
  )
}

export default DonutComponent;