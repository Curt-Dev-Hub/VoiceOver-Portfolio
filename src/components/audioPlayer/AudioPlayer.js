import React, { useEffect, useState } from "react";
import './AudioPlayer.css';
import { v4 as uuidv4 } from 'uuid';

import accent1 from '../../assets/audio/accents/FunkyAccent1.mp3';
import animation1 from '../../assets/audio/animation/Distinguished_Voice.mp3';
import character1 from '../../assets/audio/character/FunZone_CharacterAdvert.mp3';
import character2 from '../../assets/audio/character/Mature Gent_Advert.mp3';
import character3 from '../../assets/audio/character/Surfer_Guy.mp3';
import character4 from '../../assets/audio/character/Evil Character.mp3';
import explainer1 from '../../assets/audio/explainer/Glaucoma_Explainer.mp3';
import narration1 from '../../assets/audio/narration/Youger Audience Narration.mp3';
import Commercial1 from '../../assets/audio/demo-reels/DemoReel-Commercial.mp3';


const audioFiles = [
    {
        id: 1,
        name: 'Animation',
        audioSrc: animation1
    },
    {
        id: 2,
        name: 'Accents',
        audioSrc: accent1
    },
    {
        id: 3,
        name: 'Character',
        audioSrc: [character1,character2,character3,character4]
    },
    {
        id:4,
        name: 'Explainer',
        audioSrc: explainer1
    },
    {
        id:5,
        name: 'Narration',
        audioSrc: narration1
    },
    {
        id:6,
        name: "Demo Reels",
        audioSrc: Commercial1,
        type: "Commercials Reel"
    } 
];


export default function AudioPlayer({style}) {
    
    const [selectedStyle, setSelectedStyle] = useState('Demo Reels');

    useEffect(() => {
        setSelectedStyle(style);
    }, [style]);

    return (
        <div className="audio-wrapper">
            <h3 className="demo-h2">Play audio samples here</h3>

            {/* <div className="media-player-wrap">
                {audioFiles.map((audio) => (
                    audio.name === selectedStyle && ( 
                        Array.isArray(audio.audioSrc) ? 
                            audio.audioSrc.map(e => {
                                <audio key={uuidv4()} controls>
                                    <source src={e} type="audio/mpeg" />    
                                </audio>    
                            })
                            
                        :
                            <audio key={audio.id} controls>
                                <source src={audio.audioSrc} type="audio/mpeg" />    
                            </audio>    
                )))}
            </div> */}
            <div className="media-player-wrap"> 
                {audioFiles.map((audio) => ( 
                    audio.name === selectedStyle && ( Array.isArray(audio.audioSrc) ? 
                    audio.audioSrc.map(e => ( 
                    <> {selectedStyle === "Demo Reels" ? 
                        <label key={uuidv4()} className="audioPlayerLabel">{audio.type}</label> 
                            : null} 
                        <audio key={uuidv4()} controls> <source src={e} type="audio/mpeg" /></audio>
                    </> )) : 
                    <> {selectedStyle ==="Demo Reels" ? 
                        <label key={uuidv4()} className="audioPlayerLabel">{audio.type}</label> : 
                            null} 
                        <audio key={audio.id} controls> <source src={audio.audioSrc} type="audio/mpeg" /></audio>
                    </> )))} 
            </div>
        </div>
    );
    
}

