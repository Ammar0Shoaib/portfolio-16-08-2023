import React from 'react'

import './Cardb.css';

import facebook from './cardb-img/facebook.jpg';
import twitter from './cardb-img/twitter.jpg';
import insta from './cardb-img/insta.jpg';
import git from './cardb-img/github.jpg';
import google from './cardb-img/google.jpg';


let wml = 'Personal Info';


const dob = 'Birthdate : ';

const dobvalue = '09/13/1996';

const email = 'Email : ';
const emailvalue = 'info@website.com';

const phn = 'Phone : ';
const phnvalue = '+ (123) 456-7890';

const skype = 'Skype : ';
const skpevalue = 'Linux_Mint';

const address = 'Address : ';
const addrvalue = '12345 Fake ST NoWhere AB Country.';


const Cardb = () => {
    return (
        <>
            <div className="Cardb-container">
                <p className='Cardb-container-wml'>{wml}</p>
                <span className="Cardb-container_line"></span>

                <div className="sidebyside1">
                    <p className='sbs-1-p1'>{dob}</p><p className='sbs-1-p'>{dobvalue}</p>
                </div>
                <div className="sidebyside2">
                    <p className='sbs-2-p2'>{email}</p><p className='sbs-2-p'>{emailvalue}</p>
                </div>
                <div className="sidebyside3">
                    <p className='sbs-3-p3'>{phn}</p><p className='sbs-3-p'>{phnvalue}</p>
                </div>
                <div className="sidebyside4">
                    <p className='sbs-4-p4'>{skype}</p><p className='sbs-4-p'>{skpevalue}</p>
                </div>
                <div className="sidebyside5">
                    <p className='sbs-5-p5'>{address}</p><p className='sbs-5-p'>{addrvalue}</p>
                </div>


                <div className="social-icons">

                    <div className="insta">
                        <img className='card-b-social-icons-img-insta' src={insta} alt="insta" />
                    </div>
                    <div className="google">
                        <img className='card-b-social-icons-img-google' src={google} alt="google" />
                    </div>
                    <div className="facebook">
                        <img className='card-b-social-icons-img-facebook' src={facebook} alt="facebook" />
                    </div>
                    <div className="twitter">
                        <img className='card-b-social-icons-img-twitter' src={twitter} alt="twitter" />
                    </div>
                    <div className="github">
                        <img className='card-b-social-icons-img-github' src={git} alt="github" />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Cardb