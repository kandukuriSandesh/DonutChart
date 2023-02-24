import React from 'react';

const PieChart = ({firstChunck,secondChunck}) => {
    let firstChunckAngle;
    let secondChunckAngle;
    if(firstChunck<50){
        firstChunckAngle= parseInt(firstChunck)*3.6 + 90
    }else{
        firstChunckAngle='180'
        secondChunckAngle = parseInt(secondChunck) * 3.6
    }

    return(
        <>
         <div className='piechart' style={firstChunck < 50 ?
         {backgroundImage:
      `linear-gradient(${firstChunckAngle}deg, transparent 50%, rgb(151, 255, 226) 50%),
      linear-gradient(90deg, rgb(151, 255, 226) 50%, transparent 50%)`} : firstChunck == 50 ?`fifty` :
       { backgroundImage:
      `linear-gradient(180deg, transparent 50%, rgb(0, 8, 168) 50%),
      linear-gradient(${secondChunckAngle}deg,  rgb(151, 255, 226) 50%, transparent 50%)`}} >

         </div>
        </>
    )
}

export default PieChart;