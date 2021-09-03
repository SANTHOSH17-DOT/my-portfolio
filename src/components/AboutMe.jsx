import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css'
function AboutMe() {
    const text = "Hi! I'm Santhosh";
    const [tags, setTags] = useState('');
    const [typeText] = useState("Hi! I'm Santhosh");
    var [i, setI] = useState(1);
    // while (i < text.length) {
    //     setTimeout(() => {
    //         setI(i + 1);
    //         console.log(i);
    //     }, 100)
    //     if (i === text.length - 1) {
    //         setTimeout(() => {
    //             setTags('Learner | Human | Friend')

    //         }, 500)
    //     }
    // }


    // var typeInterval =setInterval(() => {

    //     setI(i+1);
    //     if (i === text.length) {
    //         setTimeout(() => {
    //             setTags('Learner | Human | Friend')

    //         }, 500)
    //         clearInterval(typeInterval);
    //     }
    // }, 100)




    return (
        <div className='aboutme'>
            <div className='mySelf '>
                <div className="image-container">
                    <img src="myphoto1.jpg" className='myPhoto' alt="SANTHOSH" />
                </div>
                <div className="tag-container">

                    <h1 id='name-intro'>
                        {typeText}
                    </h1>
                    <h3 id='tags'>
                        {/* {tags} */}
                        Learner | Human | Friend</h3>
                </div>
            </div>
            <div className="arrows">
                <Link to='/works'><i className="fas fa-chevron-right aboutMeR" ></i></Link>


            </div>
        </div>

    )
}

export default AboutMe
