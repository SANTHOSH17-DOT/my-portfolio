import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div class='container-fluid px-5 py-2' id='footer'>
            <div className="row">
                <div className="col-8 ">
                    <h5 className='fs-6 mt-2'>
                        Follow me 
                    </h5>
                    <div id='medias'>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-github-square"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-4  text-end" id='by'>
                    <h3>By</h3>
                    <i class="fab fa-stripe-s"></i>anthosh
                </div>
            </div>

        </div>
    )
}

export default Footer
