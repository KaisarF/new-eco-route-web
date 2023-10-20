import Carousel from 'react-bootstrap/Carousel';
import "./CarouselStyles.css"
import image1 from '../assets/features (1).jpg';
import image2 from '../assets/features (2).jpg';

function FeatureCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <div className='carouselImg'>
        <img src={image1} 
                id="use" 
                alt="image1" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carouselImg'>
          <img src={image2} 
                  id="track" 
                  alt="image2" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FeatureCarousel;