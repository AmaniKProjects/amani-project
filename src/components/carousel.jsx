import React, { Component } from "react";
import Slider from "react-slick";


function Carousel(){
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 300,
    vertical: false,
    verticalSwiping: false,
    adaptiveHeight: true,
    variableWidth:true,
    focusOnSelect: true,
    touchMove:true,
  };

  // function for getting paths of images in Assets folder (avoids multiple imports)
  // keep image names in the format "/akf-gal-[0-9]+\.(png|jpe?g|svg)$/"
  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../assets', false, /akf-gal-[0-9]+\.(png|jpe?g|svg)$/));
   const imageList = []
   Object.keys(images).forEach(imgUrl => {
    imageList.push(
      <div className=" p-10 md:p-4" key={imgUrl}>
        <img className=" rounded-lg" style={{height:'250px'}} src={images[imgUrl]}></img>
      </div>
    )
   })


    return (
      <div>
        <hr className=" w-full self-center border-yellow-200" />
        <br/>
        <Slider {...settings}>
          {imageList}
        </Slider>
        <br/>
        <hr className=" w-full self-center border-yellow-200" />
      </div>
    );
  }
  export default Carousel;