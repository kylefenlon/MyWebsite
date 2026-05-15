import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ProfilePhoto from '../images/Profile-photo.png'
import DadGolf from '../images/Dad-Golf.png'
import SnowyMunro from '../images/Snowy-Munro.png'
import SunnyMunro from '../images/Sunny-Munro.png'
import TechTalk from '../images/Tech-Talk.png'
import '../CSS/About.css'

const galleryImages = [
    { src: DadGolf, alt: 'Kyle golfing with his dad' },
    { src: SnowyMunro, alt: 'Hiking a snowy Scottish munro' },
    { src: SunnyMunro, alt: 'Standing on a munro summit on a clear day' },
    { src: TechTalk, alt: 'Kyle delivering a tech talk' },
];

const About = () => {
    return (
        <section id="about" className="topAboutContainer">
            <div className="mainContainer">
                <div className="rightAbout">
                    <img
                        src={ProfilePhoto}
                        alt="Portrait of Kyle Fenlon"
                        className="profilePhoto"
                    />
                </div>
                <div className="leftAbout">
                    <div className="heading">
                        <h1 className="mainHeadingAbout">about.</h1>
                    </div>
                    <p className="firstPara">
                        I'm a Software Developer from<br />
                        Glasgow, Scotland.
                    </p>
                    <p className="secondPara">
                        Banging my head against the wall trying to solve a coding issue
                        is my idea of fun. However I guess for 'fun', you will also find
                        me golfing, working out, seeing friends/family and travelling.
                    </p>
                    <div className="socials">
                        <a
                            href="https://www.instagram.com/kyle_fenlon1406/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram profile"
                            className="socialLink"
                        >
                            <FaInstagram className="socialIcon" aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kyle-fenlon-98b424262/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="socialLink"
                        >
                            <FaLinkedin className="socialIcon" aria-hidden="true" />
                        </a>
                        <a
                            href="https://github.com/kylefenlon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="socialLink"
                        >
                            <FaGithub className="socialIcon" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <ul className="imageList" aria-label="Photos">
                {galleryImages.map((img, i) => (
                    <li key={i} className="image">
                        <img src={img.src} alt={img.alt} className="smallImage" />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default About;
