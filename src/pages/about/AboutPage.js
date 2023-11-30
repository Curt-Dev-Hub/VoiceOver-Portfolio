import Introduction from "../../components/Introduction";
import './AboutPage.css';
import animeMe from "../../assets/pictures/Smart Picture - Edit.jpg";


export default function AboutPage() {
    return (
        <div className="aboutWrapper">
            <Introduction />
            <img src={ animeMe } alt="Cartoon version of me" className="anime_image"></img>
            {/* container for main about component elements */}
            <div className="inner-container">
                <h3>A Bit About My Background</h3>
                <p className="about-paragraph-main"> 
                Looking ahead to a thrilling new chapter in my journey, I'm delighted to introduce myself as a budding 
                freelance voice actor through this website.<br></br><br></br>
                
                For me, this mainly began when joking around with friends or family doing various 
                character impersonations, as I matured this continued and I developed a mix of different 
                accents through meeting people from many different regions and walks of life. <br></br>
                
                While my professional background may not include commercial or public experiences 
                in voice acting, my passion for this art has essentially been an integral part of 
                my life in more personal spheres. <br></br>
                As I transition this passion into a professional endeavour, I'm excited to apply 
                the knowledge and enthusiasm I've accumulated to help you realise your creative vision. 
                Collaborating with you to craft captivating and immersive voice-overs would not only 
                be a privilege but a fulfilment of a lifelong aspiration.<br></br><br></br>
                
                The uncharted territory ahead excites me, as I eagerly embrace the opportunity to 
                learn, grow, and collaborate with you on projects that deserve nothing less than the magic of a 
                dedicated voice.

                </p>
            </div>
        </div>
    )
}