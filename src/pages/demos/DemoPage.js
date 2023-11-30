import React, { useState } from "react";
import './DemoPage.css';
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

// const voiceStyles = ['Animation', 'Character', 'eLearning', 'Explainer', 'Accents', 'Narration', 'Video_Game'];


// export default function DemoPage() {
//     const [selectedStyle, setSelectedStyle] = useState("Animation");

//     return (
//         <div className="demo-wrapper">
//             <h2>Hear some of my voice samples</h2>
//             <div className="inner-wrapper">
//                 <div className="buttons-wrapper">
//                     <h3 className="demo-h2">Select a style ⬇️</h3>
//                         {/* create group of buttons, giving them each a key id and onclick event */}
//                         {voiceStyles.map((style, index) => (
//                             <button autoFocus={index === 0} className="voice-style-btn" key={style} onClick={() => setSelectedStyle(style)}> {style} </button>
//                         ))}
//                 </div>
//                 {/* using logical AND operator to conditionally render the AudioPlayer component based on the value of the selectedStyle state. */}
//                 {selectedStyle && <AudioPlayer style={selectedStyle} />}
//             </div>
//         </div>
//     );    
// }


// 'Video Game' 'eLearning' - Removed Temporarily 

const voiceStyles = ['Demo Reels', 'Animation', 'Character', 'Explainer', 'Accents', 'Narration'];

export default function DemoPage() {
    const [selectedStyle, setSelectedStyle] = useState("Demo Reels");

    const handleClick = (style) => {
        setSelectedStyle(style);
        if (window.innerWidth < 632) {
            const audioWrapper = document.querySelector('.audio-wrapper');
            if (audioWrapper) {
                window.scrollTo({
                    top: audioWrapper.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="demo-wrapper">
            <h2>Hear some of my voice samples</h2>
            <div className="inner-wrapper">
                <div className="buttons-wrapper">
                    <h3 className="demo-h2">Select a style ⬇️</h3>
                    {voiceStyles.map((style, index) => (
                        <button autoFocus={index === 0} className="voice-style-btn" key={style} onClick={() => handleClick(style)}> {style} </button>
                    ))}
                </div>
                {selectedStyle && <AudioPlayer style={selectedStyle} />}
            </div>
        </div>
    );    
}
