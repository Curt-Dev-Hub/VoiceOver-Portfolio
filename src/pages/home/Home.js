import './Home.css';
import mediumImage from '../../assets/pictures/pexels-moose-photos-1037992.jpg';
import smallImage from '../../assets/pictures/pexels-small-moose-photos-1037992.jpg';
import { useEffect, useState } from 'react';
import VoiceServices from '../../components/VoiceServices';


function Home() {
    // useState to alternate between different picture sizes dependanat on screen width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="wrapper-home">
            <header>
                { windowWidth > 500 ? (
                <img className='headerImage' src={mediumImage} alt='Picture of a set of headphones on a 50 50 split pink and light blue background' />
                ) : (
                <img className='headerImage' src={smallImage} alt='Picture of a set of headphones on a 50 50 split pink and light blue background' />
                )}
                <h1>Curtis King</h1>
                <hr></hr>
                <h2>VOICE OVER ACTOR</h2>
            </header>
            <VoiceServices />
        </div>
    );
}

export default Home;
