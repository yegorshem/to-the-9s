import React from 'react'
import LimoCarousel from './LimoCarousel'
import Reviews from './Reviews'

const Home =()=>{
  return(
      <div id="home" className="content">
      	 <LimoCarousel/>

       	<div className="blkText">
        	<p>Do you enjoy driving around in style?  If so, let To The 9's help you create an unforgettable experience for you on that special day.  Let us help you with transportation to special events such as weddings, proms, grad nights, and Quinceañera's.  Scheduling a grand opening? A charity event? Just about any occasion is a great time for classy transportation. If you are planning a special occasion, meeting, or event, then only the finest in luxury transportation will do.</p>
      	</div>
      	<div className="blkCircles">
      	<div className="circle"><p>Starting At $109</p></div> <div className="circle"><p>No Hidden Costs</p></div> <div className="circle"><p>10 Passenger</p></div>
      	</div>
        <Reviews/>
      </div>
  )

}
export default Home;
