import React from "react";
import { Card, 
        CardBody,
        CardText, 
        CardTitle, 
        CardSubtitle,
        CardGroup, 
        Col,
        Row,
        Button} 
from "reactstrap";
import "./FAQStyles.css";
import review from '../assets/reviews.svg'

const FAQs = () => {
    return(
        <>
        <div className="faqsTitle">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faqsCont">
        <Row tag="div" className="faqrow">    
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                        <CardTitle tag="h5">
                        Penggunaan Aplikasi
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar fitur, konektivitas dan 
                        penggunaan aplikasi secara umum
                        </CardSubtitle>
                        <Button>
                        Baca Selengkapnya...
                        </Button>
                </Card>
            </Col>
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                        <CardTitle tag="h5">
                        Akun dan Privasi
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar pemulihan akun, pengaturan privasi, penggunaan 
                        data pribadi, dsb.
                        </CardSubtitle>
                        <Button>
                        Baca Selengkapnya...
                        </Button>
                </Card>
            </Col>
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                    <CardTitle tag="h5">
                        Langganan Premium
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar pembayaran dan/atau langganan premium.
                        </CardSubtitle>
                        <Button>
                        Baca Selengkapnya...
                        </Button>
                </Card>
            </Col>
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                    <CardTitle tag="h5">
                        Komunitas
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar dukungan komunitas, kolaborasi, dan pengadaan event.
                        </CardSubtitle>
                        <Button>
                        Baca Selengkapnya...
                        </Button>
                </Card>
            </Col>
            </Row>
        </div>
        </>
    )
}

export default FAQs;