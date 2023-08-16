import React, { useState } from "react";
import './DemoPage.css';
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

const voiceStyles = ['Animation', 'Character', 'eLearning', 'Explainer Videos', 'YouTube', 'Narration', 'Video Games'];


export default function DemoPage() {
    const [selectedStyle, setSelectedStyle] = useState("Animation"); {/* I think there should be a default style selected here?? */}

    return (
        <div className="demo-wrapper">
            <h2>Hear some of my voice samples</h2>
            <div className="inner-wrapper">
                <div className="buttons-wrapper">
                    <h3 className="demo-h2">Select a style ⬇️</h3>
                        {/* create group of buttons, giving them each a key id and onclick event */}
                        {voiceStyles.map((style, index) => (
                            <button autoFocus={index === 0} className="voice-style-btn" key={style} onClick={() => setSelectedStyle(style)}> {style} </button>
                        ))}
                </div>
                {/* using logical AND operator to conditionally render the AudioPlayer component based on the value of the selectedStyle state. */}
                {selectedStyle && <AudioPlayer style={selectedStyle} />}
            </div>
        </div>
    );    
}