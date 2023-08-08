import React from 'react';
import './VoiceServices.css';
import Introduction from './Introduction';

export default function VoiceServices({ microphone }) {   // pass in microphone image from parent component
    return (
        <div className="servicesWrapper">
            <Introduction />
            <h3>My Voice Over services include</h3>
            <div className='services-list-wrap'>
                <ul>
                    <li>Animation</li>
                    <li>Character</li>
                    <li>eLearning</li>
                    <li>Animation</li>
                </ul>
                <ul>
                    <li>Explainer Videos</li>
                    <li>YouTube</li>
                    <li>Narration</li>
                    <li>Video Games</li>
                </ul>
                <div className='samples-link'>
                    <img className='samples-image' src={ microphone } title=' Photo by Daniel Robert Dinu unsplash.com ' alt="A microhone on it's stand"></img>
                    <a href="#" className='sample-anchor'>
                        <button type='button'>Listen to some samples</button> 
                    </a>
                </div>
            </div>
        </div>
    );
}


  