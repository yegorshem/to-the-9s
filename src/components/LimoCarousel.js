import React, {Component} from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const imgs=[
    {
        src:"../img/limo.jpg/",
        title:"Limo"
    },
    {
        src:"../img/limo2.jpg/",
        title:"Limo 2"    
    },
    {
        src:"../img/limo3.jpg/",
        title:"Wedding Limo"
    },
];
export default class LimoCarousel extends Component{
    renderImages(){
        return this.imgs.map((img)=>{ 
            return <img id={img.title} src={img.src} alt={img.title}/> 
        })
    }
    
    render(){
        return (
            <Carousel axis="horizontal">
                {this.renderImages}
            </Carousel>
        )
    }
}
 