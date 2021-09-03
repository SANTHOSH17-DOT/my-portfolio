import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='container-fluid' id='footer'>

            <div>
                <h5>
                    Follow me
                </h5>
                <div id='medias'>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github-square"></i>
                    <i className="fab fa-linkedin-in"></i>
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
