import { blogs } from "../Data/BlogData";
import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import '../CSS/Blog.css'

const Blog = () => {

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
                                <div className="blogImages">
                                    <img src={blog.images[0]} alt='display' className="smallBlogImage" />
                                    <img src={blog.images[1]} alt='display' className="smallBlogImage" />
                                    <img src={blog.images[2]} alt='display' className="smallBlogImage" />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Blog;