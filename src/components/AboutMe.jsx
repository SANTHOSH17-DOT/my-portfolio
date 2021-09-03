import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css'
function AboutMe() {
    const text = "Hi! I'm Santhosh";
    const [tags, setTags] = useState('');
    var [i, setI] = useState(1);
    var typeInterval;
    const type = () => {
        typeInterval = !typeInterval && setInterval(() => {
            console.log(i);
            setI(j => j + 1);
        }, 100)
        if (i === text.length) {
            setTimeout(() => {
                setTags('Learner | Human | Friend')
            }, 500)
            clearInterval(typeInterval);
        }
    }
    useEffect(() => {
        type();
        return () => clearInterval(typeInterval);
    }, [i])
    // function sound(src){
    //     this.element = 
    // }
    return (
        <div className='aboutme'>
            <div className='mySelf '>
                <div className="image-container">
                    <img src="myphoto1.jpg" className='myPhoto' alt="SANTHOSH" />
                </div>
                <div className="tag-container">

                    <h1 id='name-intro'>
                        {text.slice(0, i)}
                    </h1>
                    <h3 id='tags'>
                        {tags}
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
