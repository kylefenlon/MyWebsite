import { blogs } from "../Data/BlogData";
import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import '../CSS/Blog.css';
import { useState, useEffect } from "react";
import Slider from "react-slick";

const Blog = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 912);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div id="blog" className="blogContainer">
            <div className="blogContainerHeading">
                <hr></hr>
                <h1 className="blogHeading">Blog</h1>
            </div>
            <ul className="blogList">
                {blogs.map((blog, index) => (
                    <li key={index} className="blogItem">
                        <div className="blog">
                            <h2 className="blogTitle">{blog.title}</h2>
                            <div className="blogTimeContainer">
                                <p className="blogTime"> <FaCalendarAlt size={17} style={{ color: '#777', marginRight: '0.3rem', paddingTop: '0.15rem' }} />- {blog.date}</p>
                                <p className="blogTime"> <FaBookOpen size={17} style={{ color: '#777', marginRight: '0.3rem', paddingTop: '0.15rem' }} />- {blog.readTime}</p>
                            </div>
                            <p className="blogDescription">{blog.description}</p>
                            <hr></hr>
                            <h3 className="blogChallengeTitle">Challenges:</h3>
                            <p className="blogChallenges">{blog.challenges}</p>
                            {blog.images && blog.images.length > 0 && (
                                isMobile ? (
                                    <Slider {...settings} className="blogImages">
                                        {blog.images.map((image, idx) => (
                                            <div key={idx}>
                                                <img src={image} alt={`display ${idx}`} className="smallBlogImage" />
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    <div className="blogImages">
                                        {blog.images.map((image, idx) => (
                                            <img key={idx} src={image} alt={`display ${idx}`} className="smallBlogImage" />
                                        ))}
                                    </div>
                                )
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog;
