import Carousel from "react-bootstrap/esm/Carousel";
import React from 'react'

export default function Corousal() {
    return (
        <div>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="image1"
      src="https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="image2"
      src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image3"
      src="https://images.idgesg.net/images/article/2020/07/stack_of_books_one_open_scattering_flying_letters_language_reading_education_dictionary_by_domin_domin_gettyimages-157719194_abstract_binary_by_aleksei_derin_gettyimages-914850254_cso_2400x1600-100853104-large.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel> 
        </div>
    )
}

