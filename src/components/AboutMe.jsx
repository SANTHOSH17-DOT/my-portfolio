import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css'
function AboutMe() {
    const typeSound = new Sound('keyStroke.wav')
    const [tags, setTags] = useState('');
    const [typeText, setText] = useState("Hi! I'm Santhosh");
    var [i, setI] = useState(1);
    const [typeInterval, setTypeInterval] = useState(setInterval(() => {

        // typeSound.play();
        setI(i + 1);
        i += 1;
        if (i === text.length) {
            setTimeout(() => {
                setTags('Learner | Human | Friend')

            }, 500)
            clearInterval(typeInterval);
        }
    }, 100))

    // function Sound(src){
    //     this.element = document.createElement('audio');
    //     this.element.src= src;
    //     this.element.setAttribute("preload","auto");
    //     this.element.setAttribute("controls","none")
    //     this.element.style.display = 'none';
    //     document.body.appendChild(this.element);
    //     this.play = ()=>{
    //         this.element.play();
    //     }
    //     this.stop = ()=>{
    //         this.element.pause();
    //     }
    // }

    const text = "Hi! I'm Santhosh";
    return (
        <div className='aboutme'>
            <div class='row'>
                <div className="col-6 image-container">
                    <img src="myphoto.jpg" className='myPhoto' alt="SANTHOSH" />
                </div>
                <div className="col-6 tag-container">

                    <h1 id='name-intro'>
                        {typeText.slice(0, i)}
                    </h1>
                    <h3 id='tags'>{tags}</h3>
                </div>
            </div>
            <div className="arrows">
                <Link to='/works'><i class="fas fa-chevron-right aboutMeR"></i></Link>


            </div>
        </div>

    )
}

export default AboutMe
