import React from "react";
import "./FAQPage.css";
import star from "../assets/Ratings/Star Ratings.svg"

const FAQPage =()=>{
    return(
        <div className="FAQPage">
            <div>
                <div className="FAQContent">
                    <h1>Frequently Asked Questions</h1>
                    <p> FAQs help users gain a better understanding of the application and respond to informational needs that commonly arise from those who are new to or currently using the service</p>
                    </div>
                    <div className="cardContainer">
                        <div className="reviewCard">
                        <h2>Apa itu Eco-Route?</h2>
                        <p>Eco-Route adalah aplikasi inovatif yang membantu pengguna merencanakan perjalanan dengan memprioritaskan rute ramah lingkungan dan mengurangi emisi karbon.</p>
                            <div>
                                <img src={star}/>
                            </div>
                        </div>
                        <div className="reviewCard">
                            <div>
                                <h2>Bagaimana Cara Menggunakan Aplikasi?</h2>
                                <p>Unduh aplikasi dari Play Store atau App Store, buat akun, masukkan informasi kendaraan Anda, dan mulailah menikmati perjalanan hijau dengan rute minimal emisi.</p>
                            </div>

                            <div>
                                <img src={star}/>
                            </div>
                        </div>
                        <div className="reviewCard">
                        <h2>Apa Keuntungan Bergabung dengan Komunitas Eco-Route?</h2>
                        <p>Memungkinkan Anda berbagi pengalaman, mendapatkan tips perjalanan hijau, dan mendukung upaya kolektif dalam mengurangi emisi karbon.</p>
                            <div>
                                <img src={star}/>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default FAQPage;