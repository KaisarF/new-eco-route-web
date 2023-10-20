import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/eco-route-cover.jpeg';

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={image1} 
                className="logo" 
                width="100%"
                height="auto"
                alt="image1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image1} 
                className="logo" 
                width="100%"
                height="auto"
                alt="image1" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image1} 
                className="logo" 
                width="100%"
                height="auto"
                alt="image1" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;