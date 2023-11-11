import React from 'react'
import {Col, Row} from 'reactstrap'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footerCont'>
        <footer>
          <div className='footerRow' >
          <div
          className='footerCol'>
            <div className='footerDivLeft'>
              <h3>ReduSave</h3>
              <h6>App by <a href="https://www.linkedin.com/in/eco-route/" class="text-dark fw-bold" >Eco-route</a></h6>
            </div>
          </div>
          <div
          className='footerCol'>
            <div className='footerDivMid'>
              <h3>Site Links</h3>
              <h6>News and Notices</h6>
              <h6>App Features</h6>
              <h6>User Reviews</h6>
              <h6>Frequently Asked Questions</h6>
            </div>
          </div>
          <div
          className='footerCol'>
            <div className='footerDivRight'>
              <h3>Contacts</h3>
              <h6> Email </h6>
              <h6> Whatsapp </h6>
              <h6> LinkedIn </h6>
              <h6> Instagram </h6>
              <h6> Twitter </h6>
            </div>
          </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer