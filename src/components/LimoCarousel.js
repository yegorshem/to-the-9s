import React ,{Component} from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

class ThisCarousel extends Component{

  renderImages(){
    const images = [
      {id:1, src:require("../img/limo.jpg")},
      {id:2, src:require("../img/limo2.jpg")},
      {id:3, src:require("../img/limo3.jpg")}
    ];
    console.log(images)
		 return images.map((img)=>{
			 return(
				 <div key={img.id}>
					 <img className="carousel-img" alt="Limos" src={img.src}/>
				 </div>
			 )
	  })
	}
	render(){

		return(
		  <Carousel axis="horizontal">
			 	{this.renderImages()}
	    </Carousel>
		)
	}
}

export default ThisCarousel;
