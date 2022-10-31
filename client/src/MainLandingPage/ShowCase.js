import { FaPhoneSlash } from "react-icons/fa";
import { FaClock} from "react-icons/fa";
import { FaRocket } from 'react-icons/fa';
import React from 'react'
import Footer from './footer/Footer'
import MainBar from './MainBar/MainBar'

function ShowCase() {
  return (
    <div>
      <>
      <MainBar/>
      <section className='showcase'>
        <div className='showcase-overlay'>
          <h1>Amazing employees deserve amazing software</h1>
          <p>
          The only platform you will ever need to help run your business:
      integrated apps, kept simple, and loved by millions of happy users
          </p>
        </div>
        <div className="body-section">
          <div className="trusted">
            <h3>TRUSTED PARTNERS</h3>
            <div className='logo'>
              <img className='logo-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/1718px-United_Parcel_Service_logo_2014.svg.png"/>
              <img src="https://assets-global.website-files.com/618ac079e7dd392826f282d6/618bbbc3ed9711ebf9fd0683_logo.svg"/>
              <img src='https://cdn.freebiesupply.com/logos/thumbs/1x/dhl-1-logo.png'/>
              <img src="https://cdn.freebiesupply.com/logos/large/2x/fedex-logo-svg-vector.svg"/>
              <img src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/hs_logo_tagline_colour_4c_pos.svg"/>
            </div>
            <div className="why-wrapper">
              <div className='why-section'>
                <h2 className='why-h3'>WHY <element className="why-title">LOCALSHOP</element></h2>
                <p> Manage all your  inventory with ease anytime, anywhere.
                   Create a new store assign roles and sit back and watch it get done.all with a click of a button.Track,manage and assign roles with ease.Trusted by millions of business owners world wide. </p>
              </div>
            </div>
              <div className="action-wrapper">
                <div className="action-card">
                  <h2>  <FaPhoneSlash /></h2>
                  <p>No more calling around and being on hold for long periods of time.</p>
                </div>
                <div className="action-card mid-action">
                  <h2>  <FaClock /></h2>
                  <p>Get your inventory list upto date, listed,ordered and delivered on time.No more hustle </p>
                </div>
                <div className="action-card">
                  <h2>  <FaRocket/></h2>
                  <p>Time is money.More speed equals more money.We Manage your work fast.</p>
                </div>
      
              </div>
              <h1 className="comment-title">Loved by Businesses across the country</h1>
              <div className="comment">
                <div className="comment-1">
                  <p>"Lorem Ipsum is simply dummy dummy text of the printing and typesetting industry  </p>
                  <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196117661-57f87a6f-2155-4328-8b48-fa27d6ec85a2.png"/><h5 className="dp-title">James Njuguna</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," </p>
                <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196118175-d8a7884b-8be5-4b21-be9a-23ed78b187be.png"/><h5 className="dp-title">Andela</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting i Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"</p>
                <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196118387-e3852151-5f7d-4426-8416-f8b679f77e17.png"/><h5 className="dp-title">Tommy</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry", </p>
                <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196118581-24c47276-aecb-43d3-bef1-13c5cfa32371.png"/><h5 className="dp-title">James Njuguna</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been g and typesetting industry. Lorem Ipsum has been" </p>
                <div className="dp"><img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80"/><h5 className="dp-title">Snoop dog cuz</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th" </p>
                <div className="dp"><img src="https://imgk.timesnownews.com/story/66603010_1317351581756321_4675944928644445097_n.jpg"/> <h5 className="dp-title">Snoop Dog</h5></div>
                </div>
              </div>
              <div className="my-footer"><Footer/></div>
          </div>
        </div>
      </section>
      </>
    </div>
  )
}

export default ShowCase
