import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./ReviewStyles.css";
import rating from "../assets/Ratings/Star Ratings.svg";
import { CarouselItem, Row } from "reactstrap";
import MediaQuery from "react-responsive";

const TestFAQ = () => {
  return (
    <>
      <MediaQuery minWidth={992}>
        <div className="reviewCont" id="FAQs">
          <div className="leftRevCont">
            <h1>Frequently Asked Questions:</h1>
          </div>
          <Carousel className="rightRevCont">
            <CarouselItem className="revCarouselItem">
              <h1>Eco-Route bisa di-download dimana?</h1>
              <p>
                Saat ini aplikasi sudah berada di PlayStore, yaitu dengan mengetikkan <a href="https://bit.ly/UnduhEcoRoute">eco route: green journey</a> Aplikasi kami masih membutuhkan <a href="https://bit.ly/FeedBackEcoRoute">feedback</a> agar aplikasi kami mampu berkembang menjadi lebih baik dan mampu untuk mengatasi permasalahan mengenai emisi karbon yang ada di indonesia. 
              </p>
              <div className="reviewProfile">
                <img
                  src={require("../assets/male.jpg")}
                  className="reviewProfilePic"
                />
                <div className="reviewProfileID">
                  <img id="reviewRating" src={rating} />
                  <h2 id="reviewName">M. husein</h2>
                  <h3 id="reviewTitle">Web Programmer</h3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="revCarouselItem">
              <h1>Android atau iOS?</h1>
              <p>
                Sementara ini Eco-Route hanya tersedia pada platform Android ya,
                sobat hijau! Tapi buat sobat-sobat pengguna iOS jangan khawatir,
                kami juga memiliki rencana untuk mengembangkan Eco-Route untuk
                versi iOS juga, jadi pantengin terus ya perjalanan dan update
                dari kami!
              </p>
              <div className="reviewProfile">
                <img
                  src={require("../assets/female.jpg")}
                  className="reviewProfilePic"
                />
                <div className="reviewProfileID">
                  <img id="reviewRating" src={rating} />
                  <h2 id="reviewName">Aisyah</h2>
                  <h3 id="reviewTitle">Designer</h3>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={991.98}>
        <div className="reviewCont" id="FAQs">
          <Row>
            <div className="leftRevCont">
              <h1>What People Say About Us:</h1>
            </div>
          </Row>
          <Row>
            <Carousel className="rightRevCont">
              <CarouselItem className="revCarouselItem">
              <h1>Eco-Route bisa di-download dimana?</h1>
              <p>
                Saat ini aplikasi berada dalam tahap beta testing. Aplikasi
                belum dirilis di PlayStore, namun kami membuka kesempatan bagi
                siapapun yang ingin bergabung dalam program pengujian aplikasi
                kami! Caranya mudah, silakan akses{" "}
                <a href="https://forms.gle/7Z4NHpeEpz8Apdom6">link berikut </a>{" "}
                kemudian isikan biodata anda kemudian tim kami akan mengirimkan
                file .apk melalui email yang anda isikan pada formulir kami.
                Pengujian ini bersifat bebas biaya dan semua data anda hanya
                akan kami gunakan untuk keperluan pengujian aplikasi dan fitur
                pada aplikasi kami.
              </p>
                <div className="reviewProfile">
                  <img
                    src={require("../assets/placeholder.jpg")}
                    className="reviewProfilePic"
                  />
                  <div className="reviewProfileID">
                    <img id="reviewRating" src={rating} />
                    <h2 id="reviewName">Name</h2>
                    <h3 id="reviewTitle">Job Title</h3>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="revCarouselItem">
              <h1>Android atau iOS?</h1>
              <p>
                Sementara ini Eco-Route hanya tersedia pada platform Android ya,
                sobat hijau! Tapi buat sobat-sobat pengguna iOS jangan khawatir,
                kami juga memiliki rencana untuk mengembangkan Eco-Route untuk
                versi iOS juga, jadi pantengin terus ya perjalanan dan update
                dari kami!
              </p>
                <div className="reviewProfile">
                  <img
                    src={require("../assets/placeholder.jpg")}
                    className="reviewProfilePic"
                  />
                  <div className="reviewProfileID">
                    <img id="reviewRating" src={rating} />
                    <h2 id="reviewName">Name</h2>
                    <h3 id="reviewTitle">Job Title</h3>
                  </div>
                </div>
              </CarouselItem>
            </Carousel>
          </Row>
        </div>
      </MediaQuery>
    </>
  );
};

export default TestFAQ;
