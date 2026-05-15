import { blogs } from "../Data/BlogData";
import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import '../CSS/Blog.css';
import Slider from "react-slick";

const Blog = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id="blog" className="blogContainer">
            <div className="blogContainerHeading">
                <h1 className="blogHeading">Blog</h1>
            </div>
            <ul className="blogList">
                {blogs.map((blog, index) => (
                    <li key={index} className="blogItem">
                        <article className="blog">
                            <h2 className="blogTitle">{blog.title}</h2>
                            <div className="blogTimeContainer">
                                <p className="blogTime">
                                    <FaCalendarAlt className="metaIcon" aria-hidden="true" /> {blog.date}
                                </p>
                                <p className="blogTime">
                                    <FaBookOpen className="metaIcon" aria-hidden="true" /> {blog.readTime}
                                </p>
                            </div>
                            <p className="blogDescription">{blog.description}</p>
                            <hr className="blogDivider" />
                            <h3 className="blogChallengeTitle">Challenges</h3>
                            <p className="blogChallenges">{blog.challenges}</p>
                            {blog.images && blog.images.length > 0 && (
                                <>
                                    <div className="blogImages blogImagesDesktop">
                                        {blog.images.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={blog.imageAlts?.[idx] ?? `${blog.title} – figure ${idx + 1}`}
                                                className="smallBlogImage"
                                            />
                                        ))}
                                    </div>
                                    <div className="blogImagesMobile">
                                        <Slider {...sliderSettings}>
                                            {blog.images.map((image, idx) => (
                                                <div key={idx}>
                                                    <img
                                                        src={image}
                                                        alt={blog.imageAlts?.[idx] ?? `${blog.title} – figure ${idx + 1}`}
                                                        className="smallBlogImage"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </>
                            )}
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Blog;
