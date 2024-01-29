import React from "react";
import Navigation from './components/Navigation'
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQs from "./components/FAQs";
import "./faqPageStyles.css"
import CallToAction from "./components/CallToAction";


const FAQPage = () => {
    return(
        <div> 

            <Navigation/>
            <FAQs/>
            <hr></hr>
            <h1 className="faqPageTitle">Frequently Asked Questions</h1>
            <hr></hr>
            <div className="faqPageCont">
            <h2>Penggunaan Aplikasi</h2>
            <ul>
                <li>
                    <h6>Bagaimana cara saya menggunakan aplikasi ini?</h6>
                    <p>
                    Saat ini aplikasi berada dalam tahap beta testing. 
                    Aplikasi belum dirilis di PlayStore, namun kami membuka 
                    kesempatan bagi siapapun yang ingin bergabung dalam program 
                    pengujian aplikasi kami! Caranya mudah, silakan akses <a>link 
                    berikut </a> kemudian isikan biodata anda kemudian tim kami 
                    akan mengirimkan file .apk melalui email yang anda isikan pada 
                    formulir kami. Pengujian ini bersifat bebas biaya dan semua data 
                    anda hanya akan kami gunakan untuk keperluan pengujian aplikasi dan 
                    fitur pada aplikasi kami.
                    </p>
                </li>
                <li>
                    <h6>Bagaimana cara saya mengganti kendaraan pribadi yang saya daftarkan dalam aplikasi?</h6>
                    <p>
                    Daftar kendaraan pengguna dapat diakses melalui menu dalam pengaturan... lorem ipsum dolor sit amet
                    </p>
                </li>
            </ul>
            <h2>Akun dan Privasi</h2>
            <ul>
                <li>
                    <h6>bagaimana cara mendaftarkan akun</h6>
                    <p>
                    Untuk membuat akun, Anda memiliki opsi untuk melakukan pendaftaran melalui layanan Google atau mendaftarkan diri menggunakan alamat email.
                    </p>
                </li>
                <li>
                    <h6>bagaimana jika saya lupa password</h6>
                    <p>
                    Apabila Anda mengalami lupa password, kami menyediakan fasilitas dengan tombol "lupa password". Setelahnya, sistem kami akan mengirimkan email verifikasi yang memungkinkan Anda untuk mengonfirmasi identitas dan melanjutkan proses pengubahan password sesuai dengan preferensi Anda.
                    </p>
                </li>
                
            </ul>
            <h2>Komunitas</h2>
            <ul>
                <li>
                    <h6>Pertanyaan 1</h6>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim cum nulla nisi maiores adipisci labore alias. 
                    Tenetur reiciendis laudantium aliquam consequatur sit 
                    dolorem ex laborum animi ipsa? Id, facilis placeat?
                    </p>
                </li>
                <li>
                    <h6>Pertanyaan 2</h6>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim cum nulla nisi maiores adipisci labore alias. 
                    Tenetur reiciendis laudantium aliquam consequatur sit 
                    dolorem ex laborum animi ipsa? Id, facilis placeat?
                    </p>
                </li>
                <li>
                    <h6>Pertanyaan 3</h6>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim cum nulla nisi maiores adipisci labore alias. 
                    Tenetur reiciendis laudantium aliquam consequatur sit 
                    dolorem ex laborum animi ipsa? Id, facilis placeat?
                    </p>
                </li>
            </ul>
            <h2>Lainnya</h2>
            <ul>
                <li>
                    <h6>Pertanyaan 1</h6>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim cum nulla nisi maiores adipisci labore alias. 
                    Tenetur reiciendis laudantium aliquam consequatur sit 
                    dolorem ex laborum animi ipsa? Id, facilis placeat?
                    </p>
                </li>
                <li>
                    <h6>Pertanyaan 2</h6>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim cum nulla nisi maiores adipisci labore alias. 
                    Tenetur reiciendis laudantium aliquam consequatur sit 
                    dolorem ex laborum animi ipsa? Id, facilis placeat?
                    </p>
                </li>
                <li>
                    <h6>Pertanyaan 3</h6>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim cum nulla nisi maiores adipisci labore alias. 
                    Tenetur reiciendis laudantium aliquam consequatur sit 
                    dolorem ex laborum animi ipsa? Id, facilis placeat?
                    </p>
                </li>
            </ul>
            </div>
            <CallToAction/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6DCE8B" fill-opacity="1" d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,192C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <Footer/>

        </div>
    );
}

export default FAQPage;