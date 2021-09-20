import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css'
function AboutMe() {
    const myPhotoSRC = 'myphoto1.jpg';
    const text = "Hi! I'm Santhosh";
    const [tags, setTags] = useState([]);
    var [i, setI] = useState(1);
    var typeInterval;
    const type = () => {
        typeInterval = !typeInterval && setInterval(() => {
            console.log(i);
            setI(j => j + 1);
        }, 100)
        if (i === text.length) {
            setTimeout(() => {
                setTags(['Learner', 'Tech-Enthusiast', 'Explorer', '|'])
            }, 500)
            clearInterval(typeInterval);
        }
    }
    useEffect(() => {
        type();
        return () => clearInterval(typeInterval);
    }, [i])

    return (
        <div className='aboutme'>
            <div className='mySelf '>
                <div className="image-container">
                    <img src={myPhotoSRC} loading='lazy'className='myPhoto' alt="SANTHOSH" />
                </div>
                <div className="tag-container">

                    <h1 id='name-intro'>
                        {text.slice(0, i)}
                    </h1>
                    <h3 id='tags'>
                        <span className='tag'>{tags[0]}</span>
                        <span> {tags[3]} </span>
                        <span className='tag'>{tags[1]}</span>
                        <span> {tags[3]} </span>
                        <span className='tag'>{tags[2]}</span>
                    </h3>
                </div>
            </div>
            <div className="arrows">
                <Link to='/works'><i className="fas fa-chevron-right aboutMeR" ></i></Link>


            </div>
        </div>

    )
}

export default AboutMe
