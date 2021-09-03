import React from 'react'
import './RecentWorks.css'
import { Link } from 'react-router-dom'
function RecentWorks() {
    const imgArr = [
        {
            src: 'Auction.png',
            title: 'Auction-Ancient Relics',
            desc: 'A site where one can sell their product on auction and bid',
            link: ''
        },
        {
            src: 'colorTiles.png',
            title: 'Color Tiles',
            desc: 'A game which baffles your mind',
            link: ''
        },
        {
            src: 'piano.png',
            title: 'Piano',
            desc: 'Virtual piano',
            link: ''
        },
        {
            src: 'schedulePlanner.png',
            title: 'Schedule Planner',
            desc: 'Schedule planner to make your life easier',
            link: ''
        },
        {
            src: 'scientificCalculator.png',
            title: 'Scientific Calculator',
            desc: 'Scientific calculator',
            link: ''
        }
        , {
            src: 'screenRecord.png',
            title: 'Screen Recorder',
            desc: 'It is a screen recorder with video downloading and screenshot options',
            link: ''
        },
        {
            src: 'spaceInvader.png',
            title: 'Space Invader',
            desc: 'A game which gives you thrilling space adventure',
            link: ''
        },
        {
            src: 'spaceRunner.png',
            title: 'Pro Runner',
            desc: 'A game which test your reflex',
            link: ''
        }]
    return (
        <div id='recentWorks'>
            <div id='titleW'>
                My Recent Works
            </div>
            <div className="row imgs-container">
                {imgArr.map(img => (
                    <div key={img.src} className="col-5 col-lg-3 img-container">
                        <img src={img.src} className="card-img-top" alt=" " />
                        <div className="card-body">
                            <h5 className="card-title"><b>{img.title}</b></h5>
                            <p className="card-text">{img.desc}</p>
                            <a href={img.link} className="btn view-btn">View</a>
                        </div>
                    </div>
                ))}


            </div>
            <div className='arrowsW'>
                <Link to='/'><i className="fas fa-chevron-left workL"></i></Link>


            </div>
        </div>
    )
}

export default RecentWorks
