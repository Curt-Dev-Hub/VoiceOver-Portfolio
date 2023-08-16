import React from 'react';
import './VoiceServices.css';
import { Link } from 'react-router-dom';

export default function VoiceServices({ microphone }) {   // pass in microphone image from parent component
    return (
        <div className="servicesWrapper">
            <h3>My Voice Over services include</h3>
            <div className='services-list-wrap'>
                <ul>
                    <li>Animation</li>
                    <li>Character</li>
                    <li>eLearning</li>
                </ul>
                <ul>
                    <li>Explainer Videos</li>
                    <li>YouTube</li>
                    <li>Video Games</li>
                </ul>
                <div className='samples-link'>
                    <img className='samples-image' src={ microphone } title=' Photo by Daniel Robert Dinu unsplash.com ' alt="A microhone on it's stand"></img>
                    <Link to='/voice-demo'>
                        <button type='button'>Listen to some samples</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


  