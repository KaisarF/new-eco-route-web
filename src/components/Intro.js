import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./IntroStyles.css";
import direction from '../assets/directions.svg'
import forest from '../assets/forest.svg'

const Intro = () => {
    return(
        <>
        <Container fluid = "true" className = "introCont">
            <Row>
                <Col
                xs="6">
                    <img className="direction"
                    src={ direction } 
                    alt="direction"
                    />    
                </Col>
                <Col
                className="introText"
                xs="6">
                    <h1>Apa sih 'ReduSave' itu?</h1>
                    <p>
                        Eco-Route merupakan aplikasi yang 
                        secara efektif dapat menentukan rute 
                        perjalanan terbaik dengan mempertimbangkan 
                        efisiensi waktu dan prinsip jejak karbon 
                        minimal. Eco-Route menyediakan informasi 
                        akumulasi jejak karbon dari setiap perjalanan 
                        transportasi, sehingga dapat mengurangi 
                        kontribusi jejak karbon dari setiap perjalanan.
                    </p>
                </Col>
            </Row>
            <Row> 
                <Col className="carbonText"
                xs="6">
                    <h1>Memangnya</h1>
                    <h1>ada apa dengan karbon?</h1>
                    <p>
                        Emisi karbon merupakan gas yang dilepaskan ke atmosfer 
                        dari hasil pembakaran senyawa yang 
                        mengandung karbon, seperti pembakaran 
                        bahan bakar fosil. Sektor transportasi 
                        sebagai salah satu sektor pengguna energi 
                        fosil menjadi kontributor terbesar 
                        penghasil emisi karbon. Sektor ini 
                        diproyeksikan dapat meningkatkan kadar 
                        CO2 di atmosfer yang berimbas pada 
                        ketidakseimbangan alam jika tidak segera 
                        ditindaklanjuti.</p>
                    <p className="source">(source: <a href="#">ourworldindata.org</a>)</p>
                </Col>    
                <Col
                xs="6">
                    <img className="forest"
                    src={ forest } 
                    alt="forest"
                    />    
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Intro;