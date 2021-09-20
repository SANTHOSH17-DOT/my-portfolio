import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className='container-fluid' id='footer'>

            <div>
                <h5>
                    Contact
                </h5>
                <div id='medias'>
                    <a href='https://www.instagram.com/s_anthos_h_m/'target='_blank'rel="noreferrer"><i className="fab fa-instagram links"></i></a>
                    <a href='https://github.com/SANTHOSH17-DOT/'target='_blank'rel="noreferrer"><i className="fab fa-github-square links"></i></a>
                    <a href='https://www.linkedin.com/in/santhosh-m-041689217/'target='_blank'rel="noreferrer"><i className="fab fa-linkedin-in links"></i></a>
                </div>
            </div>
            <div id='by'>
                <h3>By</h3>
                <p><i className="fab fa-stripe-s"></i> anthosh</p>
            </div>
        </div>


    )
}

export default Footer
