
import React from 'react'
import {PieChart, Pie, Legend} from 'recharts';


// body {
//   margin: 0;
// }
// #container {
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
//   padding: 10px;
//   background-color: #fff;
//   height:100%; 
//   display: flex;
//   justify-content: space-around;
// }
// .recharts-wrapper {
//  float:left;
// }

const circles = [
	{name: '100%', value: 100},
	{name: '100%', value: 100},
	{name: '100%', value: 100},
	{name: '100%', value: 100},
];


export const Circle =  ({circles}) =>{
 
 function renderCircles(circle){
    <PieChart id ={circle.id} width={200} height={200} >
      <Pie data={circle.data} cx={100} cy={100} innerRadius={70} outerRadius={90} fill={circle.fill} />
    </PieChart>
}

 
  return (
    <div id="cirlces">
        {circles.map((circle)=>{renderCircles(circle)})}
    </div>
);
}
