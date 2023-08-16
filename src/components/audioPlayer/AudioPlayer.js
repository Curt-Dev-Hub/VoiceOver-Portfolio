import React, { useEffect, useState } from "react";
import './AudioPlayer.css';
import nelly from '../../assets/audio/Nelly - Hot in Herre [Radio Edit].mp3';
import alpine from '../../assets/audio/alpine-gasoline_2013-03-11-083744.128.mp3';
import skeelo from '../../assets/audio/Skee-Lo - I Wish.mp3';
import wiley from '../../assets/audio/Wiley - Pies.mp3';


const audioFiles = [
    {
        id: 1,
        name: 'Animation',
        audioSrc: nelly
    },
    {
        id: 2,
        name: 'Character',
        audioSrc: alpine
    },
    {
        id:3,
        name: 'Character',
        audioSrc: skeelo
    },
    {
        id: 4,
        name: 'eLearning',
        audioSrc: wiley,
    }
];


export default function AudioPlayer({style}) {
    
    const [selectedStyle, setSelectedStyle] = useState('Animation');

    useEffect(() => {
        setSelectedStyle(style);
    }, [style]);

    return (
        <div className="audio-wrapper">
            <h3 className="demo-h2">Play audio samples here</h3>

            <div className="media-player-wrap">

                {audioFiles.map((audio) => (
                    audio.name === selectedStyle && ( 
                        <audio key={audio.id} controls>
                            <source src={audio.audioSrc} type="audio/mpeg" />    
                        </audio>
                )))}
                {/* <audio controls>
                    <source src={skeelo} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <audio controls>
                    <source src={wiley} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio> */}
            </div>
        </div>
    );
}