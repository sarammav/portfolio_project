import React from "react";
import author from "../me.jpg";
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap" mb-5>
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                    Hello! My name is Sara. I am a nature lover. 
                    This website is about my nature related stories.
                    I have a travel vlog and I usually post videos about my nature related travels.
                    I love to be with nature. I also love gardening. I have collection of both indoor as well as outdoor plants. 

                    </p>
                </div>
            </div>

            
        </div>
    )
}

export default AboutMe
