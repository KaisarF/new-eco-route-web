import React from "react";
import "./FAQPage.css";
import star from "../assets/Ratings/Star Ratings.svg"

// react slick
import Slider from "react-slick";

const FAQPage =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true, 
        autoplaySpeed:3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
              dots: false
            }
          }
        ]
      };
    return(
        <div className="FAQPage">
            <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
            <div>
                <div className="FAQContent">
                    <h1>Frequently Asked Questions</h1>
                    <p> FAQs help users gain a better understanding of the application and respond to informational needs that commonly arise from those who are new to or currently using the service</p>
                    </div>
                    <div className="cardContainer">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="reviewCard">
                            <h2>{d.question}</h2>
                            <p>{d.answer}</p>
                                <div>
                                    <img src={star}/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                        
                    </div>
            </div>
        </div>
    )
}


const data=[
    {
        "question": "Apakah Eco-Route Bisa Digunakan di Semua Kota?",
        "answer": "Eco-Route mendukung sebagian besar kota besar di seluruh dunia. Kami terus memperluas cakupan untuk memastikan pengalaman terbaik di mana pun Anda berada.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Apakah Saya Perlu Terkoneksi ke Internet untuk Menggunakan Eco-Route?",
        "answer": "Ya, untuk menghitung rute dan mengakses data terbaru tentang lalu lintas dan cuaca, Eco-Route memerlukan koneksi internet. Namun, beberapa fitur bisa digunakan secara offline.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Bagaimana Eco-Route Menentukan Rute Terbaik?",
        "answer": "Eco-Route menggunakan algoritma cerdas yang mempertimbangkan faktor seperti kondisi lalu lintas, topografi, dan emisi karbon untuk menentukan rute paling ramah lingkungan.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Apakah Aplikasi Ini Bisa Digunakan untuk Berjalan Kaki atau Bersepeda?",
        "answer": "Ya, Eco-Route mendukung berbagai mode transportasi termasuk berjalan kaki dan bersepeda. Ini membantu mengurangi emisi karbon secara keseluruhan.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Bagaimana Cara Mengintegrasikan Aplikasi Ini dengan Sistem Navigasi Kendaraan Saya?",
        "answer": "Eco-Route dapat dihubungkan dengan beberapa sistem navigasi kendaraan pintar melalui Bluetooth atau integrasi aplikasi pihak ketiga.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Apakah Eco-Route Memberikan Saran untuk Mengurangi Emisi?",
        "answer": "Ya, selain menyediakan rute ramah lingkungan, Eco-Route juga memberikan tips tentang gaya mengemudi yang bisa membantu mengurangi emisi, seperti menjaga kecepatan yang stabil dan meminimalkan pengereman mendadak.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Apakah Eco-Route Menyimpan Riwayat Perjalanan Saya?",
        "answer": "Ya, Anda bisa melihat riwayat perjalanan Anda dan memantau total penghematan emisi karbon dari setiap perjalanan yang Anda lakukan menggunakan Eco-Route.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Bagaimana Cara Menjaga Privasi Data Saya?",
        "answer": "Eco-Route berkomitmen untuk menjaga privasi data pengguna. Informasi perjalanan dan kendaraan Anda disimpan secara aman sesuai dengan standar privasi data internasional.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Bisakah Eco-Route Membantu Saya Merencanakan Perjalanan Jarak Jauh?",
        "answer": "Ya, Eco-Route sangat ideal untuk perencanaan perjalanan jarak jauh dengan memberikan rute optimal yang meminimalkan emisi karbon sepanjang perjalanan Anda.",
        "star": "../assets/Ratings/Star Ratings.svg"
    },
    {
        "question": "Apakah Ada Dukungan Pelanggan Jika Saya Mengalami Masalah?",
        "answer": "Tentu, tim dukungan pelanggan Eco-Route siap membantu Anda 24/7 melalui email atau chat langsung di aplikasi.",
        "star": "../assets/Ratings/Star Ratings.svg"
    }
    
]

export default FAQPage;