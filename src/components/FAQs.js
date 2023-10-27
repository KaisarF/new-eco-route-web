import React from "react";
import { Card, 
        CardBody,
        CardText, 
        CardImg,
        CardTitle, 
        CardSubtitle,
        CardFooter, 
        Col,
        Row,
        Button} 
from "reactstrap";
import "./FAQStyles.css";
import komunitas from '../assets/community.png'
import langganan from '../assets/payment.png'
import privasi from '../assets/privacy.png'
import penggunaan from '../assets/penggunaan.png'
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
                        <CardImg
                            alt="Penggunaan Aplikasi"
                            src={penggunaan}
                            top
                            width="100%"/>
                        <CardTitle tag="h5">
                        Penggunaan Aplikasi
                        </CardTitle>
                        <CardSubtitle className="faqsubtitle mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar fitur, konektivitas dan 
                        penggunaan aplikasi secara umum
                        </CardSubtitle>
                </Card>
                <CardFooter>
                            <Button className="faqbutton align-self-end">
                                Baca Selengkapnya...
                            </Button>
                </CardFooter>
            </Col>
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                        <CardImg
                            alt="Akun dan Privasi"
                            src={privasi}
                            top
                            width="100%"/>
                        <CardTitle tag="h5">
                        Akun dan Privasi
                        </CardTitle>
                        <CardSubtitle className="faqsubtitle mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar pemulihan akun, pengaturan privasi, penggunaan 
                        data pribadi, dsb.
                        </CardSubtitle>
                </Card>
                <CardFooter>
                            <Button className="faqbutton align-self-end">
                                Baca Selengkapnya...
                            </Button>
                </CardFooter>
            </Col>
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                    <CardImg
                            alt="Langganan Premium"
                            src={langganan}
                            top
                            width="100%"/>
                    <CardTitle tag="h5">
                        Langganan Premium
                        </CardTitle>
                        <CardSubtitle className="faqsubtitle mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar pembayaran dan/atau langganan premium.
                        </CardSubtitle>
                </Card>
                <CardFooter>
                            <Button className="faqbutton align-self-end">
                                Baca Selengkapnya...
                            </Button>
                </CardFooter>
            </Col>
            <Col sm="3">
                <Card body className="faqCard" tag="div">
                    <CardImg
                            alt="Komunitas"
                            src={komunitas}
                            top
                            width="100%"/>
                    <CardTitle tag="h5">
                        Komunitas
                        </CardTitle>
                        <CardSubtitle className="faqsubtitle mb-2 text-muted"
                                    tag="h6">
                        Bantuan seputar dukungan komunitas, kolaborasi, dan pengadaan event.
                        </CardSubtitle>
                </Card>
                <CardFooter>
                            <Button className="faqbutton align-self-end">
                                Baca Selengkapnya...
                            </Button>
                </CardFooter>
            </Col>
            </Row>
        </div>
        </>
    )
}

export default FAQs;