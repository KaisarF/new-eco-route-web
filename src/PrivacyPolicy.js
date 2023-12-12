import Navigation from './components/Navigation'
import Footer from "./components/Footer"
import "./PrivacyPolicy.css"
export default function PrivacyPolicyPages(){
    return(
        <div>
            <Navigation/>
            <div className='maincontent'>
                <h1>Privacy Policy for Eco-Route: Green Journey App</h1>
                <h2>Effective Date: 2023-12-07</h2>
                <h7>
                This Privacy Policy governs the manner in which Green Innovation Indonesia, the developer of the Eco-Route: Green Journey app, collects, uses, maintains, and discloses information collected from users of the mobile application.
                </h7>
                <h3>1. Information Collection and Use</h3>
                <h4>1.1. Personal Information</h4>
                <p>
                Green Innovation Indonesia may collect personally identifiable information, including but not limited to Startup, Sustainable Living, Smart Maps, as required for a better user experience. This information will be used for providing and improving the Service. The app may use third-party services such as Google Play Services and Facebook, and users are encouraged to review the privacy policies of these third-party providers
                </p>
                <h4>1.2. Location Data</h4>
                <p>
                The Eco-Route: Green Journey app collects location data to enable accurate tracking, carbon emissions calculation, and trip prediction features, even when the app is closed or not in use. This location data is used to enhance map accuracy, directions, and improve app features and services.
                </p>

                <h3>2. Data Security</h3>
                <p>
                Green Innovation Indonesia values the trust of users and employs commercially acceptable means to protect Personal Information and location data. Security measures include data encryption, contracts with trusted third-party vendors, and security incident procedures.
                </p>

                <h3>3. Cookies</h3>
                <p>
                The Eco-Route: Green Journey app does not explicitly use "cookies." However, third-party code and libraries may utilize cookies to collect information and enhance their services. Users have the option to accept or refuse these cookies, with the understanding that refusal may limit certain functionalities of the Service.
                </p>

                <h3>4. Service Providers</h3>
                <p>
                Third-party companies and individuals may be employed to facilitate the Service, provide services on behalf of Green Innovation Indonesia, or assist in analyzing how the Service is used. These third parties have access to users' Personal Information but are obligated not to disclose or use it for any other purpose.
                </p>

                <h3>5. Children's Privacy</h3>
                <p>
                The Eco-Route: Green Journey app is not intended for children under the age of 13. Green Innovation Indonesia does not knowingly collect personally identifiable information from children under 13 years of age.
                </p>

                <h3>6. Changes to Privacy Policy</h3>
                <p>
                Green Innovation Indonesia may update this Privacy Policy periodically. Users are advised to review this page for any changes. Notification of changes will be provided by posting the updated Privacy Policy on the app.
                </p>

                <h3>7. Contact Us</h3>
                <p>
                For questions or suggestions regarding this Privacy Policy, users are encouraged to contact Green Innovation Indonesia at ecoroute.apps@gmail.com
                </p>


            </div>


            <Footer/>
        </div>

    )
}