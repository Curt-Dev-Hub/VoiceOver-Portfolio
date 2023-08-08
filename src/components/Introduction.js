import React from "react";
import './Introduction.css';




export default function Introduction() {
    return (
        <div className="intro-wrap">
            <h3>Meet Your Voice Actor</h3> {/* styled by parent component */}
            <p className="intro-paragraph">Hi there, welcome to my voice acting website! 
                I'm a freelance voice actor who can provide 
                you with high-quality and professional voice-overs for any project. 
                Whether you need a narrator for your audiobook, a character for your 
                video game, or a spokesperson for your commercial, I can deliver 
                the perfect voice for you. I have a versatile range of vocal styles, 
                tones, and accents that can suit any genre and mood. 
                You can listen to some of my samples below and see for yourself how 
                I can bring your script to life. If you like what you hear, feel free 
                to contact me and we can discuss your project in detail. I'm looking 
                forward to working with you and making your vision a reality!
            </p>
        </div>
    )
}