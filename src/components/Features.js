import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./FeaturesStyles.css"

const Features = () => {
    return(
        <>
    <Carousel className="topcarousel">
      <Carousel.Item className='carouselitem' id='item1'>
        <Carousel.Caption>
          <h1>Smart Tracking and Eco-Friendly Route Suggestion</h1>
          <h6>Eco-Route memanfaatkan algoritma canggih Machine 
            Learning untuk menemukan rute perjalanan terbaik, 
            bukan hanya efisiensi waktu, tetapi juga dengan jejak 
            karbon minimal. Dengan memanfaatkan real-time tracking, 
            Eco-Route dapat memberikan analisis kondisi lalu 
            lintas dan menyarankan rute alternatif yang ramah 
            lingkungan, mengurangi emisi karbon, dan menghemat 
            waktu perjalanan. </h6>
            <a href="/FeaturesPage">
                <Button variant='success'>Read More</Button>
            </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselitem' id='item2'>
        <Carousel.Caption>
          <h1>AI Powered Emission Calculation </h1>
          <h6>Eco-Route menggunakan teknologi Artificial Intelligence 
            yang memungkinkan untuk menghitung jumlah emisi 
            yang dikeluarkan oleh kendaraan bermotor secara 
            akurat. Eco-Route menyediakan informasi tepat tentang 
            jejak karbon dari setiap perjalanan, memberikan 
            wawasan mendalam tentang dampak terhadap lingkungan 
            dari aktivitas transportasi, juga memberikan kesadaran 
            bagi pengguna tentang kontribusi bijak mereka terhadap 
            perlindungan lingkungan.</h6>
            <a href="/FeaturesPage">
                <Button variant='success'>Read More</Button>
            </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}

export default Features;